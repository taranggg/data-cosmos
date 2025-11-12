"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { Target, Boxes, Lock } from "lucide-react";

export default function WhyChooseUsSection() {
  const values = [
    {
      icon: Target,
      title: "Outcome-First Delivery",
      description:
        "We start with your business goals and work backward to the right technical solution.",
    },
    {
      icon: Boxes,
      title: "Composable Data Stack",
      description:
        "Best-in-class tools orchestrated seamlessly. No vendor lock-in, full flexibility.",
    },
    {
      icon: Lock,
      title: "Security & Governance",
      description:
        "Enterprise-grade security, compliance, and data governance built in from day one.",
    },
  ];

  const metrics = [
    {
      number: "<60",
      label: "days to first dashboard",
      unit: "",
    },
    {
      number: "99.9",
      label: "uptime SLA",
      unit: "%",
    },
    {
      number: "65",
      label: "NPS score",
      unit: "+",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 cosmic-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle>Why Choose Us</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Value Pillars */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl p-6 glass-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-violet to-cosmic-cyan flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-cosmic-light mb-2">
                      {value.title}
                    </h3>
                    <p className="text-cosmic-light/70">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <GlassCard key={index} delay={index * 0.2}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  >
                    <div className="text-6xl md:text-7xl font-heading font-bold text-gradient mb-2">
                      {metric.number}
                      {metric.unit}
                    </div>
                  </motion.div>
                  <p className="text-xl text-cosmic-light/80">{metric.label}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
