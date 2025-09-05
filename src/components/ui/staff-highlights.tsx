const galleryImages = [
  {
    src: "/lovable-uploads/bb620fb2-4f00-414b-b910-fb66cbea51b6.png",
    alt: "Customer enjoying hookah with vibrant atmosphere at Toro Bar",
    title: "Hookah Lounge",
    description: "Premium hookah experience with exotic flavors"
  },
  {
    src: "/lovable-uploads/c68e77e6-b4c3-4891-92d9-4a2aaf1e6d4d.png",
    alt: "Expert bartender crafting signature cocktails at Toro Bar",
    title: "Craft Cocktails",
    description: "Expert mixologists serving premium drinks"
  },
  {
    src: "/lovable-uploads/8074e154-7be1-41c8-9221-d6598eccf3b7.png",
    alt: "Friends enjoying pool games and good vibes at Toro Bar",
    title: "Pool & Games",
    description: "Professional tables for competitive fun"
  }
];

export const StaffHighlights = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[hsl(var(--section-highlights-from))] to-[hsl(var(--section-highlights-to))] section-diagonal-top section-wave-bottom relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">The Toro Bar Experience</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover-zoom glass-card premium-shadow">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Caption overlay - centered and symmetrical */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400 tracking-wide gradient-text">{image.title}</h3>
                    <div className="w-16 h-0.5 bg-blue-400 mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-glow-pulse"></div>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 text-lg font-light">
                      {image.description}
                    </p>
                  </div>
                </div>
                
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};