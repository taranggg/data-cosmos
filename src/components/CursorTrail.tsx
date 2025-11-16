"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    const DPR = Math.max(1, window.devicePixelRatio || 1);

    // particles stores recent positions
    const particles: { x: number; y: number; life: number }[] = [];

    // detect resource / user preferences to reduce effect on low-end devices
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    interface NavExtras {
      connection?: { saveData?: boolean };
      deviceMemory?: number;
      getBattery?: () => Promise<unknown>;
    }
    const nav = navigator as unknown as NavExtras;
    const saveData = nav.connection?.saveData;
    const deviceMemory = nav.deviceMemory || 0;
    const hwConcurrency = navigator.hardwareConcurrency || 4;

    let reducedMode = false;
    if (prefersReducedMotion || saveData) reducedMode = true;
    if (deviceMemory && deviceMemory < 2) reducedMode = true;
    if (hwConcurrency && hwConcurrency <= 2) reducedMode = true;

    // particle count and base size which can be adjusted at runtime (e.g., battery)
    let maxParticlesVar = reducedMode ? 6 : 12;
    let baseSize = reducedMode ? 3 : 5;

    // If battery API available, reduce further when battery is low and not charging
    if (nav.getBattery) {
      nav
        .getBattery()
        .then((b) => {
          const bb = b as unknown as { level?: number; charging?: boolean };
          if (
            bb &&
            typeof bb.level === "number" &&
            bb.level < 0.22 &&
            !bb.charging
          ) {
            reducedMode = true;
            maxParticlesVar = Math.min(maxParticlesVar, 5);
            baseSize = Math.min(baseSize, 3);
          }
        })
        .catch(() => {
          /* ignore battery errors */
        });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    // cache non-null canvas for nested functions so TypeScript knows it's not null
    const c = canvas as HTMLCanvasElement;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      c.width = Math.round(width * DPR);
      c.height = Math.round(height * DPR);
      c.style.width = width + "px";
      c.style.height = height + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function onPointerMove(e: PointerEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // add particle at pointer
      particles.push({ x: mouseX, y: mouseY, life: 1 });
      if (particles.length > maxParticlesVar) particles.shift();
    }

    function onPointerLeave() {
      // no-op: pointer left
    }

    function animate() {
      rafRef.current = requestAnimationFrame(animate);

      // fade canvas slowly
      ctx.clearRect(0, 0, width, height);

      // update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life *= 0.92;
      }

      // draw particles from oldest to newest for better layering
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const t = i / Math.max(1, particles.length - 1);
        // smaller sizes for a subtler trail; scale down further in reduced mode
        const size = baseSize * (0.35 + t * 0.7);
        const alpha = p.life * (reducedMode ? 0.6 : 0.6 + t * 0.4);

        if (alpha <= 0.01) continue;

        const primaryRgb = "38,0,51"; // #260033
        const accentRgb = "86,10,102"; // slightly lighter shade of #260033

        const colorA = `rgba(${primaryRgb},${alpha})`;
        const colorB = `rgba(${accentRgb},${Math.max(alpha * 0.6, 0.12)})`;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2);
        grad.addColorStop(0, colorA);
        grad.addColorStop(0.5, colorB);
        // fade to fully transparent version of the primary hue for smoother edge
        grad.addColorStop(1, `rgba(${primaryRgb},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // slowly remove dead particles
      while (particles.length && particles[0].life < 0.02) particles.shift();
    }

    // Setup
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointercancel", onPointerLeave);

    // On touch devices, don't show the trail (avoid interfering)
    const isTouch = navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
    if (!isTouch) animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointercancel", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 40,
        mixBlendMode: "screen",
      }}
    />
  );
}
