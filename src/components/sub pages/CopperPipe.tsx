import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const CopperPipe = () => {
  const projects = [
    {
      title: "Copper Pipe",
      img: "/MainScrollableImage/Home.webp",
    },
    {
      title: "Copper Seamless Pipe",
      img: "/MainScrollableImage/Home1.webp",
    },
    {
      title: "Copper Tube",
      img: "/MainScrollableImage/Home2.webp",
    },
  ];

  const ctaData = {
    title: "Premium Copper Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality copper pipes that meet international standards. Our copper pipes offer excellent thermal and electrical conductivity, corrosion resistance, and durability for plumbing, HVAC, refrigeration, and industrial applications.",
    paragraph2:
      "Available in various grades and tempers, our copper pipes are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, ASME, and international specifications. We offer customized solutions to meet your specific project requirements.",
    specifications: [
      {
        label: "Grades",
        value: "C10100, C10200, C11000, C12000, C12200, C70600, C71500",
      },
      {
        label: "Size Range",
        value:
          "OD 6mm to 300mm, Wall Thickness 0.5mm to 15mm, Length up to 6 meters",
      },
      {
        label: "Standards",
        value: "ASTM B42, ASTM B88, ASTM B111, ASTM B280, EN 12449",
      },
      {
        label: "Types",
        value: "Seamless, Welded, DLP, ETP with various tempers available",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Pipe Supplier",
    description:
      "Starlight Tubes delivers premium copper pipes with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your industrial copper requirements.",
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
            title="Copper Pipes"
            subtitle="Premium quality copper pipes for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Copper Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Pipes & Tubing
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper pipes manufactured to meet
            international standards for diverse industrial applications
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
              Browse our complete range of high-quality copper products for your
              industrial applications
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

export default CopperPipe;
