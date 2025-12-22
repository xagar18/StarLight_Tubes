import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const Flanges = () => {
  const projects = [
    {
      title: "Weld Neck Flange",
      img: "/MainScrollableImage/Home.webp",
    },
    {
      title: "Slip On Flange",
      img: "/MainScrollableImage/Home1.webp",
    },
    {
      title: "Blind Flange",
      img: "/MainScrollableImage/Home2.webp",
    },
  ];

  const ctaData = {
    title: "Premium Industrial Flanges",
    paragraph1:
      "Starlight Tubes supplies high-quality industrial flanges that meet international standards. Our flanges are engineered for superior performance, durability, and leak-proof connections in demanding industrial applications including oil & gas, petrochemical, and power generation.",
    paragraph2:
      "Available in various materials including stainless steel, carbon steel, alloy steel, and nickel alloys, our flanges undergo rigorous quality testing to ensure compliance with ASTM, ASME, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel A105, Alloy Steel F11/F22, Inconel, Monel",
      },
      {
        label: "Size Range",
        value: '1/2" to 60", Class 150 to 2500, PN 6 to PN 400',
      },
      {
        label: "Standards",
        value: "ASME B16.5, B16.47, API 6A, EN 1092, DIN 2527-2637",
      },
      {
        label: "Types",
        value:
          "Weld Neck, Slip On, Blind, Socket Weld, Threaded, Lap Joint, Orifice",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Flange Supplier",
    description:
      "Starlight Tubes delivers premium flanges with unmatched quality and reliability for all your industrial piping needs.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Sizes Available",
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
            title="Industrial Flanges"
            subtitle="Premium quality flanges for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Flanges Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Industrial Flanges
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality flanges manufactured to meet international
            standards
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
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality pipe fittings and
              flanges
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

export default Flanges;
