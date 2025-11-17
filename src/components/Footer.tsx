"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DataCosmosLogo from "../app/assets/DataCosmosLogo.png";
import { scrollToElement } from "../lib/utils";

export default function Footer() {
  const footerLinks = {
    Products: [
      "SwaySales",
      "SwayAnalytic",
      "Data Engineering & Platform",
      "Pricing",
    ],
    Company: ["About Us", "Contact"],
  };

  function toId(name: string) {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");

    if (slug.startsWith("about")) return "about";
    if (slug.includes("contact")) return "contact-form";
    if (slug === "pricing") return "pricing";

    return `product-${slug}`;
  }

  return (
    <footer className="relative overflow-hidden bg-cosmic-dark border-t border-white/5">
      {/* Cosmic Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px cosmic-gradient opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4"
            >
              <button
                onClick={() => scrollToElement("home")}
                aria-label="Go to top / home"
                className="p-0 m-0 bg-transparent border-0 cursor-pointer"
              >
                <Image
                  src={DataCosmosLogo}
                  alt="Data Cosmos"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </button>
              <span className="sr-only">Data Cosmos</span>
              <p className="text-cosmic-light/60 text-lg leading-relaxed max-w-[36rem] mt-1">
                Building the universe of unlimited data possibilities.
              </p>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => {
            const colClass =
              category === "Products" ? "lg:col-span-5" : "lg:col-span-3";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`${colClass} space-y-4`}
              >
                <h4 className="text-cosmic-light font-heading font-semibold mb-2">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const id = toId(link);
                          setTimeout(
                            () =>
                              scrollToElement(id, {
                                highlightClass: "contact-flash animate",
                              }),
                            50
                          );
                        }}
                        className="text-cosmic-light/60 hover:text-cosmic-violet transition-colors duration-300 text-sm block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cosmic-light/40 text-sm text-center"
          >
            © {new Date().getFullYear()} Data Cosmos. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cosmic-violet/5 to-transparent pointer-events-none" />
    </footer>
  );
}
