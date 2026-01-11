import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const StainlessSteel304Plate = () => {
  useSEO({
    title:
      "SS 304 Plate Manufacturer - ASTM A240 Stainless Steel Sheet | Starlight Tubes Global Exporter",
    description:
      "Leading SS 304 plate manufacturer & global exporter. ASTM A240 stainless steel plates & sheets. Multiple surface finishes available. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "SS 304 plate manufacturer, stainless steel 304 sheet exporter, ASTM A240 supplier, 304 stainless plate manufacturer, SS 304 sheet UAE, stainless steel plate Saudi Arabia, 304 plate manufacturer India, food grade SS plate",
    url: "https://www.starlighttubes.com/stainless-steel-304-plate",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Stainless Steel",
        url: "https://www.starlighttubes.com/stainless-steel",
      },
      {
        name: "SS 304 Plate",
        url: "https://www.starlighttubes.com/stainless-steel-304-plate",
      },
    ],
    productSchema: {
      name: "Stainless Steel 304 Plate",
      description:
        "Premium SS 304 plates and sheets in various surface finishes. ASTM A240 certified austenitic stainless steel with 18% Chromium and 8% Nickel for excellent corrosion resistance.",
      category: "Stainless Steel Plates",
      material: "Stainless Steel 304 (18% Chromium, 8% Nickel - Austenitic)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "SS 304 Plate - ASTM A240 Stainless Steel Sheet & Plate",
      summary:
        "Starlight Tubes supplies premium SS 304 plates and sheets with multiple surface finishes for kitchen equipment, food processing, architectural facades, and chemical storage applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Stainless Steel 304",
      "ASTM A240",
      "Austenitic Steel",
      "Mirror Finish Plate",
      "Food Grade SS",
      "Architectural Stainless",
      "Corrosion Resistant Plate",
    ],
    faqSchema: [
      {
        question: "What thickness range is available for SS 304 plates?",
        answer:
          "We offer SS 304 plates from 3mm to 100mm thickness, with width up to 1525mm and length up to 6000mm.",
      },
      {
        question:
          "What surface finishes are available for 304 stainless steel plates?",
        answer:
          "Our SS 304 plates are available in 2B, BA, No.1, No.4, Hairline, Mirror 8K, and Brushed finishes to meet your requirements.",
      },
    ],
  });
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
