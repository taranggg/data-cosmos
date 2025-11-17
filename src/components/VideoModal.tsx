"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
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
              <video src={videoSrc} controls autoPlay className="w-full h-full">
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-heading font-bold text-white mt-4 text-center">
              {title}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
