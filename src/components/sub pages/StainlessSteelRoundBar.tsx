import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const StainlessSteelRoundBar = () => {
  useSEO({
    title:
      "Stainless Steel Round Bar - Starlight Tubes | SS Round Bars | Global Suppliers",
    description:
      "Premium stainless steel round bars manufacturer. Hot rolled and cold drawn SS bars. For machining and construction. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "stainless steel round bar UAE, SS round bars Saudi Arabia, hot rolled bars Qatar, cold drawn bars Oman, machining bars Kuwait, construction bars Bahrain, stainless steel round bar worldwide, SS bar manufacturers GCC, USA steel suppliers, European steel exporters, global steel manufacturers",
    url: "https://www.starlighttubes.com/stainless-steel-round-bar",
  });
  const projects = [
    {
      title: "Stainless Steel Round Bar",
      img: "/stainless-steel-round-bar/round-bar.jpg",
    },
    {
      title: "Stainless Steel Hex Bar",
      img: "/stainless-steel-round-bar/hex-bar.jpg",
    },
    {
      title: "Stainless Steel Square Bar",
      img: "/stainless-steel-round-bar/square-bar.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Stainless Steel Round Bars",
    paragraph1:
      "Starlight Tubes supplies high-quality stainless steel round bars for precision engineering, machining, and fabrication applications. Our round bars are produced from premium grade stainless steel alloys, offering excellent mechanical properties, corrosion resistance, and machinability for automotive, aerospace, construction, and general engineering industries.",
    paragraph2:
      "Available in hot rolled, cold drawn, and bright polished conditions, our stainless steel round bars meet international specifications. Each bar is manufactured under strict quality control with full traceability and certification. We offer custom cutting, straightening, and surface finishing services to meet your exact requirements.",
    specifications: [
      {
        label: "Grades",
        value:
          "303, 304, 304L, 316, 316L, 321, 310S, 410, 420, 431, Duplex 2205",
      },
      {
        label: "Size Range",
        value:
          "Diameter 6mm to 500mm, Length up to 6 meters or as per requirement",
      },
      {
        label: "Standards",
        value:
          "ASTM A276, ASTM A479, ASTM A582, ASME SA479, DIN 1.4301, EN 10088",
      },
      {
        label: "Finish",
        value: "Black, Bright, Polished, Peeled, Ground, Centerless Ground",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted SS Round Bar Supplier",
    description:
      "Starlight Tubes supplies precision stainless steel round bars for machining and fabrication. We offer multiple finishes and grades with full material traceability.",
    features: [
      "ASTM A276 Certified",
      "Bright Finish Available",
      "Custom Cutting Service",
      "Multiple Grades Stock",
      "Surface Grinding",
      "Fast Delivery Network",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Stainless Steel Round Bars"
            subtitle="Precision round bars in various grades"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Stainless Steel Round Bars Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Stainless Steel Round Bars
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality stainless steel round bars manufactured to meet
            international standards for diverse industrial applications
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16">
          <CommonCTA
            title={ctaData.title}
            paragraph1={ctaData.paragraph1}
            paragraph2={ctaData.paragraph2}
            specifications={ctaData.specifications}
          />
        </div>

        {/* Exporter Section */}

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Stainless Steel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality stainless steel products
              for your industrial applications
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

        {/* Bottom CTA Section */}
        <BottomCTA
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          features={bottomCtaData.features}
        />

        {/* Stats Grid Section */}
        <div>
          <StatsGrid />
        </div>
        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default StainlessSteelRoundBar;
