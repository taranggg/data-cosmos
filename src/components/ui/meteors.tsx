"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;

  const [meteorProps, setMeteorProps] = React.useState(() =>
    new Array(meteorCount).fill({
      leftPct: 0,
      topPct: 0,
      delay: "0s",
      duration: "12s",
    })
  );

  React.useEffect(() => {
    const props = new Array(meteorCount).fill(true).map((_, idx) => {
      const leftPct = (idx / Math.max(1, meteorCount - 1)) * 100;
      const topPct = Math.random() * 100;
      const delay = Math.random() * 6 + "s";
      const duration = Math.floor(Math.random() * (18 - 10) + 10) + "s";
      return { leftPct, topPct, delay, duration };
    });
    setMeteorProps(props);
  }, [meteorCount]);

  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: "none" }}
    >
      {meteorProps.map((m, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: m.topPct + "%",
            left: m.leftPct + "%",
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        ></span>
      ))}
    </motion.div>
  );
};
