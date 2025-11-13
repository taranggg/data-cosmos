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
import Particles from "@/components/ui/Particles";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cosmic-dark">
      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* <CosmicBackground /> */}
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        particleColors={["#8e8e8eff", "#ecececff"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

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
