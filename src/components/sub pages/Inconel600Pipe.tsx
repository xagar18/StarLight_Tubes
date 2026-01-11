import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Inconel600Pipe = () => {
  useSEO({
    title:
      "Inconel 600 Pipe Manufacturer - UNS N06600 ASTM B167 | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel 600 pipe manufacturer & global exporter. UNS N06600 seamless & welded pipes. High temperature oxidation resistant nickel-chromium alloy. ASTM B167/B516 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "Inconel 600 pipe manufacturer, UNS N06600 pipe exporter, ASTM B167 supplier, seamless Inconel pipe manufacturer, nickel chromium alloy pipe, high temperature pipe manufacturer, Inconel 600 pipe UAE, Inconel pipes Saudi Arabia, alloy 600 pipe manufacturer India, oxidation resistant pipe",
    url: "https://www.starlighttubes.com/inconel-600-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Inconel", url: "https://www.starlighttubes.com/inconel" },
      {
        name: "Inconel 600 Pipe",
        url: "https://www.starlighttubes.com/inconel-600-pipe",
      },
    ],
    productSchema: {
      name: "Inconel 600 Pipe",
      description:
        "Premium Inconel 600 pipes (UNS N06600) in seamless and welded configurations. ASTM B167/B516 certified nickel-chromium alloy pipes for high temperature applications up to 2150°F with excellent oxidation resistance.",
      category: "Inconel Alloy Products",
      material: "Inconel 600 (UNS N06600, WERKSTOFF NR. 2.4816)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Inconel 600 Pipe - High Temperature Nickel Chromium Alloy",
      summary:
        "Starlight Tubes manufactures Inconel 600 pipes with outstanding oxidation resistance up to 2150°F for heat treating fixtures, nuclear reactors, and chemical processing plants.",
    },
    entityType: "Product",
    relatedEntities: [
      "Inconel 600",
      "UNS N06600",
      "ASTM B167",
      "Nickel Chromium Pipe",
      "High Temperature Pipe",
      "Nuclear Grade",
      "Heat Treatment",
      "Chemical Processing",
    ],
    faqSchema: [
      {
        question: "What temperature can Inconel 600 pipe withstand?",
        answer:
          "Inconel 600 pipes maintain excellent mechanical properties up to 2150°F (1177°C) and provide outstanding resistance to oxidation, carburization, and chloride-ion stress-corrosion cracking at elevated temperatures.",
      },
      {
        question: "Is Inconel 600 suitable for nuclear applications?",
        answer:
          "Yes, Inconel 600 is widely used in nuclear steam generators and reactor components due to its excellent resistance to corrosion, high-temperature strength, and compatibility with nuclear environments.",
      },
    ],
  });
  const projects = [
    {
      title: "Inconel 600 Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier1.jpg",
    },
    {
      title: "Alloy 600 Welded Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier2.jpg",
    },
    {
      title: "Inconel 600 Seamless Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel 600 Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality Inconel 600 pipes (UNS N06600) designed for exceptional performance in high-temperature corrosive environments. Inconel 600 pipes offer outstanding resistance to oxidation, carburization, chloride-ion stress-corrosion cracking, and sulfur attack at temperatures up to 2150°F, making them essential for heat treating fixtures, chemical processing plants, nuclear reactor components, and high-temperature furnace applications.",
    paragraph2:
      "We produce Inconel 600 pipes in seamless and welded configurations with hot finished and cold drawn options. Each pipe is manufactured under stringent quality protocols including solution annealing at 1900-2000°F, ultrasonic inspection, PMI verification, hydrostatic testing, and mechanical property validation to ensure dimensional accuracy and metallurgical integrity for critical high-temperature service.",
    specifications: [
      {
        label: "Grade",
        value: "Inconel 600 (UNS N06600, WERKSTOFF NR. 2.4816)",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 10", Schedule 5S to XXS, Length up to 6 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM B167, ASTM B516, ASME SB167, AMS 5540, DIN 17458, EN 10216-5",
      },
      {
        label: "Applications",
        value:
          "Thermal Processing, Nuclear Steam Generators, Chemical Plants, Heat Exchangers",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel 600 Pipe Supplier",
    description:
      "Starlight Tubes specializes in Inconel 600 pipes for high-temperature oxidation-resistant applications. We provide solution-annealed products with complete metallurgical certification.",
    features: [
      "Solution Annealed",
      "Nuclear Grade Available",
      "High Temperature Rated",
      "Oxidation Resistant",
      "AMS Specifications",
      "Expert Technical Support",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel 600 Pipes"
            subtitle="Excellent oxidation resistance at high temperatures"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel 600 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel 600 Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel 600 pipes manufactured to meet international
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

export default Inconel600Pipe;
