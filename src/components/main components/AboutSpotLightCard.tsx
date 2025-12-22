import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Award, Building2, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Industry Leaders",
    description: "5+ years of excellence in steel distribution",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving 10+ countries worldwide",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO 9001:2015 certified",
  },
  {
    icon: Award,
    title: "Recognized Exporter",
    description: "Govt. of India Export House",
  },
];

export function CardSpotlightDemo({
  heading,
  text,
  image,
}: {
  heading?: string;
  text: string;
  image?: string;
}) {
  return (
    <CardSpotlight className="h-fit w-full rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        {heading && (
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-teal-400 text-sm font-medium tracking-wide">
                Established Excellence
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold relative z-20 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight leading-tight">
              {heading}
            </h3>
            <div className="mt-4 flex gap-1 justify-center md:justify-start">
              <span className="w-12 h-1.5 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full"></span>
              <span className="w-6 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></span>
              <span className="w-3 h-1.5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></span>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <div className="relative z-20 space-y-6">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg font-light">
              {text}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-teal-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          {image && (
            <div className="relative">
              {/* Image Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl scale-95"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                <img
                  src={image}
                  alt="Starlight Tubes Facility"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Image Badge */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-white text-xs font-medium">
                    Premium Quality Since 2020
                  </span>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-teal-500/50 rounded-tr-2xl"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl"></div>
            </div>
          )}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "10+", label: "Countries Served" },
              { value: "100+", label: "Happy Clients" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}
