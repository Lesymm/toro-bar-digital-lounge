import { Button } from "./button";

interface BottomCtaSectionProps {
  onBookEvent: () => void;
}

export const BottomCtaSection = ({ onBookEvent }: BottomCtaSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase text-white mb-6">
          Ready to Experience Toro Bar?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join us for an unforgettable night of premium cocktails, billiards, and great vibes in the heart of D.C.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
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
    </section>
  );
};