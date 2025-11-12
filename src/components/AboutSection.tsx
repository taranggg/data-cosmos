"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Shield } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through intelligent data solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies and best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile approach ensuring rapid time-to-value",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Building long-term relationships through excellence",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 cosmic-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-8">
              {/* Placeholder for about image - replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-cosmic-violet/20 to-cosmic-cyan/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌌</div>
                  <p className="text-cosmic-light/60 font-heading">
                    Data Cosmos Team
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 accent-glow"
            >
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gradient mb-1">
                  100+
                </div>
                <p className="text-sm text-cosmic-light/70">
                  Projects Delivered
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-6 py-2 rounded-full border border-cosmic-violet/50 bg-cosmic-violet/10 backdrop-blur-sm">
                <span className="text-cosmic-violet font-heading text-sm font-semibold">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-heading font-bold text-cosmic-light mb-6 leading-tight">
                We Strive To Create A{" "}
                <span className="text-gradient">Cohesive Ecosystem</span>
              </h2>

              <p className="text-xl text-cosmic-light/80 mb-8 leading-relaxed">
                That Empowers You To Maximize The Value Of Your Data.
              </p>

              <p className="text-lg text-cosmic-light/70 mb-10 leading-relaxed">
                At Data Cosmos, we are passionate about transforming raw data
                into actionable insights. Our team of experienced data
                engineers, analysts, and scientists work collaboratively to
                deliver solutions that drive real business impact.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 glass-card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-violet to-cosmic-cyan flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-cosmic-light mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-cosmic-light/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
