"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenuOverlay from "./ui/hamburger-menu-overlay";
import DataCosmosLogo from "../app/assets/DataCosmosLogo.png";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Navigation() {
  const [shrunk, setShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setShrunk(y > 36);
    };
    const onResize = () => setIsMobile(window.innerWidth < 768);

    onScroll();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const menuItems = navLinks.map((l) => ({ label: l.name, href: l.href }));

  // Desktop classes (applied at md and above). Keep existing behaviors.
  const outerDesktop = shrunk
    ? "rounded-full backdrop-blur-xl bg-white/6 dark:bg-black/20 border border-white/8 dark:border-black/20 border-t border-white/20 shadow-lg"
    : "backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/6 dark:border-black/10 shadow-none";

  const contentDesktop = shrunk
    ? "max-w-7xl mx-auto flex items-center justify-between px-4 py-2"
    : "max-w-7xl mx-auto flex items-center justify-between py-4 px-6";

  // Mobile (base) classes: keep navbar non-transparent and fixed at top.
  const outerMobile = shrunk
    ? "backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/8 dark:border-black/20 shadow-sm"
    : "backdrop-blur-xl bg-white/6 dark:bg-black/20 border-b border-white/6 dark:border-black/10 shadow-none";

  const contentMobile =
    "max-w-7xl mx-auto flex items-center justify-between px-4 py-3";

  // Helper to prefix desktop classes with md:
  const mdPrefix = (str: string) =>
    str
      .split(/\s+/)
      .map((c) => `md:${c}`)
      .join(" ");

  const outerClassName = `${outerMobile} ${mdPrefix(outerDesktop)}`;
  const contentClass = `${contentMobile} ${mdPrefix(contentDesktop)}`;

  return (
    <motion.nav
      initial={false}
      animate={{
        left: !isMobile && shrunk ? 160 : 0,
        right: !isMobile && shrunk ? 160 : 0,
        top: !isMobile && shrunk ? 24 : 0,
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
      <motion.div
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={contentClass}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="inline-flex">
            <Image
              src={DataCosmosLogo}
              alt="Data Cosmos"
              width={200}
              height={180}
              className="rounded-lg object-cover w-[110px] md:w-[200px] h-auto"
            />
          </Link>
        </motion.div>

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

          <HoverBorderGradient
            onClick={() => (window.location.hash = "get-started")}
            containerClassName={shrunk ? "rounded-full" : "rounded-full"}
            className={
              shrunk
                ? "text-sm px-5 py-2 shadow-md"
                : "text-base px-6 py-3 shadow-md"
            }
            duration={0.9}
          >
            Get Started
          </HoverBorderGradient>
        </div>

        {/* Mobile: use shared HamburgerMenuOverlay component (renders its own button) */}
        <div className="md:hidden relative">
          <HamburgerMenuOverlay
            items={menuItems}
            buttonTop="20px"
            buttonLeft="calc(100% - 40px)"
            buttonSize="md"
            overlayBackground="rgba(10,11,13,0.96)"
            textColor="#ffffff"
            fontSize="md"
            animationDuration={0.35}
            staggerDelay={0.06}
            menuAlignment="center"
            menuDirection="vertical"
            enableBlur={false}
            zIndex={60}
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.nav>
  );
}
