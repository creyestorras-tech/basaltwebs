// Anella de columnes de basalt per a la portada (three.js, carregat a demanda).
// Gira lentament, s'inclina amb el ratolí o el giroscopi i només dibuixa
// mentre és a la vista.
import {
  CylinderGeometry,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  InstancedMesh,
  Matrix4,
  MeshStandardMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer,
  Euler,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

function rand(i: number) {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}

export function mountBasaltRing(host: HTMLElement, opts: { still?: boolean } = {}) {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
    preserveDrawingBuffer: !!opts.still,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  host.append(canvas);

  const scene = new Scene();
  // Els reflexos (mapa d'entorn) es calculen en un pas a part, perquè el primer dibuix sigui ràpid
  const pmrem = new PMREMGenerator(renderer);
  let env: ReturnType<typeof pmrem.fromScene>['texture'] | null = null;
  const makeEnv = () => {
    env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
  };
  if (opts.still) makeEnv();
  else setTimeout(makeEnv, 120);

  const camera = new PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0, 10.6);

  scene.add(new HemisphereLight(0xd6d9dc, 0x0c0d0e, 0.25));
  const key = new DirectionalLight(0xfff2e0, 1.7);
  key.position.set(-4, 6, 6);
  scene.add(key);
  // Llum rasant de liquen: dona la vora càlida, com el sol baix sobre la pedra
  const rim = new DirectionalLight(0xe3a12f, 1.1);
  rim.position.set(5, -2, -4);
  scene.add(rim);

  // Columnes en dues corones, amb l'eix paral·lel al de l'anella
  const R = 0.26;
  const cols: { a: number; r: number; h: number }[] = [];
  const crowns = [
    { radius: 1.55, count: 22, phase: 0 },
    { radius: 2.0, count: 28, phase: 0.5 },
  ];
  let n = 0;
  for (const c of crowns) {
    for (let k = 0; k < c.count; k++) {
      const a = ((k + c.phase) / c.count) * Math.PI * 2;
      const wave = Math.sin(a * 3 + c.radius) * 0.32;
      cols.push({ a, r: c.radius, h: 0.42 + wave * 0.55 + rand(n++) * 0.32 });
    }
  }

  const geo = new CylinderGeometry(R, R, 1, 6, 1);
  geo.rotateX(Math.PI / 2);
  const mat = new MeshStandardMaterial({
    color: 0x1b1e21,
    roughness: 0.3,
    metalness: 0.15,
    flatShading: true,
    envMapIntensity: 1,
  });
  const mesh = new InstancedMesh(geo, mat, cols.length);
  const m = new Matrix4();
  const q = new Quaternion();
  const e = new Euler();
  const p = new Vector3();
  const s = new Vector3();
  const tint = new Color();
  cols.forEach((c, i) => {
    p.set(Math.cos(c.a) * c.r, Math.sin(c.a) * c.r, (rand(i + 50) - 0.5) * 0.18);
    q.setFromEuler(e.set(0, 0, c.a + Math.PI / 6));
    s.set(1, 1, c.h);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    const v = 0.85 + rand(i + 9) * 0.3;
    mesh.setColorAt(i, tint.setRGB(v, v, v * 1.03));
  });

  const ring = new Group();
  ring.add(mesh);
  const tilt = new Group();
  tilt.add(ring);
  tilt.rotation.set(-0.95, 0.35, 0);
  tilt.position.set(-0.15, 0.3, 0);
  scene.add(tilt);

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let spin = 0.6;
  let raf = 0;
  let last = performance.now();
  let visible = true;

  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    spin += dt * 0.16;
    ring.rotation.z = spin;
    tilt.rotation.x = -0.95 + pointer.y * 0.22;
    tilt.rotation.y = 0.35 + pointer.x * 0.3;
    renderer.render(scene, camera);
    raf = visible && !opts.still ? requestAnimationFrame(frame) : 0;
  }

  function resize() {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (opts.still || !raf) renderer.render(scene, camera);
  }
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  if (opts.still) {
    frame(performance.now());
    return { canvas, destroy() {} };
  }

  const onPointer = (ev: PointerEvent) => {
    pointer.tx = (ev.clientX / window.innerWidth - 0.5) * 2;
    pointer.ty = (ev.clientY / window.innerHeight - 0.5) * 2;
  };
  const onTilt = (ev: DeviceOrientationEvent) => {
    if (ev.gamma == null || ev.beta == null) return;
    pointer.tx = Math.max(-1, Math.min(1, ev.gamma / 30));
    pointer.ty = Math.max(-1, Math.min(1, (ev.beta - 45) / 30));
  };
  window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('deviceorientation', onTilt, { passive: true });

  const io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible && !raf) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  });
  io.observe(host);

  return {
    canvas,
    destroy() {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('deviceorientation', onTilt);
      renderer.dispose();
      env?.dispose();
      pmrem.dispose();
      geo.dispose();
      mat.dispose();
      canvas.remove();
    },
  };
}
