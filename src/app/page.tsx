import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoSpotlightSection from "@/components/VideoSpotlightSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
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
        <ClientsSection />
        <WhyChooseUsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
