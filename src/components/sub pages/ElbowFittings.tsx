import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ElbowFittings = () => {
  useSEO({
    title:
      "Elbow Fittings - Starlight Tubes | Steel Pipe Elbows | Middle East Suppliers",
    description:
      "Premium steel elbow fittings manufacturer. 45°, 90°, 180° elbows in stainless steel, carbon steel. Butt weld, socket weld, threaded connections. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "elbow fittings UAE, steel elbows Saudi Arabia, pipe elbows Qatar, 90 degree elbows Oman, 45 degree elbows Kuwait, butt weld elbows Bahrain, socket weld elbows Middle East, threaded elbows GCC, steel elbow fittings UAE, pipe elbow manufacturers Saudi Arabia",
    url: "https://www.starlighttubes.com/elbow-fittings",
  });
  const projects = [
    {
      title: "Elbow Fittings",
      img: "/socket-weld/socket-elbow.jpg",
    },
    {
      title: "90° Elbow",
      img: "/elbows/90-degree-elbow.jpg",
    },
    {
      title: "45° Elbow",
      img: "/elbows/45-degree-elbow.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Elbow Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality elbow fittings designed for changing the direction of flow in piping systems. Our elbows provide smooth flow transitions and are available in various angles including 45°, 90°, and 180° configurations.",
    paragraph2:
      "Available in multiple connection types including butt weld, socket weld, and threaded, our elbow fittings are manufactured from premium materials and undergo rigorous quality testing to ensure leak-proof performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Angles",
        value: "45°, 90°, 180° (Long/Short Radius)",
      },
      {
        label: "Size Range",
        value: '1/8" to 48", Schedule 5S to XXS',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.9, B16.11, B16.28",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Elbow Fittings Supplier",
    description:
      "Starlight Tubes delivers premium elbow fittings with unmatched quality and reliability for directional flow changes in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Multiple Angle Options",
      "Global Export Network",
      "Bulk Order Discounts",
      "Expert Technical Guidance",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="Elbow Fittings"
            subtitle="Premium quality elbow fittings for directional flow changes"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Elbow Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Elbow Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality elbow fittings for changing flow direction in piping
            systems
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16 px-4">
          <CommonCTA
            title={ctaData.title}
            paragraph1={ctaData.paragraph1}
            paragraph2={ctaData.paragraph2}
            specifications={ctaData.specifications}
          />
        </div>

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Pipe Fittings
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality pipe fittings
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

        <BottomCTA
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          features={bottomCtaData.features}
        />

        <div>
          <StatsGrid />
        </div>
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default ElbowFittings;
