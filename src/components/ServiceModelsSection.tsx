"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import {
  Users,
  UserPlus,
  FileCheck,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ServiceModelsSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const models = [
    {
      badge: "DEDICATED TEAM",
      title: "Product Engineering Teams",
      description:
        "Cross-functional teams focused on delivery and product velocity.",
      features: ["Agile processes", "Monthly billing", "Maximum flexibility"],
      icon: Users,
      color: "from-cosmic-violet to-purple-600",
      glowColor: "rgba(124, 58, 237, 0.4)",
    },
    {
      badge: "TEAM AUGMENTATION",
      title: "Team Extension",
      description:
        "Scale rapidly with vetted engineers who integrate seamlessly.",
      features: ["On-demand scaling", "Cost-effective", "Fast ramp-up"],
      icon: UserPlus,
      color: "from-cosmic-cyan to-blue-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      badge: "PROJECT-BASED",
      title: "Focused Projects",
      description:
        "Clear scope delivery with Fixed Price or Time & Material options.",
      features: ["Fixed or T&M", "Clear specifications", "Defined outcomes"],
      icon: FileCheck,
      color: "from-purple-600 to-cosmic-violet",
      glowColor: "rgba(147, 51, 234, 0.4)",
    },
  ];

  return (
    <section
      id="service-models"
      className="py-32 px-6 relative overflow-hidden bg-cosmic-darker"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle="Flexible engagement to match your stage — pilot, scale or enterprise transformation.">
          Service Models.
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const isExpanded = expandedCards.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Glowing border effect on hover - placed outside card */}
                <div
                  className="absolute -inset-[3px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${model.glowColor}80 0%, transparent 70%)`,
                    filter: "blur(12px)",
                    boxShadow: `0 0 60px ${model.glowColor}80, 0 0 120px ${model.glowColor}60`,
                  }}
                />
                <div
                  className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    border: `2px solid ${model.glowColor}`,
                    boxShadow: `0 0 40px ${model.glowColor}, inset 0 0 40px ${model.glowColor}50`,
                  }}
                />

                <GlassCard
                  className="p-8 h-full flex flex-col transition-all duration-300 relative z-0"
                  delay={0}
                  animate={false}
                >
                  {/* Badge and Icon - Fixed height section for alignment */}
                  <div className="min-h-[120px] mb-6 relative z-10 flex flex-col justify-start">
                    <div className="inline-block px-3 py-1 rounded-full bg-cosmic-violet/20 border border-cosmic-violet/50 mb-4 w-fit">
                      <span className="text-cosmic-violet text-xs font-heading font-semibold">
                        {model.badge}
                      </span>
                    </div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <model.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Content - Flex layout for alignment */}
                  <div className="flex-1 flex flex-col relative z-10">
                    {/* Title - Fixed height section for alignment */}
                    <div className="min-h-[72px] mb-4 flex items-start">
                      <h3 className="text-2xl font-heading font-bold text-cosmic-light leading-tight">
                        {model.title}
                      </h3>
                    </div>

                    {/* Description - Fixed height section for alignment */}
                    <div className="min-h-[72px] mb-6 flex items-start">
                      <p className="text-base text-cosmic-light/70 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    {/* Features - Consistent spacing with alignment */}
                    <div className="min-h-[120px] mb-6 flex-1">
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          !isExpanded && isMobile
                            ? "max-h-0 opacity-0"
                            : "max-h-[300px] opacity-100"
                        }`}
                      >
                        <ul className="space-y-2.5">
                          {model.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="flex items-center gap-2.5 text-cosmic-light/70"
                            >
                              <div className="w-4 h-4 rounded-full bg-cosmic-violet/20 flex items-center justify-center flex-shrink-0">
                                <Check className="w-2.5 h-2.5 text-cosmic-violet" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Read More/Less Toggle - Only on mobile */}
                      {isMobile && (
                        <button
                          onClick={() => toggleCard(index)}
                          className="flex items-center gap-2 mt-4 text-cosmic-violet hover:text-cosmic-cyan transition-colors text-sm font-semibold"
                        >
                          {isExpanded ? (
                            <>
                              <span>Read less</span>
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              <span>Read more</span>
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* CTA Button - Aligned at bottom */}
                    <div className="mt-auto pt-4">
                      <HoverBorderGradient
                        as="a"
                        href="#contact"
                        containerClassName="inline-block w-full"
                        className="text-sm font-semibold text-white px-6 py-3 w-full text-center"
                      >
                        Talk to us
                      </HoverBorderGradient>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/4 border border-white/8 text-center"
            >
              <benefit.icon
                className={`w-8 h-8 ${
                  index === 1 ? "text-cosmic-cyan" : "text-cosmic-violet"
                } mx-auto mb-3`}
              />
              <h4 className="font-heading font-semibold text-cosmic-light mb-2 text-base">
                {benefit.title}
              </h4>
              <p className="text-sm text-cosmic-light/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div> */}

        {/* Why choose block */}
        {/* <div className="mt-16 p-8 rounded-3xl backdrop-blur-md bg-white/4 border border-white/8">
          <h4 className="text-xl font-heading font-semibold text-cosmic-light mb-6">
            Why choose DataCosmos
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ul className="space-y-3">
              {[
                "Proven cloud-native patterns for cost-efficient scale",
                "Production-focused ML & data ops with governance baked in",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-cosmic-light/70"
                >
                  <div className="w-1.5 h-6 rounded-full bg-cosmic-violet mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                "WhatsApp-first and field-ready integrations for real-world adoption",
                "Flexible delivery: embedded teams, augmentation, or managed operations",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-cosmic-light/70"
                >
                  <div className="w-1.5 h-6 rounded-full bg-cosmic-violet mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <HoverBorderGradient
            as="a"
            href="#contact"
            containerClassName="inline-block"
            className="text-sm font-semibold text-white px-6 py-3"
          >
            Discuss platform needs
          </HoverBorderGradient>
        </div> */}
      </div>
    </section>
  );
}
