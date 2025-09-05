import { useEffect, useState } from "react";
import { Button } from "./button";

interface HeroSectionProps {
  onBookEvent: () => void;
}

export const HeroSection = ({ onBookEvent }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-container relative h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating Parallax Backgrounds */}
      <div 
        className="parallax-bg rotating-bg-1 absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(/lovable-uploads/be2f5cb5-4e41-4b05-a813-97f366bfbb9d.png)`,
          transform: `translate3d(0, ${scrollY * 0.5}px, 0)`
        }}
      >
      </div>
      <div 
        className="parallax-bg rotating-bg-2 absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(/lovable-uploads/360c3deb-ed0a-4563-bdeb-4cb4fcf8cdcd.png)`,
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`
        }}
      >
      </div>
      {/* Enhanced Gradient Overlay for both images */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/toro-logo.png" 
            alt="Toro Bar Logo" 
            className="h-32 w-32 mx-auto mb-6 animate-float"
          />
        </div>
        
        <h1 className="hero-text mb-6 gradient-text">
          Toro Bar
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          DC's Favorite Billiard's Hall 🎱
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          Established 2020 • Upscale Nightlife • Premium Cocktails
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            onClick={onBookEvent}
            className="luxury-button animate-glow-pulse text-lg px-10 py-4"
          >
            Book Your Event
          </Button>
          
          <Button 
            variant="outline" 
            className="border-gray-400 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 text-lg px-10 py-4"
            onClick={() => {
              const element = document.getElementById("menu");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};