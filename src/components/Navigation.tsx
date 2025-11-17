"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HamburgerMenuOverlay from "./ui/hamburger-menu-overlay";
import DataCosmosLogo from "../app/assets/DataCosmosLogo.png";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { scrollToElement } from "../lib/utils";

export default function Navigation() {
  const [shrunk, setShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

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

  // Wrap navLinks in useMemo to fix dependency issue
  const navLinks = useMemo(
    () => [
      { name: "Products", href: "#products" },
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

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

  function scrollToId(id: string) {
    scrollToElement(id, {
      focus: id === "contact-form",
      highlightClass:
        id === "contact-form" ? "contact-flash animate" : undefined,
    });
  }

  function handleAnchorClick(e: React.MouseEvent, href: string) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      scrollToId(id);
    }
  }

  // Observe sections to set active nav item while scrolling
  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.replace(/^#/, ""))];
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((p) => p.el) as { id: string; el: HTMLElement }[];

    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null;
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio || 0;
            if (!best || ratio > best.ratio) best = { id, ratio };
          }
        });
        if (best) setActiveId((best as { id: string; ratio: number }).id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75] }
    );

    elements.forEach((p) => obs.observe(p.el));
    return () => obs.disconnect();
  }, [navLinks]);

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
        zIndex: 40, // Lower than modal
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
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="inline-flex"
            aria-label="Go to top"
          >
            <Image
              src={DataCosmosLogo}
              alt="Data Cosmos"
              width={200}
              height={180}
              className="rounded-lg object-cover w-[110px] md:w-[200px] h-auto"
            />
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e: React.MouseEvent) => handleAnchorClick(e, link.href)}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={
                (shrunk
                  ? "relative px-3 py-2 rounded-full text-sm font-medium text-cosmic-light/80 hover:bg-white/8 hover:text-cosmic-light transition-colors duration-200"
                  : "relative px-4 py-3 rounded-full text-base font-medium text-cosmic-light/90 hover:bg-white/8 hover:text-cosmic-light transition-colors duration-200") +
                (activeId === link.href.replace(/^#/, "")
                  ? " bg-white/8 text-white ring-1 ring-cosmic-violet/30"
                  : "")
              }
            >
              {link.name}
            </motion.a>
          ))}

          <HoverBorderGradient
            onClick={() => scrollToId("contact-form")}
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
            buttonTop="30px"
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
