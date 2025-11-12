"use client";

import { motion } from "framer-motion";

export default function ClientsSection() {
  // Placeholder client logos - replace with actual client logos
  const clients = [
    "Client A",
    "Client B",
    "Client C",
    "Client D",
    "Client E",
    "Client F",
  ];

  return (
    <section className="py-20 px-6 bg-cosmic-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-cosmic-light/60 text-sm mb-12 font-heading"
        >
          Trusted by teams who ship.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-20"
            >
              <div className="text-cosmic-light/40 font-heading text-lg hover:text-cosmic-light/70 transition-colors duration-300">
                {client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
