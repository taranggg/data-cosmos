"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-8 py-4 rounded-2xl font-heading font-semibold text-base transition-all duration-300 relative overflow-hidden cursor-pointer";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cosmic-violet to-cosmic-cyan text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]",
    secondary:
      "bg-white/10 backdrop-blur-sm border border-white/20 text-cosmic-light hover:bg-white/20 hover:border-cosmic-violet",
    outline:
      "border-2 border-cosmic-violet text-cosmic-violet hover:bg-cosmic-violet hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
