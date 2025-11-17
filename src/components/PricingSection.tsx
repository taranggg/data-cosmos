"use client";

import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  const pricingCards = [
    {
      badge: "Custom",
      title: "Pilot",
      features: [
        "4–8 week proof of value",
        "Core connectors",
        "Basic ML model",
      ],
      glowColor: "rgba(124, 58, 237, 0.9)",
      dotColor: "rgba(124, 58, 237, 0.3)",
    },
    {
      badge: "Custom",
      title: "Scale",
      features: [
        "End-to-end platform",
        "Dedicated team",
        "ML Ops & monitoring",
      ],
      glowColor: "rgba(6,182,212,0.9)",
      dotColor: "rgba(6,182,212,0.18)",
    },
    {
      badge: "Custom",
      title: "Enterprise",
      features: [
        "SLA & on-call",
        "Governance & compliance",
        "Dedicated product team",
      ],
      glowColor: "rgba(99,102,241,0.9)",
      dotColor: "rgba(99,102,241,0.25)",
    },
  ];

  // Unified carousel items (6 cards, mixed text + stats but consistent layout)
  const carouselItems = [
    {
      title: "Time to first win",
      stat: "<60 days",
      statLabel: "to your first live dashboard",
      description:
        "Go from kickoff to a decision-ready dashboard in under two months, not quarters.",
    },
    {
      title: "Outcome-first delivery",
      description:
        "We start from your revenue, churn, or efficiency goals and design the data stack to serve those outcomes.",
    },
    {
      title: "Always-on reliability",
      stat: "99.9%",
      statLabel: "uptime SLA",
      description:
        "Your analytics stay online with predictable performance, even during peak usage.",
    },
    {
      title: "Composable data stack",
      description:
        "Plug-and-play best-in-class tools with no vendor lock-in, so your stack evolves with your business.",
    },
    {
      title: "Stakeholder happiness",
      stat: "65+",
      statLabel: "NPS score",
      description:
        "Teams actually use what we ship—because we design for real decision workflows, not just dashboards.",
    },
    {
      title: "Security & governance",
      description:
        "Access control, auditability, and compliance are woven into the platform from day one—not bolted on later.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const GlowingBorder: React.FC<{ glowColor: string }> = ({ glowColor }) => (
    <div
      aria-hidden
      className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
      style={{
        border: `1px solid ${glowColor}`,
        boxShadow: `0 0 10px ${glowColor}`,
      }}
    />
  );

  // Infinite horizontal scroll for the bottom strip
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let running = true;
    let prev = performance.now();
    const pxPerSecond = 40;

    const step = (now: number) => {
      if (!running) return;
      const dt = (now - prev) / 1000;
      prev = now;
      el.scrollLeft += pxPerSecond * dt;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      raf = requestAnimationFrame(step);
    };

    prev = performance.now();
    raf = requestAnimationFrame(step);

    const onEnter = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const onLeave = () => {
      if (running) return;
      running = true;
      prev = performance.now();
      raf = requestAnimationFrame(step);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle="Flexible models to match your needs — request a tailored quote.">
          Engagement & Pricing.
        </SectionTitle>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingCards.map((card, i) => (
            <div key={i} className="group relative">
              <GlowingBorder glowColor={card.glowColor} />

              {/* Badge - top right */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cosmic-violet/20 via-cosmic-violet/10 to-transparent border border-white/6 text-cosmic-light/85 font-semibold text-xs tracking-wide">
                  {card.badge}
                </span>
              </div>

              <GlassCard
                className="p-6 h-full flex flex-col transition-all duration-300 relative z-0 overflow-hidden"
                delay={0}
                animate={false}
              >
                <div className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none">
                  <DottedGlowBackground
                    gap={12}
                    radius={2}
                    color={card.dotColor}
                    glowColor={card.glowColor}
                    opacity={0.8}
                    backgroundOpacity={0.1}
                    speedMin={0.4}
                    speedMax={1.2}
                    speedScale={0.8}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-start text-left w-full">
                  <div className="text-4xl font-heading font-bold mb-4">
                    <span className="bg-gradient-to-r from-cosmic-light to-cosmic-cyan bg-clip-text text-transparent drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
                      {card.title}
                    </span>
                  </div>

                  <ul className="text-cosmic-light/70 space-y-3 mb-6 w-full">
                    {card.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cosmic-violet/40 to-cosmic-cyan/20 flex items-center justify-center border border-white/6">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </span>
                        <span className="text-sm font-medium text-cosmic-light/85">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Auto-scrolling unified carousel strip */}
        <div className="mt-8">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden py-6 px-2 pricing-carousel-track"
          >
            {/* Render sequence twice for seamless loop */}
            {[...carouselItems, ...carouselItems].map((item, idx) => (
              <GlassCard key={idx} className="w-80 p-6 flex-shrink-0">
                <div className="flex flex-col gap-3">
                  {item.stat && (
                    <div className="flex flex-col">
                      <span className="text-2xl font-heading font-semibold text-gradient leading-tight">
                        {item.stat}
                      </span>
                      {item.statLabel && (
                        <span className="text-xs text-cosmic-light/60">
                          {item.statLabel}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="text-lg font-heading font-bold text-cosmic-light">
                    {item.title}
                  </h3>

                  <p className="text-cosmic-light/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
