"use client";

import { motion } from "framer-motion";
import RoundedRippleButton from "./ui/rounded-ripple-button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useRef } from "react";
import { scrollToElement } from "../lib/utils";

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-transparent"
    >
      {/* Globe moved to Contact section */}
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

              <span className="block hero-heading font-heading``` text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem]">
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
            <HoverBorderGradient
              as="button"
              containerClassName="ml-0"
              onClick={() =>
                scrollToElement("contact-form", {
                  focus: true,
                  focusSelector: "input[name=name]",
                  highlightClass: "contact-flash animate",
                })
              }
            >
              Get a Demo
            </HoverBorderGradient>
            <RoundedRippleButton text="See Our Work" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
