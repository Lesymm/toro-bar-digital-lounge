import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { MenuSection } from "@/components/ui/menu-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { InstagramSection } from "@/components/ui/instagram-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("menu");

  const handlePageChange = (page: string) => {
    if (page === "home") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Switch to the corresponding tab
      setCurrentTab(page);
    }
  };

  const handleBookEvent = () => {
    setCurrentTab("contact");
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentTab} onPageChange={handlePageChange} />
      
      <main>
        {/* Hero Section */}
        <section>
          <HeroSection onBookEvent={handleBookEvent} />
        </section>

        {/* Tabbed Content */}
        <section className="container mx-auto px-4 py-8">
          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu">
              <MenuSection />
            </TabsContent>
            
            <TabsContent value="gallery">
              <GallerySection />
            </TabsContent>
            
            <TabsContent value="instagram">
              <InstagramSection />
            </TabsContent>
            
            <TabsContent value="contact">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
