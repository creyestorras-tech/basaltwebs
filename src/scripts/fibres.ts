// Fibres de llum (com fils de lava) en un canvas 2D lleuger.
// Només dibuixa mentre és a la vista; al mòbil, menys fibres i a 30 fps;
// amb el moviment reduït, un sol fotograma quiet.
export function mountFibres(host: HTMLElement) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.append(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.matchMedia('(max-width: 760px), (pointer: coarse)').matches;
  const count = small ? 22 : 54;
  const fps = small ? 30 : 60;
  const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5);

  const fibres = Array.from({ length: count }, (_, i) => {
    const r = (k: number) => {
      const s = Math.sin((i + 1) * 91.7 + k * 13.3) * 43758.5453;
      return s - Math.floor(s);
    };
    return {
      y: 0.35 + (r(1) - 0.5) * 0.5,
      amp: 0.05 + r(2) * 0.16,
      freq: 1.2 + r(3) * 2.2,
      speed: 0.12 + r(4) * 0.28,
      phase: r(5) * Math.PI * 2,
      tilt: 0.25 + r(6) * 0.35,
      alpha: 0.05 + r(7) * 0.22,
      hot: r(8) > 0.82,
    };
  });

  let w = 0;
  let h = 0;
  const resize = () => {
    w = host.clientWidth;
    h = host.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(performance.now());
  };

  function draw(now: number) {
    const t = now / 1000;
    ctx!.clearRect(0, 0, w, h);
    ctx!.globalCompositeOperation = 'lighter';
    ctx!.lineWidth = 1;
    const steps = small ? 28 : 46;
    for (const f of fibres) {
      ctx!.beginPath();
      for (let s = 0; s <= steps; s++) {
        const u = s / steps;
        const x = u * w * 1.1 - w * 0.05;
        // Les fibres convergeixen cap a la dreta, com un raig que surt de la pedra
        const spread = 1 - u * 0.7;
        const y =
          (f.y + (u - 0.5) * f.tilt * 0.4) * h +
          Math.sin(u * f.freq * Math.PI + t * f.speed * 2 + f.phase) * f.amp * h * spread;
        if (s === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.strokeStyle = f.hot ? `rgba(240, 181, 74, ${f.alpha + 0.1})` : `rgba(227, 161, 47, ${f.alpha})`;
      ctx!.stroke();
    }
  }

  let raf = 0;
  let last = 0;
  let visible = false;
  const loop = (now: number) => {
    raf = visible ? requestAnimationFrame(loop) : 0;
    if (now - last < 1000 / fps - 1) return;
    last = now;
    draw(now);
  };

  new ResizeObserver(resize).observe(host);
  if (reduce) return;
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf) raf = requestAnimationFrame(loop);
  }).observe(host);
}
