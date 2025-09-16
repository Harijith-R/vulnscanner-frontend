import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = innerWidth);
    let h = (canvas.height = innerHeight);
    let particles = [];
    let mouse = { x: w / 2, y: h / 2, down: false };

    function onResize() {
      w = canvas.width = innerWidth;
      h = canvas.height = innerHeight;
    }
    window.addEventListener("resize", onResize);

    function onMove(e) {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.x = x;
      mouse.y = y;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });

    function rand(min, max) { return Math.random() * (max - min) + min; }

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: rand(-0.15, 0.15),
        vy: rand(-0.15, 0.15),
        r: rand(0.6, 2.2),
        hue: rand(170, 200)
      });
    }

    let raf;
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        // attraction to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = Math.max(0, 120 - dist) / 120 * 0.8;
        p.vx += (dx / dist) * 0.0008 * (force * 1.6);
        p.vy += (dy / dist) * 0.0008 * (force * 1.6);

        p.x += p.vx;
        p.y += p.vy;

        // slight friction
        p.vx *= 0.995;
        p.vy *= 0.995;

        // wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // draw
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, 0.9)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      }

      // connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,230,255,${1 - d / 80})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return (
    <div className="particle-wrap" aria-hidden>
      <canvas ref={ref} className="w-full h-full" />
    </div>
  );
}
