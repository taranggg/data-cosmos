"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import Button from "./Button";
// Video removed per design — no modal needed
import { Check } from "lucide-react";

interface Product {
  name: string;
  tagline: string;
  features: string[];
  // optional slug for product pages (used by Learn More)
  slug?: string;
}

export default function ProductsSection() {
  const products: Product[] = [
    {
      name: "SwayAnalytic",
      slug: "swayanalytic",
      tagline: "Self-serve analytics for operators, not just analysts.",
      features: [
        "No-code dashboards for everyone",
        "360° customer insights",
        "Real-time operational metrics",
      ],
    },
    {
      name: "SwaySales",
      slug: "swaysales",
      tagline: "Sales intelligence that nudges real outcomes.",
      features: [
        "AI-powered lead scoring",
        "Predictive pipeline analytics",
        "Automated follow-up insights",
      ],
    },
    {
      name: "Data Engineering & Platform",
      slug: "data-engineering-platform",
      tagline: "Production ETL/ELT, streaming & MLOps.",
      features: [
        "Production ETL/ELT pipelines",
        "High-throughput streaming & ingestion",
        "Data lakes, metadata & MLOps infrastructure for enterprise workloads",
      ],
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-cosmic-darker">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle>Products & Platforms.</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <GlassCard
              key={index}
              delay={index * 0.2}
              className="h-full flex flex-col"
            >
              {/* Decorative preview (image placeholder) */}
              {/* <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 flex items-center justify-center bg-gradient-to-tr from-cosmic-violet/10 to-cosmic-cyan/6">
                <div className="text-cosmic-light/60 text-sm font-medium tracking-wide px-6 text-center">
                  {product.name}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/40 to-transparent" />
              </div> */}

              {/* Product Info */}
              <div className="flex flex-col">
                {/* Heading area: reserve space for up to 2 lines so headings start aligned */}
                <div className="min-h-[4.5rem]">
                  <h3 className="text-3xl font-heading font-bold text-cosmic-light mb-3">
                    {product.name}
                  </h3>
                </div>

                {/* Tagline area: reserve single-line space so taglines start aligned */}
                <div className="min-h-[2.25rem] mb-6">
                  <p className="text-lg text-cosmic-light/80">
                    {product.tagline}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-cosmic-light/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-cosmic-violet/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-cosmic-violet" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
