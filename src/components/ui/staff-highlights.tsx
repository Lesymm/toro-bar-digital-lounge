import { Card, CardContent } from "./card";

const staffMembers = [
  {
    name: "Gabby",
    role: "Lead Bartender",
    image: "/lovable-uploads/3d944f15-5fdd-4b76-9f23-a394a0396708.png",
    description: "Master of micheladas and cocktail artistry. Known for crushing drinks while handling a full bar with a smile."
  }
];

export const StaffHighlights = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Meet Our Amazing Staff</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {staffMembers.map((staff, index) => (
            <Card key={index} className="cocktail-card animate-slide-up group overflow-hidden">
              <div className="relative">
                <img 
                  src={staff.image}
                  alt={`${staff.name} - ${staff.role} at Toro bar`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold font-futura italic text-white mb-1">
                    {staff.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">
                    {staff.role}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  {staff.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Team Photo Card */}
          <Card className="cocktail-card animate-slide-up group overflow-hidden md:col-span-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/ffe4fd15-b35c-47bc-b1f5-cf8f6681bf7b.png"
                alt="Toro bar team - Our dedicated staff ready to serve you"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold font-futura italic text-white mb-1">
                  The Toro bar Team
                </h3>
                <p className="text-blue-400 font-medium">
                  Ready to Make Your Night Unforgettable
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-300 leading-relaxed">
                Our passionate team brings energy, expertise, and exceptional service to every interaction. 
                From craft cocktails to friendly conversation, we're here to ensure you have an amazing experience at Toro bar.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};