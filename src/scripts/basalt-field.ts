// Camp de columnes de basalt (prismes hexagonals) per a la portada.
// Es carrega a demanda: només a pantalles amb ratolí, sense «reduce motion»
// i quan el navegador està lliure. Renderitza només quan alguna cosa canvia.
import {
  Color,
  CylinderGeometry,
  DirectionalLight,
  Fog,
  HemisphereLight,
  InstancedMesh,
  Matrix4,
  MeshStandardMaterial,
  PerspectiveCamera,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';

type Column = { x: number; z: number; h: number; drift: number; delay: number };

// Soroll determinista: el mateix camp a cada visita i a la imatge estàtica
function rand(i: number) {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}

export function mountBasaltField(host: HTMLElement, opts: { still?: boolean } = {}) {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
    preserveDrawingBuffer: !!opts.still,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  host.append(canvas);

  const scene = new Scene();
  scene.fog = new Fog(0x131517, 11, 24);

  const camera = new PerspectiveCamera(28, 1, 0.1, 80);
  const lookAt = new Vector3(2.5, 0, -2.5);

  scene.add(new HemisphereLight(0xc9ccd0, 0x0c0d0e, 0.35));
  const key = new DirectionalLight(0xfff4e6, 1.55);
  key.position.set(-6, 12, 7);
  scene.add(key);
  // Llum rasant càlida, com el sol baix sobre el cingle: només toca les arestes
  const rim = new DirectionalLight(0xe3a12f, 0.7);
  rim.position.set(9, 3, -8);
  scene.add(rim);

  // Retícula hexagonal (coordenades axials, cares planes)
  const R = 0.5;
  const cols: Column[] = [];
  let n = 0;
  for (let q = -15; q <= 17; q++) {
    for (let r = -14; r <= 6; r++) {
      const x = R * 1.5 * q;
      const z = R * Math.sqrt(3) * (r + q / 2);
      if (z < -10 || z > 1.2 || x < -12 || x > 13) continue;
      // Les columnes creixen cap a la dreta i cap al fons: l'esquerra queda baixa sota el text
      const rise = Math.max(0, (x - 1) / 12);
      const h = 0.15 + rise * rise * 2.6 + rand(n) * (0.2 + rise * 0.9);
      cols.push({ x, z, h, drift: 0.4 + rand(n + 99) * 0.9, delay: Math.max(0, (x + 12) / 25) });
      n++;
    }
  }

  const geo = new CylinderGeometry(R * 0.985, R * 0.985, 1, 6, 1);
  geo.translate(0, 0.5, 0);
  const mat = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0, flatShading: true });
  const mesh = new InstancedMesh(geo, mat, cols.length);
  const tint = new Color();
  cols.forEach((c, i) => {
    const v = 0.12 + rand(i + 7) * 0.06;
    mesh.setColorAt(i, tint.setRGB(v, v * 1.02, v * 1.06));
  });
  scene.add(mesh);

  const m = new Matrix4();
  const pos = new Vector3();
  const quat = new Quaternion();
  const scl = new Vector3(1, 1, 1);

  // Estat: entrada (una sola vegada), posició del ratolí i scroll
  const intro = { start: performance.now(), dur: opts.still ? 0 : 1400 };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let scroll = 0;
  let targetScroll = 0;
  let raf = 0;
  let visible = true;

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

  function layout(now: number) {
    const t = intro.dur ? (now - intro.start) / intro.dur : 1;
    let settling = false;
    cols.forEach((c, i) => {
      const local = Math.min(1, Math.max(0, (t - c.delay * 0.45) / 0.55));
      if (local < 1) settling = true;
      const grow = easeOut(local);
      // En fer scroll, les columnes s'enfonsen a ritmes diferents: el cingle «s'assenta»
      const sink = scroll * c.drift * 1.6;
      const h = Math.max(0.05, c.h * grow - sink);
      pos.set(c.x, -0.02, c.z);
      scl.set(1, h, 1);
      m.compose(pos, quat, scl);
      mesh.setMatrixAt(i, m);
    });
    mesh.instanceMatrix.needsUpdate = true;
    return settling;
  }

  function frame(now: number) {
    raf = 0;
    // Seguiment amortit del ratolí (com una molla suau, sense rebot)
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;
    scroll += (targetScroll - scroll) * 0.12;

    camera.position.set(-2 + pointer.x * 0.9, 11 - pointer.y * 0.5 + scroll * 1.2, 9.5);
    camera.lookAt(lookAt);

    const settling = layout(now);
    renderer.render(scene, camera);

    const moving =
      Math.abs(pointer.tx - pointer.x) > 0.001 ||
      Math.abs(pointer.ty - pointer.y) > 0.001 ||
      Math.abs(targetScroll - scroll) > 0.001;
    if (visible && !opts.still && (settling || moving)) raf = requestAnimationFrame(frame);
  }

  const kick = () => {
    if (!raf && visible) raf = requestAnimationFrame(frame);
  };

  function resize() {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    kick();
  }

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  if (opts.still) {
    frame(performance.now() + 10_000);
    return { canvas, destroy() {} };
  }

  const section = host.closest('section') ?? host;
  const onPointer = (e: PointerEvent) => {
    const r = section.getBoundingClientRect();
    pointer.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    pointer.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    kick();
  };
  section.addEventListener('pointermove', onPointer, { passive: true });

  // Progrés de scroll sense escoltar l'esdeveniment scroll: la part de la portada que encara es veu
  const steps = Array.from({ length: 41 }, (_, i) => i / 40);
  const io = new IntersectionObserver(
    ([e]) => {
      visible = e.isIntersecting;
      const above = e.boundingClientRect.top < 0;
      targetScroll = above ? Math.min(1, 1 - e.intersectionRatio) : 0;
      if (visible) kick();
    },
    { threshold: steps },
  );
  io.observe(section);

  kick();

  return {
    canvas,
    destroy() {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      section.removeEventListener('pointermove', onPointer);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      canvas.remove();
    },
  };
}
