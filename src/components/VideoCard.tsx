"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (videoRef.current && e.detail !== videoRef.current) {
        videoRef.current.pause();
      }
    };
    window.addEventListener("pauseAllVideos", handler as EventListener);
    return () => {
      window.removeEventListener("pauseAllVideos", handler as EventListener);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="group relative overflow-hidden rounded-3xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
            ref={videoRef}
            poster={posterSrc}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
            onPlay={() => {
              setIsPlaying(true);
              window.dispatchEvent(
                new CustomEvent("pauseAllVideos", { detail: videoRef.current })
              );
            }}
            onPause={() => setIsPlaying(false)}
            onMouseEnter={(e) => e.currentTarget.play()}
            // onMouseLeave={(e) => {
            //   const videoElement = e.currentTarget;
            //   if (videoElement && !videoElement.paused) {
            //     videoElement.pause();
            //     videoElement.currentTime = 0;
            //   }
            // }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Play/Pause Button - shows play when not playing, pause only when playing AND hovering */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div
                  aria-label={`Play ${title}`}
                  className="w-20 h-20 rounded-full bg-white/8 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  <Play className="w-7 h-7 text-black ml-0.5" />
                </div>
              </motion.div>
            )}
            {isPlaying && isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div
                  aria-label={`Pause ${title}`}
                  className="w-20 h-20 rounded-full bg-white/8 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  <Pause className="w-7 h-7 text-black" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
