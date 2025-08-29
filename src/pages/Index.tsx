import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { MenuSection } from "@/components/ui/menu-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

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

        {/* Menu Section */}
        <section id="menu">
          <MenuSection />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <GallerySection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
