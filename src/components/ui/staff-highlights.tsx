const galleryImages = [
  {
    src: "/lovable-uploads/bb620fb2-4f00-414b-b910-fb66cbea51b6.png",
    alt: "Customer enjoying hookah with vibrant atmosphere at Toro Bar"
  },
  {
    src: "/lovable-uploads/c68e77e6-b4c3-4891-92d9-4a2aaf1e6d4d.png",
    alt: "Expert bartender crafting signature cocktails at Toro Bar"
  },
  {
    src: "/lovable-uploads/8074e154-7be1-41c8-9221-d6598eccf3b7.png",
    alt: "Friends enjoying pool games and good vibes at Toro Bar"
  }
];

export const StaffHighlights = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">The Toro Bar Experience</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};