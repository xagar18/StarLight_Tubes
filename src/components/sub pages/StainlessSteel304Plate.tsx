import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const StainlessSteel304Plate = () => {
  const projects = [
    {
      title: "ASTM A240 Type 304",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "Stainless Steel Sheet Type 304",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "304 Stainless Steel Strip",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "304 Stainless Steel Plate",
    paragraph1:
      "Starlight Tubes supplies premium quality 304 stainless steel plates for a wide range of industrial and commercial applications. Grade 304 plates offer excellent corrosion resistance, good formability, and aesthetic appeal, making them perfect for kitchen equipment, food processing machinery, architectural facades, pressure vessels, and chemical storage tanks.",
    paragraph2:
      "Available in various surface finishes including 2B, BA, No.4, and hairline, our 304 stainless steel plates are manufactured to precise thickness tolerances. We offer comprehensive fabrication services including cutting, bending, rolling, and polishing. Each plate is tested for chemical composition, mechanical properties, and surface quality to ensure consistent performance.",
    specifications: [
      {
        label: "Composition",
        value:
          "18% Chromium, 8% Nickel - Non-magnetic austenitic stainless steel",
      },
      {
        label: "Thickness Range",
        value: "3mm to 100mm, Width up to 1525mm, Length up to 6000mm",
      },
      {
        label: "Standards",
        value: "ASTM A240 SS304, ASME SA240, DIN 1.4301, EN 10088-2, JIS G4304",
      },
      {
        label: "Finish",
        value: "2B, BA, No.1, No.4, Hairline, Mirror 8K, Brushed Finish",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted SS 304 Plate Supplier",
    description:
      "Starlight Tubes supplies premium 304 stainless steel plates for industrial and architectural applications. We offer cutting and polishing services with competitive pricing.",
    features: [
      "ASTM A240 Certified",
      "Multiple Finish Options",
      "Custom Cutting Service",
      "Corrosion Resistant",
      "Food Grade Available",
      "Fast Delivery",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="SS 304 Plates"
            subtitle="Premium 304 grade plates & sheets"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* 304 Stainless Steel Plate Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            304 Stainless Steel Plate
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality 304 stainless steel plates manufactured to meet
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
              Explore More SS 304 Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Discover our premium SS 304 grade products with excellent
              corrosion resistance
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

export default StainlessSteel304Plate;
