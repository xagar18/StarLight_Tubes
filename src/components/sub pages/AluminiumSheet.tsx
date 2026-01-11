import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const AluminiumSheet = () => {
  useSEO({
    title:
      "Aluminium Sheet Manufacturer - Aerospace & Marine Grade | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium sheet manufacturer and global exporter. Premium aerospace and marine grade aluminium sheets in 6061, 5052, 7075, 3003 alloys. ISO certified manufacturer supplying to 60+ countries worldwide.",
    keywords:
      "aluminium sheet manufacturer, aluminium plate exporter, aerospace aluminium sheet, marine grade aluminium sheet, 6061 aluminium sheet manufacturer, 5052 aluminium sheet supplier, 7075 aluminium plate factory, aluminium coil manufacturer, industrial aluminium sheets, hot rolled aluminium sheet, cold rolled aluminium sheet manufacturer",
    url: "https://www.starlighttubes.com/aluminium-sheet",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
      {
        name: "Aluminium Sheet",
        url: "https://www.starlighttubes.com/aluminium-sheet",
      },
    ],
    productSchema: {
      name: "Aluminium Sheets & Plates",
      description:
        "Premium quality aluminium sheets with excellent formability, lightweight properties, and corrosion resistance for aerospace, automotive, and construction applications.",
      category: "Aluminium Products > Aluminium Sheets",
      material:
        "Aluminium (6061, 6063, 5052, 5083, 7075, 2024, 3003, 1100, 1050)",
      brand: "Starlight Tubes",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium Sheets - Aerospace & Marine Grade",
      summary:
        "Starlight Tubes supplies aluminium sheets and plates for aerospace, automotive, and construction applications. Multiple grades available in ASTM B209, AMS specifications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Aluminium Sheet",
      "Aluminium Plate",
      "ASTM B209",
      "Aerospace Aluminium",
      "Marine Grade",
      "Mill Finish",
      "Brushed Aluminium",
    ],
    faqSchema: [
      {
        question: "What are aluminium sheets used for?",
        answer:
          "Aluminium sheets are used in aerospace structures, automotive body panels, building facades, signage, marine components, and packaging due to their lightweight, formability, and corrosion resistance.",
      },
      {
        question: "What thickness is considered aluminium sheet vs plate?",
        answer:
          "Aluminium sheet is typically 0.2mm to 6mm thick, while aluminium plate is 6mm and above. Sheet is used for forming applications, plate for structural and machining purposes.",
      },
    ],
  });
  const projects = [
    {
      title: "Aluminium Sheet",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "Aluminium Plate",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "Aluminium Coil",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium Sheets",
    paragraph1:
      "Starlight Tubes supplies high-quality aluminium sheets that meet international standards. Our aluminium sheets offer excellent formability, lightweight properties, corrosion resistance, and surface finish for aerospace, automotive, and construction applications.",
    paragraph2:
      "Available in various alloys and tempers, our aluminium sheets are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "6061, 6063, 5052, 5083, 7075, 2024, 3003, 1100, 1050",
      },
      {
        label: "Size Range",
        value:
          "Thickness 0.2mm to 150mm, Width up to 2500mm, Length up to 12000mm",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B548, AMS 4027, EN 485, JIS H4000",
      },
      {
        label: "Types",
        value:
          "Hot Rolled, Cold Rolled, Annealed, Mill Finish, Brushed, Coated",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium Sheet Supplier",
    description:
      "Starlight Tubes delivers premium aluminium sheets with unmatched quality and reliability for diverse industrial applications.",
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
            title="Aluminium Sheets"
            subtitle="Premium quality aluminium sheets for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium Sheet Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium Sheets & Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality aluminium sheets for aerospace, automotive, and
            construction applications
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

export default AluminiumSheet;
