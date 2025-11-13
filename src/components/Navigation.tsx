"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);

  // shrink navbar when user scrolls down past threshold
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setShrunk(y > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const outerClassName = shrunk
    ? "rounded-full backdrop-blur-xl bg-white/6 dark:bg-black/20 border border-white/8 dark:border-black/20 border-t border-white/20 shadow-lg"
    : "backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/6 dark:border-black/10 shadow-none";

  const contentClass = shrunk
    ? "max-w-7xl mx-auto flex items-center justify-between px-4"
    : "max-w-7xl mx-auto flex items-center justify-between py-4 px-6";

  return (
    <motion.nav
      initial={false}
      animate={{
        left: shrunk ? 160 : 0,
        right: shrunk ? 160 : 0,
        top: shrunk ? 24 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={outerClassName}
      style={{
        position: "fixed",
        zIndex: 50,
        WebkitBackdropFilter: "blur(12px)",
        backgroundClip: "padding-box",
      }}
    >
      {/* border light removed */}
      <motion.div
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={contentClass}
      >
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div
            className={
              shrunk
                ? "w-10 h-10 rounded-lg flex items-center justify-center text-white"
                : "w-12 h-12 rounded-lg flex items-center justify-center text-white"
            }
            style={{ background: "linear-gradient(135deg,#7C3AED,#22D3EE)" }}
          >
            <span
              className={
                shrunk
                  ? "font-heading font-bold text-sm"
                  : "font-heading font-bold text-base"
              }
            >
              DC
            </span>
          </div>
          <span
            className={
              shrunk
                ? "text-base font-heading font-semibold text-cosmic-light"
                : "text-xl font-heading font-semibold text-cosmic-light"
            }
          >
            Data Cosmos
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={
                shrunk
                  ? "relative px-3 py-2 rounded-full text-sm font-medium text-cosmic-light/80 hover:bg-white/8 hover:text-cosmic-light transition-colors duration-200"
                  : "relative px-4 py-3 rounded-full text-base font-medium text-cosmic-light/90 hover:bg-white/8 hover:text-cosmic-light transition-colors duration-200"
              }
            >
              {link.name}
            </motion.a>
          ))}

          <Button
            variant="primary"
            className={
              shrunk
                ? "rounded-full text-sm px-5 py-2 shadow-md"
                : "rounded-full text-base px-6 py-3 shadow-md"
            }
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={
              shrunk
                ? "w-9 h-9 rounded-lg bg-white/4 flex items-center justify-center border border-white/8 backdrop-blur-sm"
                : "w-10 h-10 rounded-lg bg-white/4 flex items-center justify-center border border-white/8 backdrop-blur-sm"
            }
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cosmic-light" />
            ) : (
              <Menu className="w-6 h-6 text-cosmic-light" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-3"
          >
            <div className="rounded-xl p-4 backdrop-blur-lg bg-white/6 dark:bg-black/20 border border-white/8 dark:border-black/20 shadow">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-md text-base font-medium text-cosmic-light/80 hover:bg-white/8"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="primary" className="w-full rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
