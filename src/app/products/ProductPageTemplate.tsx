"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Play } from "lucide-react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CosmicBackground from "@/components/CosmicBackground";

interface ProductPageProps {
  name: string;
  tagline: string;
  description: string;
  videoSrc: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  benefits: string[];
  useCases: {
    title: string;
    description: string;
  }[];
}

export default function ProductPageTemplate({
  name,
  tagline,
  description,
  videoSrc,
  features,
  benefits,
  useCases,
}: ProductPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cosmic-dark">
      {/* Cosmic Background */}
      <CosmicBackground />

      <div className="relative z-10">
        {/* Hero Section with Video */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/50 via-cosmic-dark/70 to-cosmic-dark" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-6 py-2 rounded-full border border-cosmic-violet/50 bg-cosmic-violet/10 backdrop-blur-sm">
                <span className="text-cosmic-violet font-heading text-sm font-semibold">
                  Product
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-cosmic-light mb-6">
                {name}
              </h1>

              <p className="text-2xl md:text-3xl text-gradient font-heading mb-8">
                {tagline}
              </p>

              <p className="text-xl text-cosmic-light/80 mb-12 max-w-3xl mx-auto">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary">Start Free Trial</Button>
                <Button variant="secondary">
                  <Play className="w-5 h-5 mr-2" fill="currentColor" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="w-6 h-10 rounded-full border-2 border-cosmic-light/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-cosmic-violet"
              />
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 cosmic-bg" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <SectionTitle>Features</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cosmic-violet to-cosmic-cyan flex items-center justify-center text-3xl">
                      {feature.icon || "✦"}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-cosmic-light/70 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 px-6 bg-cosmic-darker relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>Why Choose {name}</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 glass-card rounded-2xl p-6"
                >
                  <div className="w-8 h-8 rounded-full bg-cosmic-violet/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-cosmic-violet" />
                  </div>
                  <p className="text-lg text-cosmic-light/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 cosmic-bg" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <SectionTitle>Use Cases</SectionTitle>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <GlassCard key={index} delay={index * 0.1} hover={true}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-cosmic-light/70 leading-relaxed text-lg">
                        {useCase.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-cosmic-violet flex-shrink-0 mt-2" />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <CTASection /> */}

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
