import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CopperNickelTube = () => {
  const projects = [
    {
      title: "Copper Nickel Tube",
      img: "/copper-pipe/copper-pipe-supplier1.jpg",
    },
    {
      title: "CuNi 90/10 Tube",
      img: "/copper-pipe/copper-pipe-supplier2.jpg",
    },
    {
      title: "CuNi 70/30 Tube",
      img: "/copper-pipe/copper-pipe-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Copper Nickel Tubes",
    paragraph1:
      "Starlight Tubes supplies high-quality copper nickel tubes that offer exceptional corrosion resistance and thermal conductivity. Our CuNi tubes are specifically designed for heat exchanger applications and marine environments.",
    paragraph2:
      "Available in 90/10 and 70/30 compositions with seamless construction, our copper nickel tubes are manufactured using premium grade raw materials and undergo rigorous quality testing. We provide precision tubes for critical heat transfer applications.",
    specifications: [
      {
        label: "Grades",
        value: "C70600 (90/10), C71500 (70/30), C71640",
      },
      {
        label: "Size Range",
        value: "OD 6mm to 50mm, Wall Thickness 0.5mm to 3mm",
      },
      {
        label: "Type",
        value: "Seamless, Condenser Tubes, Heat Exchanger Tubes",
      },
      {
        label: "Standards",
        value: "ASTM B111, ASTM B395, ASTM B466, EN 12451",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Nickel Tube Supplier",
    description:
      "Starlight Tubes delivers premium copper nickel tubes with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your heat exchanger and marine requirements.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Precision Manufacturing",
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
            title="Copper Nickel Tubes"
            subtitle="Premium quality copper nickel tubes for heat exchangers and marine applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Copper Nickel Tube Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Nickel Tubes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper nickel tubes manufactured to meet
            international standards for heat exchangers and marine applications
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
              heat exchanger and marine applications
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

export default CopperNickelTube;
