"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../app/assets/about.png";
import { Target, Lightbulb, Rocket, Shield, Phone } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Tooltip } from "./ui/tooltip-card";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through intelligent data solutions",
      iconClass: "text-cosmic-violet",
      bulletClass: "bg-cosmic-violet",
      details: [
        "Empowering businesses through intelligent data solutions",
        "Engineering-first data platforms",
        "Secure cloud-first architectures",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies and best practices",
      iconClass: "text-cosmic-cyan",
      bulletClass: "bg-cosmic-cyan",
      details: [
        "Leveraging cutting-edge technologies",
        "Product-minded engineering",
        "Continuous experimentation",
      ],
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile approach ensuring rapid time-to-value",
      iconClass: "text-cosmic-amber",
      bulletClass: "bg-cosmic-amber",
      details: [
        "Rapid prototyping and delivery",
        "Focused MVPs with measurable outcomes",
        "Short feedback loops",
      ],
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Building long-term relationships through excellence",
      iconClass: "text-cosmic-green",
      bulletClass: "bg-cosmic-green",
      details: [
        "Long-term engagement and support",
        "Security and compliance focus",
        "Transparent delivery practices",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block mb-4 px-5 py-2 rounded-full border border-cosmic-violet/40 bg-cosmic-violet/6 backdrop-blur-sm">
                <span className="text-cosmic-violet font-heading text-sm font-semibold">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-cosmic-light mb-4 leading-tight">
                We Build a{" "}
                <span className="text-gradient">Cohesive Data Ecosystem</span>
              </h2>

              <p className="text-lg text-cosmic-light/80 mb-6 leading-relaxed">
                Transforming raw data into actionable insights with a focus on
                engineering rigor, product thinking, and secure cloud-first
                architectures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {values.map((value, i) => (
                  <Tooltip
                    key={i}
                    containerClassName="w-full"
                    content={
                      <div className="max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                          <value.icon
                            className={`w-5 h-5 ${value.iconClass}`}
                          />
                          <div className="text-sm font-heading font-semibold text-cosmic-light">
                            {value.title}
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {value.details.map((d: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span
                                className={`mt-1 w-2 h-2 rounded-full ${value.bulletClass} flex-shrink-0`}
                              />
                              <span className="text-xs text-cosmic-light/80">
                                {d}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-4 rounded-2xl p-4 backdrop-blur-sm border border-white/6 bg-cosmic-violet/6 cursor-default"
                    >
                      <value.icon className={`w-6 h-6 ${value.iconClass}`} />
                      <div>
                        <div className="text-sm font-heading font-semibold text-cosmic-light">
                          {value.title}
                        </div>
                      </div>
                    </motion.div>
                  </Tooltip>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <HoverBorderGradient
                    as="a"
                    href="#contact"
                    containerClassName="inline-block w-full group/cta"
                    className="text-sm font-semibold text-white px-6 py-3.5 w-full text-center shadow-lg shadow-cosmic-violet/20 flex items-center justify-center gap-2 relative"
                  >
                    <span>Work with us</span>
                  </HoverBorderGradient>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right - About image (no card, blended with bg) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative -mx-4 lg:mx-0">
              <div className="relative aspect-video rounded-2xl overflow-visible">
                <Image
                  src={aboutImg}
                  alt="About us"
                  fill
                  style={{ objectFit: "contain" }}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
