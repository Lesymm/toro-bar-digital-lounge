import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/toro-logo.png" 
              alt="Toro Bar Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-white">toro bar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  currentPage === item.id ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default" 
              size="sm"
              onClick={() => onPageChange("contact")}
              className="luxury-button"
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