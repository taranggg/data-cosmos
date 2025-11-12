"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import {
  Users,
  UserPlus,
  FileCheck,
  Clock,
  DollarSign,
  Zap,
} from "lucide-react";

export default function ServiceModelsSection() {
  const models = [
    {
      badge: "DEDICATED TEAM",
      title: "Product Engineering Teams",
      description:
        "This is a specialized, self-sufficient team made up of various roles. They are equipped to deliver technology solutions quickly and effectively. Roles are tailored to each specific project, with management shared between a Scrum Master and the client's product owner.",
      features: [
        "Agile processes incorporated",
        "Monthly billing",
        "Maximum flexibility",
        "Ideal for startups, MVPs, and product companies",
      ],
      icon: Users,
      color: "from-cosmic-violet to-purple-600",
    },
    {
      badge: "TEAM AUGMENTATION",
      title: "Team Extension",
      description:
        "Team augmentation is suitable for businesses and projects of all sizes, allowing you to fill talent gaps by adding the necessary expertise to your team. The augmented team members integrate seamlessly with your team, participating in regular meetings.",
      features: [
        "Scale on-demand quickly",
        "Cost-effective staffing",
        "Monthly billing",
        "Eliminate hiring challenges",
      ],
      icon: UserPlus,
      color: "from-cosmic-cyan to-blue-600",
    },
    {
      badge: "PROJECT-BASED",
      title: "Small to Mid-Scale Projects",
      description:
        "We offer flexible pricing models tailored to your project needs. Choose between Fixed Price for well-defined projects or Time & Material for evolving scopes and complex business needs.",
      features: [
        "Fixed Price Model for clear scope",
        "Time & Material for flexible scope",
        "Well-documented specifications",
        "Ideal for defined deliverables",
      ],
      icon: FileCheck,
      color: "from-purple-600 to-cosmic-violet",
    },
  ];

  return (
    <section
      id="service-models"
      className="py-32 px-6 relative overflow-hidden bg-cosmic-darker"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle="Flexible engagement models designed for your success">
          Our Service Models
        </SectionTitle>

        <div className="space-y-8">
          {models.map((model, index) => (
            <GlassCard key={index} delay={index * 0.2}>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Icon and Badge */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-4 accent-glow`}
                  >
                    <model.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="inline-block px-4 py-1 rounded-full bg-cosmic-violet/20 border border-cosmic-violet/50">
                    <span className="text-cosmic-violet text-xs font-heading font-semibold">
                      {model.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-heading font-bold text-cosmic-light mb-4">
                    {model.title}
                  </h3>
                  <p className="text-lg text-cosmic-light/80 mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {model.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cosmic-violet" />
                        <span className="text-cosmic-light/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <Clock className="w-8 h-8 text-cosmic-violet mx-auto mb-3" />
            <h4 className="font-heading font-semibold text-cosmic-light mb-2">
              Quick Onboarding
            </h4>
            <p className="text-sm text-cosmic-light/60">
              Start within 1-2 weeks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <Zap className="w-8 h-8 text-cosmic-cyan mx-auto mb-3" />
            <h4 className="font-heading font-semibold text-cosmic-light mb-2">
              Flexible Scaling
            </h4>
            <p className="text-sm text-cosmic-light/60">
              Scale up or down as needed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <DollarSign className="w-8 h-8 text-cosmic-violet mx-auto mb-3" />
            <h4 className="font-heading font-semibold text-cosmic-light mb-2">
              Transparent Pricing
            </h4>
            <p className="text-sm text-cosmic-light/60">No hidden costs</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
