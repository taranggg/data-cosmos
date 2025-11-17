"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { GlobeDemo } from "./GlobeDemo";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto link and open user's mail client
    const subject = formData.subject || "Contact Form Submission";
    const body = `Name: ${formData.name}\ncontact: ${formData.phone}\nMessage: ${formData.message}`;

    const mailto = `mailto:hello@datacosmos.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailto;

    // Update UI to show submitted state (actual sending happens in mail client)
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        subject: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@datacosmos.in",
      href: "mailto:hello@datacosmos.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle="Let's start a conversation about your data needs">
          Get In Touch With Us.
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-96 lg:h-[640px] flex items-center justify-center"
          >
            <div className="w-full h-full">
              <GlobeDemo />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/3 via-transparent to-black/10 border border-white/8 rounded-3xl p-8 md:p-10 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex items-center justify-center text-center"
                >
                  <div>
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-cosmic-light/70">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-heading font-semibold text-cosmic-light mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name ?? ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cosmic-darker border border-white/10 text-cosmic-light placeholder-cosmic-light/40 focus:border-cosmic-violet focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-heading font-semibold text-cosmic-light mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email ?? ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cosmic-darker border border-white/10 text-cosmic-light placeholder-cosmic-light/40 focus:border-cosmic-violet focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-heading font-semibold text-cosmic-light mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject ?? ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cosmic-darker border border-white/10 text-cosmic-light placeholder-cosmic-light/40 focus:border-cosmic-violet focus:outline-none transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-heading font-semibold text-cosmic-light mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone ?? ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cosmic-darker border border-white/10 text-cosmic-light placeholder-cosmic-light/40 focus:border-cosmic-violet focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-heading font-semibold text-cosmic-light mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company ?? ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cosmic-darker border border-white/10 text-cosmic-light placeholder-cosmic-light/40 focus:border-cosmic-violet focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-heading font-semibold text-cosmic-light mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message ?? ""}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-cosmic-darker border border-white/10 text-cosmic-light placeholder-cosmic-light/40 focus:border-cosmic-violet focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <HoverBorderGradient
                      as="button"
                      type="submit"
                      disabled={isSubmitting}
                      containerClassName="inline-block w-full group/cta"
                      className={`text-sm font-semibold text-white px-6 py-3.5 w-full text-center shadow-lg shadow-cosmic-violet/20 flex items-center justify-center gap-2 relative transition-all duration-300 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </HoverBorderGradient>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
