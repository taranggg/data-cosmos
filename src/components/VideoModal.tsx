"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  title,
}: VideoModalProps) {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (nav) (nav as HTMLElement).style.display = "none";
    } else {
      document.body.style.overflow = "unset";
      if (nav) (nav as HTMLElement).style.display = "";
    }
    return () => {
      document.body.style.overflow = "unset";
      if (nav) (nav as HTMLElement).style.display = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.98)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container */}
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-full"
                onPlay={() => setIsPaused(false)}
                onPause={() => setIsPaused(true)}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              {/* Title overlay - only visible when paused */}
              <AnimatePresence>
                {isPaused && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md pointer-events-none"
                  >
                    <h3 className="text-3xl font-heading font-bold text-white px-8 text-center">
                      {title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
