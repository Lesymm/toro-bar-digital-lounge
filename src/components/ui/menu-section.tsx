import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Download } from "lucide-react";

const featuredDrinks = [
  {
    name: "HIBISCUS MARGARITA",
    description: "A floral, tangy twist on the classic margarita made with hibiscus puree",
    price: "$13",
    category: "Signature"
  },
  {
    name: "MISS MIAMI",
    description: "Take a trip to south beach with our sweet & zesty pink lemonade vodka cocktail",
    price: "$12",
    category: "Vodka"
  },
  {
    name: "THE BAD BUNNY",
    description: "A bold mix of vodka, rum, tequila & blue curaçao- smooth, strong & not for the weak!",
    price: "$14",
    category: "Strong"
  },
  {
    name: "PINEAPPLE EXPRESS",
    description: "Buchanans pineapple meets tropical paradise",
    price: "$14",
    category: "Tropical"
  },
  {
    name: "TORO'S PRINCESS",
    description: "A fruity blend of sweet and sparkling made with malibu & vodka perfectly fit for royalty",
    price: "$14",
    category: "Fruity"
  },
  {
    name: "LEO'S MICHI",
    description: "The ultimate spicy refresher crafted by Leo himself- made with your choice of beer, freshly squeezed lime & a dash of heat for a vibrant fizzy ride",
    price: "$13",
    category: "Spicy"
  }
];

export const MenuSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Cocktails</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredDrinks.map((drink, index) => (
            <Card key={index} className="cocktail-card animate-slide-up group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {drink.name}
                  </CardTitle>
                  <span className="text-toro-gold font-bold text-lg">
                    {drink.price}
                  </span>
                </div>
                <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                  {drink.category}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {drink.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Full menu available at the bar • Seasonal specials • Custom cocktails upon request
          </p>
          
          <div className="mb-8">
          <Button 
            className="luxury-button"
            asChild
          >
            <a 
              href="/menu.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="toro-bar-menu.pdf"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Full Menu (PDF)
            </a>
          </Button>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Happy Hour</h4>
              <p className="text-gray-400 text-sm">Monday - Friday | 5PM - 7PM</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Late Night</h4>
              <p className="text-gray-400 text-sm">Thursday - Saturday | Until 2AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};