"use client";

import { useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import {
  Database,
  Layers,
  BarChart3,
  Brain,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type Point = { x: number; y: number };

export default function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: "Data Integration & ETL Pipelines",
      description: "Unify, clean, and prepare data from multiple sources",
      color: "#22D3EE",
    },
    {
      icon: Layers,
      title: "Predictive & Prescriptive Analytics",
      description: "Forecast trends and recommend optimal actions",
      color: "#A78BFA",
    },
    {
      icon: BarChart3,
      title: "Real-Time Visualizations",
      description: "Visualize KPIs, metrics, and anomalies dynamically",
      color: "#60A5FA",
    },
    {
      icon: Brain,
      title: "AI-Driven Insights",
      description: "Uncover sentiment, behavior, and performance signals",
      color: "#F59E0B",
    },
    {
      icon: Shield,
      title: "Scalable Cloud Infrastructure",
      description: "Deploy analytics securely on AWS or hybrid clouds",
      color: "#60A5FA",
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description:
        "Tailored data platforms designed for your unique requirements",
      color: "#F472B6",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [points, setPoints] = useState<Point[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const compute = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const newPoints: Point[] = cardRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - rect.left,
          y: r.top + r.height / 2 - rect.top,
        };
      });
      // ensure we have same length as services
      if (newPoints.length && newPoints.some((p) => p.x !== 0)) {
        setPoints(newPoints);
      }
    };

    // compute after render and a tiny delay to ensure layout settled
    compute();
    const t = window.setTimeout(compute, 120);

    const ro = new ResizeObserver(compute);
    ro.observe(document.documentElement);
    window.addEventListener("resize", compute);

    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Helper to create a smooth cubic curve between two points with a visible curve
  const buildCurve = (a: Point, b: Point) => {
    const dx = b.x - a.x;
    const midY = (a.y + b.y) / 2;
    // curve intensity depends on horizontal distance, clamp for stability
    const curveIntensity = Math.min(140, Math.max(40, Math.abs(dx) * 0.18));
    const controlY = midY - curveIntensity;
    const cx1 = a.x + dx * 0.35;
    const cx2 = b.x - dx * 0.35;
    return `M ${a.x} ${a.y} C ${cx1} ${controlY}, ${cx2} ${controlY}, ${b.x} ${b.y}`;
  };

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background: connecting lines + colored dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="s1" x1="0" x2="1">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {points.length >= services.length && (
            <g>
              {/* top row: 0->1->2 */}
              <path
                d={buildCurve(points[0], points[1])}
                stroke={services[0].color}
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 1 }}
              />
              <path
                d={buildCurve(points[1], points[2])}
                stroke={services[1].color}
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 1, animationDelay: "0.12s" }}
              />

              {/* bottom row: 3->4->5 */}
              <path
                d={buildCurve(points[3], points[4])}
                stroke={services[3].color}
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 0.95, animationDelay: "0.24s" }}
              />
              <path
                d={buildCurve(points[4], points[5])}
                stroke={services[4].color}
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 0.95, animationDelay: "0.36s" }}
              />

              {/* vertical connectors */}
              <path
                d={buildCurve(points[1], points[4])}
                stroke={services[1].color}
                strokeWidth={3.6}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 0.85, animationDelay: "0.48s" }}
              />
              <path
                d={buildCurve(points[0], points[3])}
                stroke={services[0].color}
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 0.7, animationDelay: "0.54s" }}
              />
              <path
                d={buildCurve(points[2], points[5])}
                stroke={services[2].color}
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                className="stroke-animate"
                style={{ opacity: 0.7, animationDelay: "0.6s" }}
              />

              {/* subtle anchor dots (less prominent) */}
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={4}
                  fill={services[i]?.color || "#fff"}
                  style={{ opacity: 0.06 }}
                />
              ))}
            </g>
          )}
        </svg>

        {/* subtle scattered dot accents */}
        <div className="absolute inset-0">
          {[
            { left: "6%", top: "10%", color: "bg-violet-400/24" },
            { left: "24%", top: "48%", color: "bg-cyan-400/18" },
            { left: "44%", top: "28%", color: "bg-violet-400/18" },
            { left: "72%", top: "56%", color: "bg-cyan-300/20" },
            { left: "88%", top: "42%", color: "bg-pink-400/16" },
          ].map((d, i) => (
            <span
              key={i}
              className={`absolute w-2 h-2 rounded-full ${d.color} blur-[6px]`}
              style={{ left: d.left, top: d.top }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle>Our Services.</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el || null;
              }}
            >
              <GlassCard
                delay={index * 0.1}
                className={`relative z-30 overflow-hidden h-full`}
                style={{
                  maxHeight: 250,
                  padding: "1.25rem",
                  boxSizing: "border-box",
                  background: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)), radial-gradient(circle at 8% 12%, ${service.color}22, transparent 30%)`,
                }}
                animate={false}
              >
                <div className="mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}33, ${service.color}12)`,
                      boxShadow: `0 8px 26px ${service.color}22`,
                    }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-3">
                  {service.title}
                </h3>
                <p className="text-cosmic-light/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cosmic-light/80 hover:text-white transition-all group"
                  >
                    <span className="underline decoration-transparent group-hover:decoration-white/30 transition-all">
                      Read more
                    </span>
                    <ArrowRight className="w-4 h-4 text-cosmic-light/70 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
