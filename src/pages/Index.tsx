import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { StaffHighlights } from "@/components/ui/staff-highlights";
import { MenuSection } from "@/components/ui/menu-section";
import { SocialProofSection } from "@/components/ui/social-proof-section";
import { ContactSection } from "@/components/ui/contact-section";
import { BottomCtaSection } from "@/components/ui/bottom-cta-section";
import { Footer } from "@/components/ui/footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    
    // Smooth scroll to sections
    if (page === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBookEvent = () => {
    setCurrentPage("contact");
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection onBookEvent={handleBookEvent} />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Gallery - Staff Highlights */}
        <section id="gallery">
          <StaffHighlights />
        </section>

        {/* Menu Section */}
        <section id="menu">
          <MenuSection />
        </section>

        {/* Social Proof Section - Reviews & Instagram */}
        <section id="reviews">
          <SocialProofSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Bottom CTA Section */}
        <BottomCtaSection onBookEvent={handleBookEvent} />
      </main>

      <Footer />
      
      {/* Floating Action Button */}
      <FloatingActionButton onBookEvent={handleBookEvent} />
    </div>
  );
};

export default Index;
