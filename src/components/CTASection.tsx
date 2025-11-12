"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-cosmic-darker">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cosmic-gradient rounded-[3rem] p-16 text-center relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cosmic-violet rounded-full blur-[120px] animate-[nebula-drift_15s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-cyan rounded-full blur-[120px] animate-[nebula-drift_20s_ease-in-out_infinite]" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
            >
              Ready to unlock your data universe?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Tell us your goal — pipeline, real-time, BI, or ML — and
              we&apos;ll blueprint it in a week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                variant="secondary"
                className="bg-white text-cosmic-violet hover:bg-white/90"
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cosmic-violet"
              >
                hello@datacosmos.in
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
