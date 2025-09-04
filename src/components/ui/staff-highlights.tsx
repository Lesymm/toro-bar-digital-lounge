import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = [
  {
    src: "/lovable-uploads/65360ee9-8467-438b-90d2-c4f93248eb19.png",
    alt: "Pool table with 8 ball signage at Toro Bar"
  },
  {
    src: "/lovable-uploads/1ead8b1d-d3b5-4c2d-bdb8-ceba6f3660ab.png",
    alt: "Customer enjoying the Forever atmosphere at Toro Bar"
  },
  {
    src: "/lovable-uploads/daa6479c-ff1b-4623-b5a5-3dc8d84bd430.png",
    alt: "Bartender crafting cocktails at Toro Bar"
  },
  {
    src: "/lovable-uploads/766c7af7-29bf-46f8-863b-6581c13d752f.png",
    alt: "Enjoying hookah at Toro Bar"
  },
  {
    src: "/lovable-uploads/93a6a9ea-d565-41ca-8d4a-627d5819848e.png",
    alt: "Friends playing pool at Toro Bar"
  },
  {
    src: "/lovable-uploads/16a9abfd-7dba-4f7f-ac66-7f724f421fc6.png",
    alt: "Good vibes outside Toro Bar with Corona decorations"
  },
  {
    src: "/lovable-uploads/7ae60646-164e-4458-b4fd-ecb1f6a01e1a.png",
    alt: "Friends celebrating at Toro Bar"
  },
  {
    src: "/lovable-uploads/a4ad5754-53c3-4b66-8180-05ae1cfcad2a.png",
    alt: "Birthday celebration at Toro Bar"
  },
  {
    src: "/lovable-uploads/4a7ab37f-8fee-45db-8525-dde07e026afc.png",
    alt: "Party atmosphere with confetti at Toro Bar"
  },
  {
    src: "/lovable-uploads/5747ee7d-2f32-41b4-a6ac-5bfdf008a0ad.png",
    alt: "Fun times with props at Toro Bar"
  }
];

export const StaffHighlights = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">The Toro Bar Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};