import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const AluminiumCoil = () => {
  useSEO({
    title:
      "Aluminium Coil Manufacturer - ASTM B209 Roofing & Cladding Coils | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium coil manufacturer & global exporter. ASTM B209 aluminium coils for roofing, cladding & automotive applications. Custom widths available. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "aluminium coil manufacturer, aluminum coil exporter, ASTM B209 supplier, roofing coil manufacturer, cladding coil, automotive aluminium coil, aluminium coil UAE, aluminum coil Saudi Arabia, aluminium coil manufacturer India",
    url: "https://www.starlighttubes.com/aluminium-coil",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
      {
        name: "Aluminium Coil",
        url: "https://www.starlighttubes.com/aluminium-coil",
      },
    ],
    productSchema: {
      name: "Aluminium Coil",
      description:
        "Premium aluminium coils in various alloys and thicknesses. ASTM B209 certified coils with excellent formability for roofing, cladding, and automotive manufacturing applications.",
      category: "Aluminium Coils",
      material: "Aluminium Alloy (1100, 3003, 3105, 5005, 5052, 6061)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium Coils - Roofing & Cladding Grade",
      summary:
        "Starlight Tubes manufactures aluminium coils for roofing, cladding, and automotive applications. ASTM B209 certified coils in custom widths and various alloys.",
    },
    entityType: "Product",
    relatedEntities: [
      "Aluminium Coil",
      "Roofing Coil",
      "Cladding Coil",
      "ASTM B209",
      "Aluminium Strip",
      "Color Coated",
      "Mill Finish Coil",
    ],
    faqSchema: [
      {
        question: "What are aluminium coils used for?",
        answer:
          "Aluminium coils are used in roofing, wall cladding, gutters, automotive body panels, HVAC ductwork, and general sheet metal fabrication due to their formability and corrosion resistance.",
      },
      {
        question: "What aluminium alloy is best for roofing coils?",
        answer:
          "3003 and 3105 alloys are most popular for roofing due to excellent corrosion resistance and formability. 5052 is used for coastal areas requiring superior corrosion resistance.",
      },
    ],
  });
  const projects = [
    {
      title: "Aluminium Coil",
      img: "/aluminium-coils/aluminum-coil.jpg",
    },
    {
      title: "Aluminium Strip Coil",
      img: "/aluminium-coils/aluminium-strip.png",
    },
    {
      title: "Aluminium Foil Coil",
      img: "aluminium-coils/aluminium-foil.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium Coils",
    paragraph1:
      "Starlight Tubes supplies high-quality aluminium coils that offer excellent formability, corrosion resistance, and lightweight properties. Our aluminium coils are ideal for roofing, cladding, automotive, and various manufacturing applications.",
    paragraph2:
      "Available in various alloys, thicknesses, and widths, our aluminium coils are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, EN, and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "1100, 3003, 3105, 5005, 5052, 6061",
      },
      {
        label: "Thickness Range",
        value: "0.2mm to 6mm",
      },
      {
        label: "Width Range",
        value: "100mm to 2000mm",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B210, EN 485, EN 573",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium Coil Supplier",
    description:
      "Starlight Tubes delivers premium aluminium coils with unmatched quality and reliability for roofing, cladding, and manufacturing applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Widths Available",
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
            title="Aluminium Coils"
            subtitle="Premium quality aluminium coils for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium Coil Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium Coils
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality aluminium coils for roofing, cladding, and
            manufacturing applications
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
              Explore More Aluminium Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality aluminium products
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

export default AluminiumCoil;
