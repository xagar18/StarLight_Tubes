import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CopperRoundBar = () => {
  useSEO({
    title:
      "Copper Round Bar - Starlight Tubes | Copper Round Bars | Middle East Suppliers",
    description:
      "Professional copper round bars manufacturer. High conductivity, machinable. Electrical components, plumbing fittings. Various diameters available. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "copper round bar UAE, copper round bars Saudi Arabia, high conductivity bars Qatar, machinable bars Oman, electrical bars Kuwait, plumbing bars Bahrain, copper round bar Middle East, copper bar manufacturers GCC",
    url: "https://www.starlighttubes.com/copper-round-bar",
  });
  const projects = [
    {
      title: "Copper Round Bar",
      img: "/copper-round-bar/copper-round-bar-suppliers.jpg",
    },
    {
      title: "Copper Hex Bar",
      img: "/copper-round-bar/copper-hex-bar-suppliers.jpg",
    },
    {
      title: "Copper Square Bar",
      img: "/copper-round-bar/copper-square-bar-suppliers.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Copper Round Bars",
    paragraph1:
      "Starlight Tubes supplies high-quality copper round bars that offer excellent electrical conductivity, thermal conductivity, and corrosion resistance. Our copper bars are ideal for electrical applications, heat exchangers, and various industrial uses.",
    paragraph2:
      "Available in various grades and dimensions, our copper round bars are manufactured using premium grade raw materials and undergo rigorous quality testing. We provide customized solutions with precise dimensions to meet your specific project requirements.",
    specifications: [
      {
        label: "Grades",
        value: "C10100, C10200, C11000, C12200, C70600, C71500",
      },
      {
        label: "Diameter Range",
        value: "6mm to 200mm",
      },
      {
        label: "Length",
        value: "Up to 6 meters",
      },
      {
        label: "Standards",
        value: "ASTM B187, ASTM B133, EN 12163, EN 12164",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Round Bar Supplier",
    description:
      "Starlight Tubes delivers premium copper round bars with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your industrial copper requirements.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Dimensions Available",
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
            title="Copper Round Bars"
            subtitle="Premium quality copper round bars for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Copper Round Bar Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Round Bars
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper round bars manufactured to meet international
            standards for diverse industrial applications
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

export default CopperRoundBar;
