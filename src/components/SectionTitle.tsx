"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  children,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-5xl md:text-6xl font-heading font-bold text-cosmic-light mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-cosmic-light/70 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
