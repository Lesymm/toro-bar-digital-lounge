import { Button } from "./button";
import { Instagram, ExternalLink } from "lucide-react";

export const InstagramSection = () => {
  const instagramHandle = "@torobar14th_st";
  const instagramUrl = "https://www.instagram.com/torobar14th_st/";

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Instagram className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest from Instagram
          </h2>
        </div>
        
        {/* Instagram Preview Card */}
        <div className="max-w-md mx-auto mb-8 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-black">torobar14th_st</p>
                <p className="text-sm text-gray-600">Toro Bar DC</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <Instagram className="h-16 w-16 text-gray-400" />
            </div>
            
            <p className="text-gray-700 text-sm text-left mb-4">
              📍 DC's Premier Cocktail Lounge & Billiards Experience
              <br />
              🥃 Premium Cocktails • 🎱 Billiards • 🎉 Events
            </p>
            
            <Button 
              onClick={() => window.open(instagramUrl, '_blank')}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              View this post on Instagram
            </Button>
          </div>
        </div>

        <Button 
          onClick={() => window.open(instagramUrl, '_blank')}
          className="luxury-button text-base px-6 py-2 group"
        >
          <Instagram className="h-4 w-4 mr-2" />
          Follow {instagramHandle}
          <ExternalLink className="h-3 w-3 ml-2 opacity-70" />
        </Button>
      </div>
    </section>
  );
};