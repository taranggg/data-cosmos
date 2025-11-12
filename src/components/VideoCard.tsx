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
        className="group relative overflow-hidden rounded-3xl cursor-pointer glass-card glass-card-hover"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-video overflow-hidden bg-cosmic-darker">
          <video
            poster={posterSrc}
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
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-cosmic-violet/80 backdrop-blur-sm flex items-center justify-center border-2 border-cosmic-cyan group-hover:bg-cosmic-violet transition-all duration-300 accent-glow"
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </motion.div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-cosmic-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {description}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        title={title}
      />
    </>
  );
}
