"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import Button from "./Button";
import VideoModal from "./VideoModal";
import { Check } from "lucide-react";

interface Product {
  name: string;
  tagline: string;
  features: string[];
  videoSrc: string;
}

export default function ProductsSection() {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const products: Product[] = [
    {
      name: "SwayAnalytic",
      tagline: "Self-serve analytics for operators, not just analysts.",
      features: [
        "No-code dashboards for everyone",
        "360° customer insights",
        "Real-time operational metrics",
      ],
      videoSrc: "/app/assets/SwayAnalytics__360°_Growth.mp4",
    },
    {
      name: "SwaySales",
      tagline: "Sales intelligence that nudges real outcomes.",
      features: [
        "AI-powered lead scoring",
        "Predictive pipeline analytics",
        "Automated follow-up insights",
      ],
      videoSrc: "/app/assets/SaleSwayAI__Future_of_Sales_.mp4",
    },
    {
      name: "DataStream Pro",
      tagline: "Real-time decisions across your data streams.",
      features: [
        "Sub-second data processing",
        "Multi-source integration",
        "Event-driven architecture",
      ],
      videoSrc: "/app/assets/Data_Cosmos__Chaos_to_Clarity.mp4",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-cosmic-darker">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle>Products.</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <GlassCard key={index} delay={index * 0.2}>
              {/* Video Preview */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                >
                  <source src={product.videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent" />
              </div>

              {/* Product Info */}
              <h3 className="text-3xl font-heading font-bold text-cosmic-light mb-3">
                {product.name}
              </h3>
              <p className="text-lg text-cosmic-light/80 mb-6">
                {product.tagline}
              </p>

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

              {/* CTAs */}
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  className="flex-1 text-sm py-3"
                  onClick={() =>
                    setSelectedVideo({
                      src: product.videoSrc,
                      title: product.name,
                    })
                  }
                >
                  Watch Demo
                </Button>
                <Button variant="outline" className="flex-1 text-sm py-3">
                  View Docs
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
