import { useEffect, useState } from "react";
import { Button } from "./button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onBookEvent: () => void;
}

export const HeroSection = ({ onBookEvent }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      <div
        className="parallax-bg rotating-bg-1 absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(/lovable-uploads/be2f5cb5-4e41-4b05-a813-97f366bfbb9d.png)`,
          transform: `translate3d(0, ${scrollY * 0.5}px, 0)`
        }}
      />
      <div
        className="parallax-bg rotating-bg-2 absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(/lovable-uploads/360c3deb-ed0a-4563-bdeb-4cb4fcf8cdcd.png)`,
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      <div className={`relative z-10 text-center max-w-5xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-10 transform transition-all duration-700 delay-100">
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-2xl bg-blue-500/30 rounded-full animate-pulse" />
            <img
              src="/toro-logo.png"
              alt="Toro Bar Logo"
              className="h-36 w-36 mx-auto relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight">
          <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
            TORO BAR
          </span>
        </h1>

        <div className="mb-6 space-y-2">
          <p className="text-2xl md:text-4xl font-bold text-white tracking-wide">
            DC's Premier Billiards Hall
          </p>
          <div className="flex items-center justify-center space-x-4 text-blue-400">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-lg font-medium">EST. 2020</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Premium Cocktails • Pool Tables • Live Entertainment • Private Events
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onBookEvent}
            size="lg"
            className="luxury-button text-lg px-12 py-6 font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Book Your Event
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-lg px-12 py-6 font-semibold"
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

      <button
        onClick={() => {
          const element = document.getElementById("about");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="text-sm font-medium tracking-widest">EXPLORE</span>
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
};