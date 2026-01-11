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
      "Copper Tube Manufacturer - Type K, L, M Tubing | Starlight Tubes Global Exporter",
    description:
      "Leading copper tube manufacturer and global exporter. Premium Type K, L, M copper tubing for plumbing, HVAC, and refrigeration systems. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "copper tube manufacturer, copper tubing exporter, Type K copper tube, Type L copper tubing, Type M copper tube, HVAC copper tubing manufacturer, refrigeration copper tubes, plumbing copper tube supplier, copper tube factory, copper tube wholesaler, industrial copper tubing, seamless copper tubes manufacturer, copper coil tubing exporter",
    url: "https://www.starlighttubes.com/copper-tube",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Copper", url: "https://www.starlighttubes.com/copper" },
      {
        name: "Copper Tube",
        url: "https://www.starlighttubes.com/copper-tube",
      },
    ],
    productSchema: {
      name: "Copper Tubes - Type K, L, M",
      description:
        "Premium quality copper tubes for HVAC, refrigeration, and plumbing applications. Available in seamless and welded configurations with various tempers.",
      category: "Copper Products > Copper Tubes",
      material:
        "Copper (C10100, C10200, C11000, C12000, C12200, C70600, C71500)",
      brand: "Starlight Tubes",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Copper Tubes - HVAC & Refrigeration Grade",
      summary:
        "Starlight Tubes supplies copper tubes for heat exchangers, air conditioning, and refrigeration systems. Seamless and coil tubing available in ASTM B75, B111, B280 specifications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Copper Tubing",
      "Heat Exchanger Tubes",
      "Refrigeration Coils",
      "ASTM B75",
      "ASTM B280",
      "LWC Coils",
      "ACR Tubing",
    ],
    faqSchema: [
      {
        question: "What are copper tubes used for?",
        answer:
          "Copper tubes are used in heat exchangers, air conditioning systems, refrigeration units, and plumbing applications where high thermal conductivity and corrosion resistance are required.",
      },
      {
        question: "What is the difference between copper tube and copper pipe?",
        answer:
          "Copper tubes have thinner walls and are primarily used for heat transfer applications like HVAC, while copper pipes have thicker walls for plumbing and water supply systems.",
      },
    ],
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
