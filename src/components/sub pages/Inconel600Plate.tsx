import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Inconel600Plate = () => {
  useSEO({
    title:
      "Inconel 600 Plate - Starlight Tubes | Inconel 600 Plates | Global Suppliers",
    description:
      "Premium Inconel 600 plates manufacturer. Nickel-chromium alloy plates for furnace components and chemical processing. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "inconel 600 plate UAE, inconel 600 plates Saudi Arabia, nickel chromium plates Qatar, furnace components Oman, chemical processing plates Kuwait, high temperature plates Bahrain, inconel 600 plate worldwide, alloy plate manufacturers GCC, USA steel suppliers, European steel exporters, global steel manufacturers",
    url: "https://www.starlighttubes.com/inconel-600-plate",
  });
  const projects = [
    {
      title: "Inconel 600 Plate",
      img: "/inconel-plate/inconel-plate-supplier.jpg",
    },
    {
      title: "Inconel 600 Sheet",
      img: "/inconel-plate/inconel-sheet-supplier.jpg",
    },
    {
      title: "Inconel 600 Coil",
      img: "/inconel-plate/inconel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel 600 Plates",
    paragraph1:
      "Starlight Tubes supplies premium Inconel 600 plates (UNS N06600) specifically engineered for high-temperature applications requiring excellent resistance to oxidation and chloride-ion stress-corrosion cracking. Inconel 600 plates provide exceptional mechanical strength from cryogenic temperatures to 2000°F, making them ideal for heat treating equipment, chemical processing vessels, nuclear steam generator tubing supports, and furnace components.",
    paragraph2:
      "Our Inconel 600 plates are available in hot rolled, cold rolled, and solution-annealed conditions with various surface finishes. Each plate undergoes comprehensive quality control including chemical analysis, mechanical testing, ultrasonic inspection, and surface examination to ensure compliance with ASTM specifications and superior performance in corrosive high-temperature environments.",
    specifications: [
      {
        label: "Grade",
        value: "Inconel 600 (UNS N06600, WERKSTOFF NR. 2.4816)",
      },
      {
        label: "Thickness Range",
        value: "3mm to 100mm, Width up to 1000mm, Length up to 4000mm",
      },
      {
        label: "Standards",
        value: "ASTM B168, ASME SB168, AMS 5540, DIN 17744, EN 10028-7",
      },
      {
        label: "Applications",
        value:
          "Heat Treatment Furnaces, Chemical Processing, Nuclear Reactors, Thermal Oxidizers",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel 600 Plate Supplier",
    description:
      "Starlight Tubes provides premium Inconel 600 plates for high-temperature oxidation-resistant applications. We offer multiple finishes with complete material certification.",
    features: [
      "High Temperature Grade",
      "Solution Annealed",
      "Nuclear Approved",
      "Multiple Finishes",
      "Custom Cutting",
      "ASTM B168 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel 600 Plates"
            subtitle="Premium Inconel 600 grade plates"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel 600 Plate Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel 600 Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel 600 plates manufactured to meet
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
              Explore More Inconel 600 Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Explore Inconel 600 products with excellent oxidation resistance
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

export default Inconel600Plate;
