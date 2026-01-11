import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Aluminium5052 = () => {
  useSEO({
    title:
      "Aluminium 5052 Manufacturer - Marine Grade Alloy | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 5052 manufacturer and global exporter. Premium marine grade aluminium sheets, plates, and coils with excellent corrosion resistance. ISO certified manufacturer supplying to 60+ countries worldwide.",
    keywords:
      "aluminium 5052 manufacturer, marine grade aluminium exporter, 5052 aluminium sheet manufacturer, 5052-H32 aluminium supplier, marine aluminium plate factory, corrosion resistant aluminium manufacturer, 5052 aluminium coil stockist, chemical processing aluminium, automotive aluminium 5052 wholesaler",
    url: "https://www.starlighttubes.com/aluminium-5052",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
      {
        name: "Aluminium 5052",
        url: "https://www.starlighttubes.com/aluminium-5052",
      },
    ],
    productSchema: {
      name: "Aluminium 5052 Alloy Products",
      description:
        "Premium quality Aluminium 5052 alloy with excellent corrosion resistance for marine, automotive, and chemical processing applications.",
      category: "Aluminium Products > Aluminium 5052",
      material:
        "Aluminium 5052 (Al 95.7-97.7%, Mg 2.2-2.8%, Cr 0.15-0.35%, Fe ≤0.4%)",
      brand: "Starlight Tubes",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium 5052 - Marine Grade Alloy",
      summary:
        "Starlight Tubes supplies Aluminium 5052 products with excellent corrosion resistance for marine, automotive, and chemical processing applications. H32 temper available per ASTM B209.",
    },
    entityType: "Product",
    relatedEntities: [
      "Aluminium 5052",
      "Marine Grade Aluminium",
      "5052-H32",
      "Corrosion Resistant",
      "ASTM B209",
      "Saltwater Resistant",
      "Chemical Processing",
    ],
    faqSchema: [
      {
        question: "What is 5052 aluminium used for?",
        answer:
          "Aluminium 5052 is used in marine components, fuel tanks, chemical equipment, appliances, and architectural applications due to its excellent saltwater corrosion resistance and good weldability.",
      },
      {
        question: "Is 5052 aluminium good for marine applications?",
        answer:
          "Yes, 5052 is one of the best aluminium alloys for marine use due to its high magnesium content providing excellent saltwater corrosion resistance, good formability, and weldability.",
      },
    ],
  });
  const projects = [
    {
      title: "Aluminium 5052 Sheet",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "Aluminium 5052 Plate",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "Aluminium 5052 Coil",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium 5052 Alloy",
    paragraph1:
      "Starlight Tubes supplies high-quality Aluminium 5052 alloy products that offer excellent corrosion resistance, particularly in marine environments, and good workability. This alloy is widely used in marine, automotive, and chemical processing applications.",
    paragraph2:
      "Available in various forms and tempers, our Aluminium 5052 products are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Composition",
        value:
          "Aluminum 95.7-97.7%, Magnesium 2.2-2.8%, Chromium 0.15-0.35%, Iron ≤0.4%",
      },
      {
        label: "Tensile Strength",
        value: "230 MPa (H32 temper)",
      },
      {
        label: "Yield Strength",
        value: "195 MPa (H32 temper)",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B210, ASTM B211, AMS 4015",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium 5052 Supplier",
    description:
      "Starlight Tubes delivers premium Aluminium 5052 alloy products with unmatched quality and reliability for marine and industrial applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Marine Grade Quality",
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
            title="Aluminium 5052"
            subtitle="Premium quality Aluminium 5052 alloy for marine applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium 5052 Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium 5052 Alloy
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Aluminium 5052 alloy for marine and industrial
            applications
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

export default Aluminium5052;
