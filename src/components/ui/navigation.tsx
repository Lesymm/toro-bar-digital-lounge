import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-black/50' : 'bg-black/60 backdrop-blur-md'} border-b ${scrolled ? 'border-gray-700' : 'border-gray-800/50'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-500/30 transition-all" />
              <img
                src="/toro-logo.png"
                alt="Toro Bar Logo"
                className={`relative z-10 transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-wide group-hover:text-blue-400 transition-colors">Toro Bar</span>
              <div className="flex items-center space-x-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
                <span className="text-xs font-semibold text-blue-400 tracking-widest">WASHINGTON DC</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                  currentPage === item.id ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${
                  currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => onPageChange("contact")}
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Book Event
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors hover:text-blue-400 ${
                    currentPage === item.id ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    onPageChange("contact");
                    setIsOpen(false);
                  }}
                  className="luxury-button w-full"
                >
                  Book Event
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};