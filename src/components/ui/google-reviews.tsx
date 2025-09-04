import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Jeffrey Diaz",
    rating: 5,
    timeAgo: "4 months ago",
    text: "For sure best michelada I've had in the city in a while! Gabby was my bartender and absolutely crushed that drink while handling a full bar! Will def be back again",
    categories: ["Food: 5/5", "Service: 5/5", "Atmosphere: 5/5"]
  },
  {
    name: "John Johnson",
    rating: 5,
    timeAgo: "a month ago",
    text: "Hookah is like that. The atmosphere and music caters to all crowds... definitely worth the drive to NW and different from the regular spots. Come through we got you. I'm here even when I'm not working lol!!! Security is legit no need to worry about riff raff #wegotyou",
    categories: ["Service: 5/5", "Atmosphere: 5/5"]
  },
  {
    name: "Ronak Patel",
    rating: 5,
    timeAgo: "2 years ago",
    text: "Best place to be any time of the day. Free pool on Tuesday nights and decent drink prices. Games are $1 until night ($2 after that). There's usually also a DJ night and the music adds to the atmosphere. Great place to be. Not to mention one of the best bartenders I've met — Nancy! Not much competition in pool but great conversationalist.",
    categories: ["Service: 5/5", "Atmosphere: 5/5"]
  }
];

export const GoogleReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold text-lg">4.9/5</span>
            <span className="text-gray-400">• 256 Google reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="cocktail-card animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{review.timeAgo}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  "{review.text}"
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {review.categories.map((category, i) => (
                    <span key={i} className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="luxury-button"
            asChild
          >
            <a 
              href="https://www.google.com/maps/place/Toro+Bar/@38.9283661,-77.0348788,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7c8b8c8c8c8c8:0x8c8c8c8c8c8c8c8c!8m2!3d38.9283661!4d-77.0348788!16s%2Fg%2F11f5q5q5q5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Read All Google Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};