import poolTable from "@/assets/pool-table.jpg";
import barInterior from "@/assets/bar-interior.jpg";
import heroImage from "@/assets/hero-cocktails.jpg";

const galleryImages = [
  {
    src: barInterior,
    alt: "Toro Bar Interior - Main Bar Area",
    title: "Main Bar",
    size: "large"
  },
  {
    src: heroImage,
    alt: "Premium Cocktails at Toro Bar",
    title: "Signature Cocktails",
    size: "medium"
  },
  {
    src: poolTable,
    alt: "Premium Billiards Table",
    title: "Pool Table",
    size: "medium"
  },
  {
    src: "/lovable-uploads/2efa85dc-d3a6-4021-8b67-d0eecf003a94.png",
    alt: "Toro Bar Atmosphere",
    title: "Bar Atmosphere",
    size: "small"
  },
  {
    src: "/lovable-uploads/3d944f15-5fdd-4b76-9f23-a394a0396708.png",
    alt: "Toro Bar Experience",
    title: "Bar Experience",
    size: "small"
  },
  {
    src: "/lovable-uploads/ffe4fd15-b35c-47bc-b1f5-cf8f6681bf7b.png",
    alt: "Toro Bar Interior View",
    title: "Interior Views",
    size: "medium"
  }
];

export const GallerySection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience Toro Bar</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl bg-gray-900 hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-toro-primary/20 ${
                image.size === 'large' ? 'col-span-2 row-span-2 aspect-[4/3]' : 
                image.size === 'medium' ? 'col-span-2 md:col-span-1 aspect-[4/3]' : 
                'aspect-square'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-futura font-bold text-lg mb-1 italic">
                    {image.title}
                  </h3>
                  <p className="text-toro-accent text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-toro-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Follow us on Instagram for the latest photos and events
          </p>
          <a 
            href="https://instagram.com/torobar14th_st" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>@torobar14th_st</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};