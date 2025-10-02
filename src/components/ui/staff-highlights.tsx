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
    <section className="py-24 bg-gradient-to-b from-[hsl(var(--section-highlights-from))] to-[hsl(var(--section-highlights-to))] section-diagonal-top section-wave-bottom relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(59,130,246,0.08)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            The Toro Bar Experience
          </h2>
          <p className="text-gray-400 text-lg">Where every night becomes unforgettable</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      {image.title}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-gray-200 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};