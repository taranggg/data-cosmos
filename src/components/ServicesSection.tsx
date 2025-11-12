"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import {
  Database,
  Layers,
  BarChart3,
  Brain,
  Shield,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: "Big Data",
      description:
        "Scalable data lakes and warehouses built for petabyte-scale workloads.",
    },
    {
      icon: Layers,
      title: "Data Management",
      description:
        "End-to-end pipelines with automated orchestration and quality checks.",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Interactive dashboards and reports that drive decision-making.",
    },
    {
      icon: Brain,
      title: "Analytics",
      description:
        "Advanced analytics and predictive modeling for actionable insights.",
    },
    {
      icon: Shield,
      title: "Data Science",
      description:
        "ML models and AI solutions that transform your business outcomes.",
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description:
        "Tailored data platforms designed for your unique requirements.",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 cosmic-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle>Our Services.</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-violet to-cosmic-cyan flex items-center justify-center accent-glow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-3">
                {service.title}
              </h3>
              <p className="text-cosmic-light/70 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
