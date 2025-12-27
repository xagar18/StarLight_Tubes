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
      "Inconel 625 Plate - Starlight Tubes | Inconel 625 Plates | Middle East Suppliers",
    description:
      "Expert Inconel 625 plates manufacturer. Superior corrosion resistance, high strength. Marine, aerospace applications. Various thicknesses available. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "inconel 625 plate UAE, inconel 625 plates Saudi Arabia, superior corrosion plates Qatar, high strength plates Oman, marine plates Kuwait, aerospace plates Bahrain, inconel 625 plate Middle East, alloy plate manufacturers GCC",
    url: "https://www.starlighttubes.com/inconel-625-plate",
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
