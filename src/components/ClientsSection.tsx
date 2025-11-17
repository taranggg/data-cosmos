"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ClientsSection() {
  const clients = [
    "Client A",
    "Client B",
    "Client C",
    "Client D",
    "Client E",
    "Client F",
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // continuous RAF-driven scroll (pixels per second)
    let rafId = 0;
    let running = true;
    let prev = performance.now();
    const pxPerSecond = 60; // adjust speed here

    const step = (now: number) => {
      if (!running) return;
      const dt = now - prev;
      prev = now;
      // advance
      el.scrollLeft += (pxPerSecond * dt) / 1000;
      // when we've scrolled half (since content is duplicated), rewind by half to create seamless loop
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(step);
    };

    prev = performance.now();
    rafId = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-cosmic-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-cosmic-light/60 text-sm mb-8 font-heading"
        >
          Trusted by teams who ship.
        </motion.p>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-hidden py-6 px-2"
            aria-hidden={false}
          >
            {/* duplicate items to create seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % clients.length) * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-48 md:w-56 lg:w-64 h-28 md:h-32 rounded-xl relative backdrop-blur-md border border-white/6 shadow-[0_8px_30px_rgba(0,0,0,0.45)] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))",
                }}
              >
                <div className="absolute inset-0 rounded-xl pointer-events-none" />
                <div className="flex items-center justify-center px-4 text-center">
                  <div className="font-heading text-lg md:text-xl text-cosmic-light/90 transition-colors duration-200">
                    {client}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
