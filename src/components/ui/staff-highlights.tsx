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
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">The Toro Bar Experience</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{image.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                </div>
                
                {/* Floating glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};