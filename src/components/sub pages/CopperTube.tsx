import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CopperTube = () => {
  useSEO({
    title:
      "Copper Tube - Starlight Tubes | Copper Tubes | Middle East Suppliers",
    description:
      "Premium copper tubes manufacturer. Type K, L, M copper tubing. Plumbing, HVAC, refrigeration. High conductivity, corrosion resistant. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "copper tube UAE, copper tubes Saudi Arabia, type K tubing Qatar, type L tubing Oman, type M tubing Kuwait, plumbing tubes Bahrain, HVAC copper Middle East, refrigeration tubing GCC, copper tube manufacturers UAE",
    url: "https://www.starlighttubes.com/copper-tube",
  });
  const projects = [
    {
      title: "Copper Tube",
      img: "/copper-tube/copper-tube-supplier1.jpg",
    },
    {
      title: "Copper Coil Tubing",
      img: "/copper-tube/copper-tube-supplier2.jpg",
    },
    {
      title: "Copper Heat Exchanger Tube",
      img: "/copper-tube/copper-tube-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Copper Tubes",
    paragraph1:
      "Starlight Tubes supplies high-quality copper tubes that meet international standards. Our copper tubes are ideal for heat exchangers, air conditioning, refrigeration, and plumbing systems with excellent thermal conductivity and corrosion resistance.",
    paragraph2:
      "Available in seamless and welded configurations with various tempers, our copper tubes are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, ASME, and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "C10100, C10200, C11000, C12000, C12200, C70600, C71500",
      },
      {
        label: "Size Range",
        value:
          "OD 3mm to 150mm, Wall Thickness 0.3mm to 5mm, Length up to 15 meters",
      },
      {
        label: "Standards",
        value: "ASTM B75, ASTM B88, ASTM B111, ASTM B280, EN 12449",
      },
      {
        label: "Types",
        value: "Seamless, Welded, LWC, Pancake Coil, Level Wound Coil",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Tube Supplier",
    description:
      "Starlight Tubes delivers premium copper tubes with unmatched quality and reliability for HVAC, refrigeration, and industrial applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Lengths Available",
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
            title="Copper Tubes"
            subtitle="Premium quality copper tubes for HVAC & refrigeration"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Copper Tube Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Tubes & Tubing
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper tubes for heat exchangers, HVAC, and
            refrigeration systems
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
              Explore More Copper Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality copper products
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

export default CopperTube;
