"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface VideoCardProps {
  title: string;
  description?: string;
  videoSrc: string;
  posterSrc?: string;
  delay?: number;
}

export default function VideoCard({
  title,
  description,
  videoSrc,
  posterSrc,
  delay = 0,
}: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="group relative overflow-hidden rounded-3xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className="relative aspect-video overflow-hidden rounded-2xl bg-cosmic-darker border border-white/6"
          style={
            posterSrc
              ? {
                  backgroundImage: `url(${posterSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {/* translucent overlay to ensure readability */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

          {/* Video element (plays on hover) - keep it but allow poster/background to show when not playing */}
          <video
            poster={posterSrc}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={() => {
              // Removed pause and currentTime reset logic to avoid conflicts
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Play Button - glass morphism */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <button
              aria-label={`Play ${title}`}
              className="pointer-events-auto w-20 h-20 rounded-full bg-white/8 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              {/* <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cosmic-violet/80 to-cosmic-cyan/40 flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"> */}
              <Play className="w-7 h-7 text-black ml-0.5" />
              {/* </div> */}
            </button>
          </div>
        </div>
      </motion.div>
      {/* Caption */}
      {/* <div className="absolute bottom-4 left-4 right-4 z-30">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-cosmic-light/80 opacity-90">
            {description}
          </p>
        )}
      </div> */}

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        title={title}
      />
    </>
  );
}
