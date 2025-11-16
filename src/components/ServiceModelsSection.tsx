"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import {
  Users,
  UserPlus,
  FileCheck,
  Check,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react";
import { createElement } from "react";

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  violet: "linear-gradient(hsl(263, 90%, 50%), hsl(248, 90%, 50%))",
  cyan: "linear-gradient(hsl(193, 90%, 50%), hsl(178, 90%, 50%))",
};

const getBackgroundStyle = (color: string): React.CSSProperties => {
  if (gradientMapping[color]) {
    return { background: gradientMapping[color] };
  }
  return { background: color };
};

type ServiceModel = {
  badge: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  glassColor: string;
  glowColor: string;
};

const models: ServiceModel[] = [
  {
    badge: "DEDICATED TEAM",
    title: "Product Engineering Teams",
    description:
      "Cross-functional teams focused on delivery and product velocity.",
    features: ["Agile processes", "Monthly billing", "Maximum flexibility"],
    icon: Users,
    color: "from-cosmic-violet to-purple-600",
    glassColor: "purple",
    glowColor: "rgba(124, 58, 237, 0.4)",
  },
  {
    badge: "TEAM AUGMENTATION",
    title: "Team Extension",
    description:
      "Scale rapidly with vetted engineers who integrate seamlessly.",
    features: ["On-demand scaling", "Cost-effective", "Fast ramp-up"],
    icon: UserPlus,
    color: "from-cosmic-cyan to-blue-600",
    glassColor: "blue",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    badge: "PROJECT-BASED",
    title: "Focused Projects",
    description:
      "Clear scope delivery with Fixed Price or Time & Material options.",
    features: ["Fixed or T&M", "Clear specifications", "Defined outcomes"],
    icon: FileCheck,
    color: "from-purple-600 to-cosmic-violet",
    glassColor: "indigo",
    glowColor: "rgba(147, 51, 234, 0.4)",
  },
];

/* --------------------------------------------------------
   PRESENTATIONAL SUBCOMPONENTS
---------------------------------------------------------*/

const GlowingBorder: React.FC<{ glowColor: string }> = ({ glowColor }) => (
  <>
    <div
      className="absolute -inset-[3px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
      style={{
        background: `radial-gradient(circle at center, ${glowColor}80 0%, transparent 70%)`,
        filter: "blur(12px)",
        boxShadow: `0 0 60px ${glowColor}80, 0 0 120px ${glowColor}60`,
      }}
    />
    <div
      className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
      style={{
        border: `2px solid ${glowColor}`,
        boxShadow: `0 0 40px ${glowColor}, inset 0 0 40px ${glowColor}50`,
      }}
    />
  </>
);

const ModelBadge: React.FC<{ badge: string; index: number }> = ({
  badge,
  index,
}) => (
  <div className="absolute top-5 right-5 z-20">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 + 0.3 }}
      className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cosmic-violet/30 via-cosmic-violet/20 to-cosmic-violet/30 border border-cosmic-violet/60 backdrop-blur-md shadow-lg shadow-cosmic-violet/20"
    >
      <span className="text-cosmic-violet text-xs font-heading font-bold tracking-wide">
        {badge}
      </span>
    </motion.div>
  </div>
);

const ModelIconCube: React.FC<{
  icon: ServiceModel["icon"];
  index: number;
  glassColor: string;
}> = ({ icon, index, glassColor }) => (
  <div className="min-h-[110px] my-5 relative z-10 flex flex-col justify-start">
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2 + 0.1,
        type: "spring",
        stiffness: 200,
      }}
      className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] pointer-events-none"
    >
      {/* Background layer with gradient */}
      <span
        className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
        style={{
          ...getBackgroundStyle(glassColor),
          boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
        }}
      />

      {/* Glass layer */}
      <span
        className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
        style={{
          boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
        }}
      >
        <span
          className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center text-white"
          aria-hidden="true"
        >
          {createElement(icon, {
            className: "w-full h-full",
          })}
        </span>
      </span>
    </motion.div>
  </div>
);

const FeaturesList: React.FC<{
  features: string[];
  index: number;
  isMobile: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ features, index, isMobile, isExpanded, onToggle }) => {
  // Container height:
  // - Desktop: keep original alignment (min-h + flex-1)
  // - Mobile: smaller when collapsed, larger when expanded
  const containerClasses = [
    "mb-5 relative z-10",
    isMobile
      ? isExpanded
        ? "min-h-[110px]" // expanded → taller card
        : "min-h-[40px]" // collapsed → shorter card
      : "min-h-[110px] flex-1", // desktop: original behavior
  ].join(" ");

  return (
    <div className={containerClasses}>
      {/* Collapsible list */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          !isExpanded && isMobile
            ? "max-h-0 opacity-0"
            : "max-h-[300px] opacity-100"
        }`}
      >
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="flex items-center gap-3 group/feature"
            >
              {/* Enhanced check icon */}
              <div className="relative flex-shrink-0">
                <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-cosmic-violet/40 to-cosmic-violet/20 backdrop-blur-sm flex items-center justify-center border border-cosmic-violet/60 shadow-sm shadow-cosmic-violet/20 group-hover/feature:scale-110 transition-transform duration-200">
                  <Check className="w-3 h-3 text-cosmic-violet drop-shadow-sm" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-cosmic-violet/20 blur-sm opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200" />
              </div>
              <span className="text-sm text-cosmic-light/85 font-medium group-hover/feature:text-cosmic-light transition-colors duration-200">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Read More/Less Toggle - Only on mobile */}
      {isMobile && (
        <button
          onClick={onToggle}
          className="flex items-center gap-2 mt-4 text-cosmic-violet hover:text-cosmic-cyan transition-all duration-200 text-sm font-semibold relative z-10 px-2 py-1 rounded-lg hover:bg-cosmic-violet/10"
        >
          {isExpanded ? (
            <>
              <span>Read less</span>
              <ChevronUp className="w-4 h-4 transition-transform duration-200" />
            </>
          ) : (
            <>
              <span>Read more</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

const TalkToUsButton: React.FC = () => (
  <div className="mt-auto pt-4 relative z-10">
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <HoverBorderGradient
        as="a"
        href="#contact"
        containerClassName="inline-block w-full group/cta"
        className="text-sm font-semibold text-white px-6 py-3.5 w-full text-center shadow-lg shadow-cosmic-violet/20 flex items-center justify-center gap-2 relative"
      >
        <div className="relative flex items-center justify-center w-4 h-4 transition-transform duration-200 group-hover/cta:scale-[1.2] group-hover/cta:rotate-[15deg] group-hover/cta:translate-x-[0.125rem]">
          <Phone className="w-4 h-4 relative z-10" />
          <div className="absolute inset-0 rounded-full bg-cosmic-violet/40 blur-sm opacity-0 group-hover/cta:opacity-60 group-hover/cta:animate-ping" />
        </div>
        <span>Talk to us</span>
      </HoverBorderGradient>
    </motion.div>
  </div>
);

type ServiceModelCardProps = {
  model: ServiceModel;
  index: number;
  isMobile: boolean;
  isExpanded: boolean;
  onToggle: () => void;
};

const ServiceModelCard: React.FC<ServiceModelCardProps> = ({
  model,
  index,
  isMobile,
  isExpanded,
  onToggle,
}) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="group relative"
  >
    <GlowingBorder glowColor={model.glowColor} />

    <GlassCard
      className="p-6 h-full flex flex-col transition-all duration-300 relative z-0 overflow-hidden"
      delay={0}
      animate={false}
    >
      {/* Dotted Glow Background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none">
        <DottedGlowBackground
          gap={12}
          radius={2}
          color="rgba(124, 58, 237, 0.3)"
          glowColor="rgba(124, 58, 237, 0.9)"
          opacity={0.8}
          backgroundOpacity={0.1}
          speedMin={0.4}
          speedMax={1.2}
          speedScale={0.8}
        />
      </div>

      <ModelBadge badge={model.badge} index={index} />

      <ModelIconCube
        icon={model.icon}
        index={index}
        glassColor={model.glassColor}
      />

      {/* Content - Flex layout for alignment */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Title */}
        <div className="min-h-[60px] mb-4 flex items-start relative z-10">
          <h3 className="text-2xl font-heading font-bold leading-tight">
            <span className="bg-gradient-to-r from-cosmic-light via-cosmic-light to-cosmic-light/80 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(124,58,237,0.3)]">
              {model.title}
            </span>
          </h3>
        </div>

        {/* Description */}
        <div className="min-h-[60px] mb-5 flex items-start relative z-10">
          <div className="relative">
            <p className="text-base text-cosmic-light/75 leading-relaxed font-light">
              {model.description}
            </p>
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cosmic-violet/60 to-transparent rounded-full" />
          </div>
        </div>

        {/* Features */}
        <FeaturesList
          features={model.features}
          index={index}
          isMobile={isMobile}
          isExpanded={isExpanded}
          onToggle={onToggle}
        />

        {/* CTA */}
        <TalkToUsButton />
      </div>
    </GlassCard>
  </motion.div>
);

/* --------------------------------------------------------
   MAIN SECTION
---------------------------------------------------------*/

export default function ServiceModelsSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="service-models"
      className="py-32 px-6 relative overflow-hidden bg-cosmic-darker"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle="Flexible engagement to match your stage — pilot, scale or enterprise transformation.">
          Service Models.
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const isExpanded = expandedCards.includes(index);

            return (
              <ServiceModelCard
                key={index}
                model={model}
                index={index}
                isMobile={isMobile}
                isExpanded={isExpanded}
                onToggle={() => toggleCard(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
