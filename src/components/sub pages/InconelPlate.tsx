import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const InconelPlate = () => {
  useSEO({
    title:
      "Inconel Plate Manufacturer - 600/625/718 Grades ASTM B168 | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel plate manufacturer & global exporter. Inconel 600, 625, 718, 825 alloy plates for extreme temperature & corrosive applications. ASTM B168/B443 certified, aerospace approved. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "Inconel plate manufacturer, Inconel sheet exporter, ASTM B168 supplier, Inconel 625 plate manufacturer, high temperature alloy plate, aerospace Inconel plate, Inconel plate UAE, Inconel plates Saudi Arabia, alloy plate manufacturer India, corrosion resistant plate",
    url: "https://www.starlighttubes.com/inconel-plate",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Inconel", url: "https://www.starlighttubes.com/inconel" },
      {
        name: "Inconel Plate",
        url: "https://www.starlighttubes.com/inconel-plate",
      },
    ],
    productSchema: {
      name: "Inconel Alloy Plate",
      description:
        "Premium Inconel alloy plates in multiple grades including 600, 601, 617, 625, 690, 718, 725, 800, 825, X-750. ASTM B168/B443 certified for extreme temperature and corrosive service conditions.",
      category: "Inconel Alloy Products",
      material:
        "Inconel Alloy (600, 601, 617, 625, 690, 718, 725, 800, 825, X-750)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Inconel Plate - High Temperature Nickel Alloy Sheets",
      summary:
        "Starlight Tubes manufactures Inconel alloy plates in grades 600, 625, 718, and 825 with excellent oxidation resistance and mechanical strength for aerospace and chemical processing applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Inconel Plate",
      "Inconel Sheet",
      "Nickel Alloy",
      "ASTM B168",
      "High Temperature Alloy",
      "Aerospace Grade",
      "Nuclear Reactor",
      "Heat Exchanger",
    ],
    faqSchema: [
      {
        question: "What is Inconel plate used for?",
        answer:
          "Inconel plates are used in aerospace components, nuclear reactor vessels, heat exchangers, chemical processing equipment, and furnace components requiring high strength and oxidation resistance at elevated temperatures.",
      },
      {
        question: "What are the available Inconel plate grades?",
        answer:
          "Starlight Tubes offers Inconel plates in grades 600, 601, 617, 625, 690, 718, 725, 800, 825, and X-750, each designed for specific temperature and corrosion resistance requirements.",
      },
    ],
  });
  const projects = [
    {
      title: "Plate",
      img: "/inconel-plate/inconel-plate-supplier.jpg",
    },
    {
      title: "Sheet",
      img: "/inconel-plate/inconel-sheet-supplier.jpg",
    },
    {
      title: "Coil",
      img: "/inconel-plate/inconel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel Alloy Plates",
    paragraph1:
      "Starlight Tubes supplies high-performance Inconel alloy plates designed for extreme temperature and corrosive service conditions. Our Inconel plates provide exceptional oxidation resistance, high mechanical strength at elevated temperatures, and superior resistance to chloride-ion stress-corrosion cracking, making them ideal for aerospace components, nuclear reactor vessels, heat exchangers, and chemical processing equipment.",
    paragraph2:
      "We offer Inconel plates in various grades with hot rolled, cold rolled, and solution-annealed finishes. Each plate is manufactured under strict quality protocols including ultrasonic testing, chemical composition analysis, mechanical testing, and surface inspection to guarantee dimensional accuracy and metallurgical integrity for critical applications.",
    specifications: [
      {
        label: "Grades",
        value: "Inconel 600, 601, 617, 625, 690, 718, 725, 800, 825, X-750",
      },
      {
        label: "Thickness Range",
        value: "0.1mm to 12mm, Width up to 1000mm, Length up to 4000mm",
      },
      {
        label: "Standards",
        value:
          "ASTM B168, ASTM B443, ASTM B906, ASME SB168, DIN 17744, EN 10028-7",
      },
      {
        label: "Finishes",
        value: "Hot Rolled, Cold Rolled, Solution Annealed, Polished, Pickled",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel Plate Supplier",
    description:
      "Starlight Tubes provides premium Inconel alloy plates for extreme temperature and corrosive applications. We offer multiple grades with complete metallurgical certification.",
    features: [
      "Multiple Grades Stock",
      "Aerospace Approved",
      "Solution Annealed",
      "Custom Cutting",
      "Ultrasonic Tested",
      "ASTM B168 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel Plates"
            subtitle="High-performance plates for demanding applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel Plate Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel Alloy Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel alloy plates manufactured to meet
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
              Explore More Inconel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Discover our premium Inconel superalloy products for extreme
              environments
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

export default InconelPlate;
