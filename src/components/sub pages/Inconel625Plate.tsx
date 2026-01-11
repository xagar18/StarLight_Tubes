import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Inconel625Plate = () => {
  useSEO({
    title:
      "Inconel 625 Plate Manufacturer & Exporter | UNS N06625 Sheets & Coils | Starlight Tubes",
    description:
      "Leading Inconel 625 plate manufacturer and exporter in India. Premium UNS N06625 corrosion resistant alloy plates for marine, aerospace & chemical processing. ASTM B443 certified. Global supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "inconel 625 plate manufacturer, inconel 625 sheet exporter, UNS N06625 plate supplier, corrosion resistant alloy plate manufacturer, inconel 625 coil exporter India, marine grade inconel plate manufacturer, aerospace inconel plate supplier, ASTM B443 inconel 625, inconel 625 plate UAE, inconel 625 Saudi Arabia, seawater resistant plate manufacturer",
    url: "https://www.starlighttubes.com/inconel-625-plate",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Inconel", url: "https://www.starlighttubes.com/inconel" },
      {
        name: "Inconel 625 Plate",
        url: "https://www.starlighttubes.com/inconel-625-plate",
      },
    ],
    productSchema: {
      name: "Inconel 625 Plate",
      description:
        "Premium quality Inconel 625 (UNS N06625) plates and sheets manufactured to ASTM B443 standards for marine engineering, aerospace structures, and chemical processing applications.",
      category: "Inconel Alloy Products",
      material: "Inconel 625 (UNS N06625, Werkstoff Nr. 2.4856)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Inconel 625 Plate - Marine Grade Corrosion Resistant Alloy",
      summary:
        "Starlight Tubes manufactures Inconel 625 plates with superior resistance to pitting, crevice corrosion, and stress-corrosion cracking for marine, aerospace, and chemical applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Inconel 625",
      "UNS N06625",
      "ASTM B443",
      "Marine Grade",
      "Seawater Resistant",
      "Aerospace Plate",
      "Chemical Processing",
      "IGC Tested",
    ],
    faqSchema: [
      {
        question: "Why is Inconel 625 plate preferred for marine applications?",
        answer:
          "Inconel 625 plates offer exceptional resistance to seawater corrosion, pitting, crevice corrosion, and chloride stress-corrosion cracking, making them ideal for marine structures, offshore platforms, and seawater desalination equipment.",
      },
      {
        question: "What tests are performed on Inconel 625 plates?",
        answer:
          "Inconel 625 plates undergo chemical analysis, mechanical testing, ultrasonic inspection, intergranular corrosion testing per ASTM A262, and surface examination to ensure quality and performance in corrosive environments.",
      },
    ],
  });
  const projects = [
    {
      title: "Inconel 625 Plate",
      img: "/inconel-plate/inconel-plate-supplier.jpg",
    },
    {
      title: "Inconel 625 Sheet",
      img: "/inconel-plate/inconel-sheet-supplier.jpg",
    },
    {
      title: "Inconel 625 Coil",
      img: "/inconel-plate/inconel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel 625 Plates",
    paragraph1:
      "Starlight Tubes supplies high-performance Inconel 625 plates (UNS N06625) designed for exceptional corrosion resistance and high strength in extreme environments. Inconel 625 plates provide outstanding resistance to pitting, crevice corrosion, intergranular attack, and stress-corrosion cracking in chloride and acidic media, making them ideal for marine engineering, chemical processing vessels, aerospace structures, and pollution control equipment requiring superior mechanical properties from cryogenic to 1800°F.",
    paragraph2:
      "We produce Inconel 625 plates in hot rolled, cold rolled, and solution-annealed conditions with various surface finishes. Each plate undergoes rigorous quality testing including chemical composition analysis, mechanical property verification, ultrasonic inspection, intergranular corrosion testing per ASTM A262, and surface examination to ensure dimensional precision and metallurgical integrity for critical corrosive applications.",
    specifications: [
      {
        label: "Grade",
        value: "Inconel 625 (UNS N06625, WERKSTOFF NR. 2.4856)",
      },
      {
        label: "Thickness Range",
        value: "3mm to 100mm, Width up to 1000mm, Length up to 4000mm",
      },
      {
        label: "Standards",
        value: "ASTM B443, ASME SB443, AMS 5599, DIN 17744, EN 10028-7",
      },
      {
        label: "Applications",
        value:
          "Marine Structures, Chemical Processing, Aerospace, FGD Systems, Seawater Desalination",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel 625 Plate Supplier",
    description:
      "Starlight Tubes provides high-performance Inconel 625 plates for marine and chemical applications. We offer cutting services with complete IGC and corrosion test reports.",
    features: [
      "Marine Grade Quality",
      "IGC Tested per ASTM A262",
      "Aerospace Approved",
      "Custom Cutting",
      "Multiple Finishes",
      "ASTM B443 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel 625 Plates"
            subtitle="High-performance plates for critical applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel 625 Plate Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel 625 Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel 625 plates manufactured to meet
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
              Explore More Inconel 625 Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              View our Inconel 625 products with superior strength and corrosion
              resistance
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

export default Inconel625Plate;
