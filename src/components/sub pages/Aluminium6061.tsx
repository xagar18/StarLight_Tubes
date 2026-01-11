import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Aluminium6061 = () => {
  useSEO({
    title:
      "Aluminium 6061 Manufacturer - T6 Temper Alloy | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 6061 manufacturer and global exporter. Premium 6061-T6 aluminium pipes, sheets, bars, and plates for aerospace, automotive, and structural applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
    keywords:
      "aluminium 6061 manufacturer, 6061-T6 aluminium exporter, aluminium 6061 pipe manufacturer, 6061 aluminium sheet supplier, 6061 aluminium bar factory, aerospace grade 6061, structural aluminium 6061, weldable aluminium alloy manufacturer, 6061 aluminium plate stockist, 6061 aluminium wholesaler",
    url: "https://www.starlighttubes.com/aluminium-6061",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
      {
        name: "Aluminium 6061",
        url: "https://www.starlighttubes.com/aluminium-6061",
      },
    ],
    productSchema: {
      name: "Aluminium 6061 Alloy Products",
      description:
        "Premium quality Aluminium 6061 alloy with excellent strength, weldability, and corrosion resistance for aerospace, automotive, marine, and structural applications.",
      category: "Aluminium Products > Aluminium 6061",
      material:
        "Aluminium 6061 (Al 95.8-98.6%, Mg 0.8-1.2%, Si 0.4-0.8%, Cr 0.04-0.35%)",
      brand: "Starlight Tubes",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium 6061 - Structural Grade Alloy",
      summary:
        "Starlight Tubes supplies Aluminium 6061-T6 products with excellent strength-to-weight ratio for aerospace, marine, and structural applications. Heat treatable alloy per ASTM B209, B211.",
    },
    entityType: "Product",
    relatedEntities: [
      "Aluminium 6061",
      "6061-T6",
      "Structural Aluminium",
      "Aerospace Grade",
      "Marine Grade",
      "Heat Treatable",
      "Weldable Aluminium",
    ],
    faqSchema: [
      {
        question: "What is 6061 aluminium used for?",
        answer:
          "6061 aluminium is used in aerospace structures, marine components, automotive parts, bicycle frames, structural frameworks, and general machining due to its excellent strength, weldability, and corrosion resistance.",
      },
      {
        question: "What is the difference between 6061-T6 and 6061-O temper?",
        answer:
          "6061-T6 is heat treated and artificially aged for maximum strength (310 MPa tensile). 6061-O is annealed for best formability but lower strength. T6 is most common for structural applications.",
      },
    ],
  });
  const projects = [
    {
      title: "Aluminium 6061 Pipe",
      img: "/alumininum-pipe/aluminium-pipes.jpg",
    },
    {
      title: "Aluminium 6061 Sheet",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "Aluminium 6061 Bar",
      img: "/stainless-steel-round-bar/round-bar.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium 6061 Alloy",
    paragraph1:
      "Starlight Tubes supplies high-quality Aluminium 6061 alloy products that offer excellent strength, weldability, and corrosion resistance. This versatile alloy is widely used in aerospace, automotive, marine, and structural applications.",
    paragraph2:
      "Available in various forms and tempers, our Aluminium 6061 products are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Composition",
        value:
          "Aluminum 95.8-98.6%, Magnesium 0.8-1.2%, Silicon 0.4-0.8%, Chromium 0.04-0.35%",
      },
      {
        label: "Tensile Strength",
        value: "310 MPa (T6 temper)",
      },
      {
        label: "Yield Strength",
        value: "276 MPa (T6 temper)",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B211, ASTM B221, AMS 4027",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium 6061 Supplier",
    description:
      "Starlight Tubes delivers premium Aluminium 6061 alloy products with unmatched quality and reliability for aerospace, automotive, and structural applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Multiple Tempers Available",
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
            title="Aluminium 6061"
            subtitle="Premium quality Aluminium 6061 alloy for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium 6061 Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium 6061 Alloy
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Aluminium 6061 alloy for aerospace, automotive, and
            structural applications
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

export default Aluminium6061;
