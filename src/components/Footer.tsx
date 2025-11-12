"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Products: ["SwayAnalytic", "SwaySales", "DataStream Pro", "Pricing"],
    Services: [
      "Big Data",
      "Data Management",
      "BI & Analytics",
      "Data Science",
      "Custom Solutions",
    ],
    Resources: [
      "Documentation",
      "Case Studies",
      "Blog",
      "API Reference",
      "Support",
    ],
    Company: [
      "About Us",
      "Careers",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@datacosmos.in", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden bg-cosmic-dark border-t border-white/5">
      {/* Cosmic Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px cosmic-gradient opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-gradient mb-4">
                Data Cosmos
              </h3>
              <p className="text-cosmic-light/60 text-sm leading-relaxed">
                Building the universe of unlimited data possibilities.
              </p>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-cosmic-light font-heading font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cosmic-light/60 hover:text-cosmic-violet transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cosmic-light/40 text-sm"
          >
            © {new Date().getFullYear()} Data Cosmos. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-cosmic-violet hover:border-cosmic-violet transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-cosmic-light/60" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cosmic-violet/5 to-transparent pointer-events-none" />
    </footer>
  );
}
