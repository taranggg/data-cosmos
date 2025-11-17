"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  style?: React.CSSProperties;
  animate?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  style,
  animate = true,
  ...rest
}: GlassCardProps) {
  const baseClass = `glass-card rounded-3xl p-8 backdrop-blur-md bg-white/4 border border-white/8 ${
    hover ? "glass-card-hover" : ""
  } ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        style={style}
        className={baseClass}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div style={style} className={baseClass} {...rest}>
      {children}
    </div>
  );
}
