"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Button from "./Button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/app/assets/Data_Cosmos__Chaos_to_Clarity.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-dark/50 to-cosmic-dark" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 leading-tight">
              <span className="block hero-heading font-heading text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] mb-1">
                Your Universe of
              </span>

              <span className="block text-gradient hero-middle font-heading font-bold text-[3.25rem] md:text-[4.25rem] lg:text-[5.5rem] mb-2">
                Unlimited Data
              </span>

              <span className="block hero-heading font-heading text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem]">
                Possibilities
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cosmic-light/80 mb-12 max-w-4xl mx-auto"
          >
            We build cohesive, integrated data ecosystems that turn chaos into
            clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary">Get a Demo</Button>
            <HoverBorderGradient as="div" containerClassName="ml-0">
              See Our Work
            </HoverBorderGradient>
          </motion.div>

          {/* Watch Caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-cosmic-light/60"
          >
            <div className="w-8 h-8 rounded-full bg-cosmic-violet/20 flex items-center justify-center">
              <Play
                className="w-4 h-4 text-cosmic-violet"
                fill="currentColor"
              />
            </div>
            <span className="text-sm">2-min watch</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator removed per request */}
    </section>
  );
}
