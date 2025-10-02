import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Download, Sparkles } from "lucide-react";

const featuredDrinks = [
  {
    name: "Hibiscus Margarita",
    description: "A floral, tangy twist on the classic margarita made with hibiscus puree",
    price: "$13",
    category: "Signature",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    name: "Miss Miami",
    description: "Take a trip to south beach with our sweet & zesty pink lemonade vodka cocktail",
    price: "$12",
    category: "Vodka",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "The Bad Bunny",
    description: "A bold mix of vodka, rum, tequila & blue curaçao- smooth, strong & not for the weak!",
    price: "$14",
    category: "Strong",
    gradient: "from-blue-500/20 to-sky-500/20"
  },
  {
    name: "Pineapple Express",
    description: "Buchanans pineapple meets tropical paradise",
    price: "$14",
    category: "Tropical",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "Toro's Princess",
    description: "A fruity blend of sweet and sparkling made with malibu & vodka perfectly fit for royalty",
    price: "$14",
    category: "Fruity",
    gradient: "from-fuchsia-500/20 to-pink-500/20"
  },
  {
    name: "Leo's Michi",
    description: "The ultimate spicy refresher crafted by Leo himself- made with your choice of beer, freshly squeezed lime & a dash of heat for a vibrant fizzy ride",
    price: "$13",
    category: "Spicy",
    gradient: "from-red-500/20 to-orange-500/20"
  }
];

export const MenuSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(var(--section-menu-from))] to-[hsl(var(--section-menu-to))] section-wave-top section-diagonal-bottom relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_transparent_0%,_rgba(59,130,246,0.05)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Featured Cocktails
          </h2>
          <p className="text-gray-400 text-lg">Expertly crafted by our mixologists</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {featuredDrinks.map((drink, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${drink.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors font-bold">
                    {drink.name}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400 font-bold text-xl">
                      {drink.price}
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">
                  {drink.category}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-300 leading-relaxed text-base">
                  {drink.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Full menu at the bar</span>
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Seasonal specials</span>
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Custom cocktails</span>
          </div>

          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-8 py-6 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="toro-bar-menu.pdf"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Full Menu
            </a>
          </Button>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
              <h4 className="text-white font-bold text-xl mb-2">Happy Hour</h4>
              <p className="text-blue-400 font-medium text-lg">Every Day</p>
              <p className="text-gray-300">5PM - 9PM</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm border border-blue-500/30">
              <h4 className="text-white font-bold text-xl mb-2">Late Night</h4>
              <p className="text-blue-400 font-medium text-lg">Friday - Saturday</p>
              <p className="text-gray-300">Until 3AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};