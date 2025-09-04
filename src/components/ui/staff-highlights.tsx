import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

const galleryImages = [
  {
    src: "/lovable-uploads/a25b1b70-fe19-4b00-ac63-386e893c69e6.png",
    alt: "Pool table with 8 ball that sign at Toro Bar"
  },
  {
    src: "/lovable-uploads/102fbb6c-b245-4780-a907-5f922ee2db4d.png",
    alt: "Customer enjoying the Forever atmosphere at Toro Bar"
  },
  {
    src: "/lovable-uploads/a7920441-26b4-4846-a00f-28bb6f3a45ff.png",
    alt: "Bartender crafting cocktails at Toro Bar"
  },
  {
    src: "/lovable-uploads/1199b949-79a5-4132-8339-27bf45d3b278.png",
    alt: "Enjoying hookah at Toro Bar"
  },
  {
    src: "/lovable-uploads/cb5ff290-114c-415c-8670-56f75f55c46a.png",
    alt: "Friends playing pool at Toro Bar"
  },
  {
    src: "/lovable-uploads/1b91ad31-a9c8-4d33-84db-0ad58c9f84f4.png",
    alt: "Good vibes outside Toro Bar with Corona decorations"
  },
  {
    src: "/lovable-uploads/58eb874a-21f6-42cf-a360-777374b09f86.png",
    alt: "Birthday celebration at Toro Bar"
  },
  {
    src: "/lovable-uploads/c0e768b7-2a74-49ed-82cb-3fc5b64892f0.png",
    alt: "Party atmosphere with confetti at Toro Bar"
  },
  {
    src: "/lovable-uploads/5476af6f-f615-4592-8816-23547047cf2f.png",
    alt: "Fun times with props at Toro Bar"
  },
  {
    src: "/lovable-uploads/5689b0f6-a0fe-48f3-b051-98d4a35adfbd.png",
    alt: "Outside view of Toro Bar"
  }
];

export const StaffHighlights = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">The Toro Bar Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
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