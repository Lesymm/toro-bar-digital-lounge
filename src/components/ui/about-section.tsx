import { Users, Calendar, Wine, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wine,
    title: "Premium Bar",
    description: "Expertly crafted cocktails and premium spirits"
  },
  {
    icon: Sparkles,
    title: "Pool Tables",
    description: "Professional billiards in a vibrant atmosphere"
  },
  {
    icon: Calendar,
    title: "Live Events",
    description: "DJs, themed nights, and special performances"
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Perfect venue for your celebrations"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(var(--section-about-from))] to-[hsl(var(--section-about-to))] section-curve-top section-curve-bottom relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(59,130,246,0.05)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              About Toro Bar
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wider">EST. 2020</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <p className="text-xl text-gray-200 leading-relaxed">
                Welcome to <span className="text-blue-400 font-semibold">Toro Bar</span>, Washington, D.C.'s home for great drinks, good vibes, and billiards.
                Nestled in the heart of <span className="text-white font-medium">Columbia Heights</span>, Toro Bar isn't just a bar—it's a community hub.
                With a full bar, pool tables, hookah, and a calendar packed with events, we bring people
                together for nights full of connection, laughter, and friendly competition.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm border border-blue-500/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Founded in <span className="text-blue-400 font-semibold">2020</span> during the height of COVID by a D.C. native who grew up right here in the
                neighborhood, Toro Bar was built with one purpose in mind: to create a space where the
                community could come together. What started as a vision during uncertain times has grown
                into a vibrant gathering place, a spot where locals, friends, and visitors all feel at home.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10">
              <p className="text-xl text-gray-200 leading-relaxed">
                Whether you're here to shoot pool, sip cocktails, dance to DJs, or just unwind with friends,
                <span className="text-blue-400 font-semibold"> Toro Bar is where D.C. comes to play</span>. From the first break to the last call, the energy at
                Toro is unmatched!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};