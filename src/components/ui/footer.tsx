import { MapPin, Mail, Clock, Instagram, Star, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--section-footer))] border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(59,130,246,0.03)_100%)]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full" />
                <img
                  src="/toro-logo.png"
                  alt="Toro Bar Logo"
                  className="h-12 w-12 relative z-10"
                />
              </div>
              <div>
                <span className="text-3xl font-black text-white tracking-wide">Toro Bar</span>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
                  <span className="text-xs font-semibold text-blue-400 tracking-widest">WASHINGTON DC</span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-base leading-relaxed">
              DC's Premier Cocktail Lounge & Billiards Experience
            </p>
            <p className="text-sm text-gray-400">
              Est. 2020 • 14th Street • Washington, DC
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-white font-bold text-xl mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">3708 14th St NW, Washington, DC 20010</span>
              </div>
              <a
                href="mailto:torobardc@gmail.com"
                className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">torobardc@gmail.com</span>
              </a>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Clock className="h-5 w-5" />
                <div className="text-sm text-left">
                  <div>Sun-Thu: 5PM-2AM</div>
                  <div>Fri-Sat: 5PM-3AM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-xl mb-6">Follow Us</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/torobar14th_st"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-medium">@torobar14th_st</span>
              </a>
              <a
                href="https://www.facebook.com/torobardc3708/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a
                href="https://www.google.com/search?q=torobar+reveiws+dc&sca_esv=1e116d9a69546cc9&ei=Ixq5aN20H-Kywt0PzPH_6A8&ved=0ahUKEwid0uH4pr6PAxVimbAFHcz4H_0Q4dUDCBA&uact=5&oq=torobar+reveiws+dc&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnRvcm9iYXIgcmV2ZWl3cyBkYzIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIFECEYqwIyBRAhGKsCSM4DUKkBWN4CcAF4AZABAJgBaaABtAKqAQMxLjK4AQPIAQD4AQGYAgSgAsQCwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICDRAAGIAEGLADGEMYigXCAgYQABgWGB7CAggQABgWGAoYHsICCBAAGAgYDRgewgILEAAYgAQYhgMYigXCAgUQABjvBcICCBAAGIAEGKIEmAMA4gMFEgExIECIBgGQBgqSBwMxLjOgB5MUsgcDMC4zuAfAAsIHBTAuMy4xyAcL&sclient=gws-wiz-serp#lrd=0x89b7c9c9eb31f69d:0xebfb790199902506,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Star className="h-5 w-5" />
                <span className="text-sm font-medium">Google Reviews</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; 2025 Toro Bar. All rights reserved.
            <span className="mx-2">•</span>
            Website by{' '}
            <a
              href="https://tranquilmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Tranquil Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};