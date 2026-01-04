import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const InconelBolts = () => {
  useSEO({
    title:
      "Inconel Bolts - Starlight Tubes | Inconel 600, 625 Fasteners | Global Suppliers",
    description:
      "Premium Inconel bolts and fasteners manufacturer. Inconel 600, 625 high temperature corrosion resistant fasteners. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "inconel bolts UAE, inconel fasteners Saudi Arabia, inconel 600 bolts Qatar, inconel 625 nuts Oman, high temperature bolts Kuwait, corrosion resistant fasteners Bahrain, inconel bolts worldwide, inconel fastener manufacturers GCC, USA steel suppliers, European steel exporters, global steel manufacturers",
    url: "https://www.starlighttubes.com/inconel-bolts",
  });
  const projects = [
    {
      title: "Inconel Bolts",
      img: "/stainless-steel-fasteners/bolts-stud-bolts-manufacturers.jpg",
    },
    {
      title: "Inconel Fasteners",
      img: "/stainless-steel-fasteners/fasteners-nuts-bolts-manufacturer-india.jpg",
    },
    {
      title: "Inconel Nuts",
      img: "/stainless-steel-fasteners/nut-nuts-manufacturers-india.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel Alloy Bolts & Fasteners",
    paragraph1:
      "Starlight Tubes supplies high-performance Inconel alloy bolts, nuts, screws, studs, and fasteners designed for extreme service conditions requiring exceptional strength retention at elevated temperatures. Our Inconel fasteners provide outstanding resistance to oxidation, corrosion, thermal fatigue, and stress-corrosion cracking, making them critical for aerospace assemblies, gas turbine installations, nuclear power plants, and high-temperature petrochemical processing equipment.",
    paragraph2:
      "We produce Inconel fasteners in fully threaded and partially threaded configurations across multiple grades, thread standards, and head styles. Each fastener is manufactured to exacting specifications and undergoes rigorous testing including dimensional inspection, hardness verification, thread gauging, and material certification to ensure reliable performance in critical bolted joint applications operating from cryogenic to 1800°F temperatures.",
    specifications: [
      {
        label: "Grades",
        value: "Inconel 600, 601, 617, 625, 718, 725, 800, 825, X-750",
      },
      {
        label: "Size Range",
        value:
          'M3 to M100, 1/4" to 4", Custom lengths available, Thread: Metric, UNC, UNF',
      },
      {
        label: "Standards",
        value: "ASTM F468, ASTM F467, DIN 931, DIN 933, ISO 4014, ASME B18.2.1",
      },
      {
        label: "Types",
        value:
          "Hex Bolts, Studs, Nuts, Socket Head Cap Screws, U-Bolts, Anchor Bolts",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel Fastener Supplier",
    description:
      "Starlight Tubes supplies high-performance Inconel fasteners for aerospace and high-temperature applications. We provide complete material certification and custom manufacturing.",
    features: [
      "Aerospace Grade",
      "High Temperature Rated",
      "Multiple Grades Stock",
      "Custom Sizes",
      "Thread Gauged",
      "ASTM F468 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel Bolts"
            subtitle="High-strength fasteners for extreme conditions"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel Bolts Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel Alloy Bolts & Fasteners
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel alloy bolts and fasteners manufactured to
            meet international standards for diverse industrial applications
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

export default InconelBolts;
