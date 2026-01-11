import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Inconel625Pipe = () => {
  useSEO({
    title:
      "Inconel 625 Pipe Manufacturer - UNS N06625 Superalloy Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel 625 pipe manufacturer and exporter. Superior corrosion and oxidation resistant alloy pipes for aerospace, marine, chemical processing applications. ASTM B444, B705 standards. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
    keywords:
      "Inconel 625 pipe manufacturer, UNS N06625 pipe, Inconel 625 seamless pipe, Inconel 625 welded pipe, superalloy pipe, aerospace pipe manufacturer, marine pipe, chemical processing pipe, Inconel 625 exporter, Inconel 625 pipe India",
    url: "https://www.starlighttubes.com/inconel-625-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Inconel", url: "https://www.starlighttubes.com/inconel" },
      {
        name: "Inconel 625 Pipe",
        url: "https://www.starlighttubes.com/inconel-625-pipe",
      },
    ],
    productSchema: {
      name: "Inconel 625 Pipes - UNS N06625 Superalloy",
      description:
        "Premium Inconel 625 superalloy pipes with superior corrosion and oxidation resistance for aerospace, marine, and chemical processing applications.",
      category: "Inconel 625 Pipes",
      material: "Inconel 625 Superalloy",
      offers: {
        priceCurrency: "USD",
        lowPrice: "150",
        highPrice: "10000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Inconel 625 Pipe - High Temperature Nickel Alloy",
      summary:
        "Starlight Tubes supplies Inconel 625 pipes with excellent high temperature and corrosion resistance for aerospace, marine, and chemical industries.",
    },
    entityType: "Product",
    relatedEntities: [
      "Inconel 625",
      "Nickel Alloy",
      "High Temperature Alloy",
      "Aerospace Materials",
      "Marine Grade",
      "Chemical Processing",
      "NACE MR0175",
      "Offshore Oil Gas",
    ],
    faqSchema: [
      {
        question: "What is Inconel 625 used for?",
        answer:
          "Inconel 625 is used in aerospace, marine, chemical processing, and nuclear applications due to its excellent strength and corrosion resistance at high temperatures.",
      },
      {
        question: "What temperature can Inconel 625 withstand?",
        answer:
          "Inconel 625 maintains excellent mechanical properties up to 982°C (1800°F) and has good oxidation resistance.",
      },
    ],
  });
  const projects = [
    {
      title: "Inconel 625 Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier1.jpg",
    },
    {
      title: "Alloy 625 Welded Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier2.jpg",
    },
    {
      title: "Inconel 625 Seamless Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel 625 Pipes",
    paragraph1:
      "Starlight Tubes supplies premium Inconel 625 pipes (UNS N06625) renowned for exceptional corrosion resistance in aggressive acidic and marine environments. Inconel 625 pipes offer superior resistance to pitting, crevice corrosion, intergranular corrosion, and stress-corrosion cracking, combined with excellent mechanical properties from cryogenic to 1800°F temperatures, making them indispensable for offshore oil & gas production, seawater desalination, chemical processing, and pollution control equipment.",
    paragraph2:
      "Our Inconel 625 pipes are manufactured in seamless and welded configurations with solution annealing and controlled microstructure for optimal corrosion resistance. Each pipe undergoes comprehensive testing including ultrasonic inspection, PMI verification, hydrostatic testing, intergranular corrosion testing per ASTM A262, and mechanical property validation to ensure superior performance in chloride-bearing and acidic service environments.",
    specifications: [
      {
        label: "Grade",
        value: "Inconel 625 (UNS N06625, WERKSTOFF NR. 2.4856)",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 12", Schedule 5S to XXS, Length up to 6 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM B444, ASTM B704, ASME SB444, AMS 5666, DIN 17458, EN 10216-5",
      },
      {
        label: "Applications",
        value:
          "Offshore Oil & Gas, Seawater Systems, Chemical Processing, Pollution Control, FGD Systems",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel 625 Pipe Supplier",
    description:
      "Starlight Tubes specializes in Inconel 625 pipes for corrosive marine and chemical environments. We provide NACE compliant products with complete corrosion testing documentation.",
    features: [
      "Superior Corrosion Resistance",
      "NACE MR0175 Compliant",
      "Offshore Approved",
      "IGC Tested",
      "Seawater Grade",
      "Complete Certification",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel 625 Pipes"
            subtitle="Superior strength & corrosion resistance"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel 625 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel 625 Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel 625 pipes manufactured to meet international
            standards for diverse industrial applications
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

export default Inconel625Pipe;
