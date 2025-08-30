import { MapPin, Mail, Clock, Instagram, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <img 
                src="/toro-logo.png" 
                alt="Toro Bar Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-white">toro bar</span>
            </div>
            <p className="text-gray-400 mb-4">
              DC's Premier Cocktail Lounge & Billiards Experience
            </p>
            <p className="text-sm text-gray-500">
              Est. 2020 • 14th Street • Washington, DC
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>14th Street NW, Washington, DC</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:torobardc@gmail.com" className="hover:text-blue-400 transition-colors">
                  torobardc@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 5PM-2AM, Sun: 6PM-11PM</span>
              </div>
            </div>
          </div>

          {/* Social & Reviews */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/torobar14th_st" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@torobar14th_st</span>
              </a>
              <div className="flex items-center justify-center md:justify-end space-x-4">
                <a 
                  href="https://www.facebook.com/torobardc3708/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Star className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.google.com/search?q=Toro+Bar+Washington+DC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Star className="h-4 w-4" />
                  <span>Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Toro Bar. All rights reserved. | Website by <a href="https://tranquilmedia.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Tranquil Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
};