import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const NickelSheet = () => {
  useSEO({
    title:
      "Nickel Sheet Manufacturer & Exporter | Nickel 200/201 Plates & Coils | Starlight Tubes",
    description:
      "Leading nickel sheet manufacturer and exporter in India. Premium Nickel 200, Nickel 201 sheets, plates & coils for chemical processing and electronics. ASTM B162 certified. Global supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "nickel sheet manufacturer, nickel plate exporter, nickel 200 sheet supplier, nickel 201 plate manufacturer, nickel coil exporter India, nickel alloy sheet manufacturer, pure nickel sheet supplier, ASTM B162 nickel plate, nickel sheet UAE, nickel plate Saudi Arabia, chemical resistant nickel sheet, electronics grade nickel",
    url: "https://www.starlighttubes.com/nickel-sheet",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Nickel Alloys",
        url: "https://www.starlighttubes.com/nickel-alloys",
      },
      {
        name: "Nickel Sheet",
        url: "https://www.starlighttubes.com/nickel-sheet",
      },
    ],
    productSchema: {
      name: "Nickel Alloy Sheet",
      description:
        "Premium quality nickel alloy sheets and plates (Nickel 200, 201, 205) manufactured to ASTM B162 standards for chemical processing, electronics, and caustic handling applications.",
      category: "Nickel Alloy Products",
      material: "Nickel 200, Nickel 201, Nickel 205",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Nickel Sheet - High Purity Nickel 200/201 Plates & Coils",
      summary:
        "Starlight Tubes manufactures premium nickel alloy sheets and plates with superior corrosion resistance for chemical processing, electronics, and caustic handling applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Nickel 200",
      "Nickel 201",
      "Nickel Sheet",
      "Nickel Plate",
      "ASTM B162",
      "Electronics Grade",
      "Chemical Resistant",
      "Caustic Handling",
    ],
    faqSchema: [
      {
        question: "What industries use nickel sheets?",
        answer:
          "Nickel sheets are widely used in chemical processing, electronics manufacturing, food processing, caustic soda production, and aerospace applications due to their excellent corrosion resistance and thermal conductivity.",
      },
      {
        question: "What is the purity of Nickel 200 sheets?",
        answer:
          "Nickel 200 sheets contain a minimum of 99.6% pure nickel, making them ideal for applications requiring high purity and excellent resistance to caustic alkalis and various acids.",
      },
    ],
  });
  const projects = [
    {
      title: "Nickel Plate",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "Nickel Sheet",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "Nickel Coil",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Nickel Alloy Sheets",
    paragraph1:
      "Starlight Tubes supplies high-quality nickel alloy sheets and plates offering exceptional corrosion resistance and thermal stability. Our nickel sheets are ideal for chemical processing equipment, heat exchangers, caustic handling systems, and electronic components where superior performance in aggressive environments is critical. Available in commercially pure nickel grades with excellent formability and weldability.",
    paragraph2:
      "Our nickel alloy sheets are manufactured to precise thickness tolerances with various surface finishes. We offer comprehensive fabrication services including cutting, bending, and forming. Each sheet undergoes rigorous testing for chemical composition, mechanical properties, and surface quality to ensure compliance with international standards and optimal performance in your applications.",
    specifications: [
      {
        label: "Grades",
        value: "Nickel 200 (99.6% Pure), Nickel 201 (Low Carbon), Nickel 205",
      },
      {
        label: "Thickness Range",
        value: "0.5mm to 50mm, Width up to 1000mm, Length up to 4000mm",
      },
      {
        label: "Standards",
        value: "ASTM B162, ASME SB162, DIN 17751, EN 10204, JIS H4551",
      },
      {
        label: "Finish",
        value: "Hot Rolled, Cold Rolled, Annealed, Polished, Pickled",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Nickel Sheet Supplier",
    description:
      "Starlight Tubes provides high-purity nickel alloy sheets for chemical and electronic applications. We offer custom fabrication services with complete material traceability.",
    features: [
      "High Purity Grades",
      "Chemical Resistant",
      "Custom Cutting",
      "Multiple Finishes",
      "Electronics Grade",
      "ASTM B162 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Nickel Sheets"
            subtitle="Premium nickel sheets & plates"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Nickel Sheet Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Nickel Alloy Sheets
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality nickel alloy sheets manufactured to meet
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
              Explore More Nickel Alloy Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our extensive range of nickel alloy products for
              high-temperature applications
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

export default NickelSheet;
