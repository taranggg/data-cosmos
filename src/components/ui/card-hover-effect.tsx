import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    tag?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={`${item?.link ?? "item"}-${idx}`}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl bg-cosmic-violet/8 dark:bg-cosmic-violet/14"
                layoutId="hoverBackground"
                initial={{ opacity: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                animate={{
                  opacity: 1,
                  boxShadow: "0 18px 50px rgba(124,58,237,0.12)",
                  transition: { duration: 0.18 },
                }}
                exit={{
                  opacity: 0,
                  boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                  transition: { duration: 0.15, delay: 0.08 },
                }}
              />
            )}
          </AnimatePresence>
          {item?.tag && (
            <span className="absolute top-4 right-4 z-30 inline-flex items-center justify-center px-3 py-1 text-xs font-medium text-zinc-100 bg-white/6 backdrop-blur-sm border border-white/8 rounded-full shadow-sm">
              {item.tag}
            </span>
          )}
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
