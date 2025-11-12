import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoSpotlightSection from "@/components/VideoSpotlightSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceModelsSection from "@/components/ServiceModelsSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CosmicBackground from "@/components/CosmicBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cosmic-dark">
      {/* Navigation */}
      <Navigation />

      {/* Cosmic Background with Particles */}
      <CosmicBackground />

      {/* Page Sections */}
      <div className="relative z-10">
        <HeroSection />
        <VideoSpotlightSection />
        <ProductsSection />
        <ServicesSection />
        <ServiceModelsSection />
        <ClientsSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ContactSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
