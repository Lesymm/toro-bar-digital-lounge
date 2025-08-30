import { Button } from "./button";
import { Card } from "./card";
import { Instagram, ExternalLink } from "lucide-react";

export const InstagramSection = () => {
  const instagramHandle = "@torobar14th_st";
  const instagramUrl = "https://www.instagram.com/torobar14th_st/";

  // Placeholder posts for visual appeal - in a real implementation, 
  // these would be fetched from Instagram API
  const placeholderPosts = [
    {
      id: 1,
      image: "/assets/bar-interior.jpg",
      caption: "Sophisticated cocktails in an elegant atmosphere"
    },
    {
      id: 2,
      image: "/assets/hero-cocktails.jpg", 
      caption: "Craft cocktails made with premium spirits"
    },
    {
      id: 3,
      image: "/assets/pool-table.jpg",
      caption: "Billiards and cocktails - the perfect combination"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-2">
            Stay connected with the latest from Toro Bar
          </p>
          <p className="text-lg text-primary font-semibold">
            {instagramHandle}
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {placeholderPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden bg-gray-800 border-gray-700 hover:border-primary transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 text-sm line-clamp-2">{post.caption}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={() => window.open(instagramUrl, '_blank')}
            className="luxury-button animate-glow-pulse text-lg px-8 py-3 group"
          >
            <Instagram className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Follow {instagramHandle}
            <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
          </Button>
          <p className="text-gray-400 mt-4 text-sm">
            Get the latest updates on events, new cocktails, and behind-the-scenes content
          </p>
        </div>

        {/* Instagram Embed Widget Alternative */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-gray-300 mb-4">
              Want to see our latest posts? Visit our Instagram profile for real-time updates!
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>📸 Daily cocktail features</span>
              <span>🎱 Billiards action</span>
              <span>🎉 Event highlights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};