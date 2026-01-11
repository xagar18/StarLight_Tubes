import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const API5LX52Pipe = () => {
  useSEO({
    title:
      "API 5L X52 Pipe Manufacturer & Exporter | High Yield Line Pipes | Starlight Tubes",
    description:
      "Leading API 5L X52 line pipe manufacturer and exporter. Premium PSL1 & PSL2 certified high yield pipes for oil and gas transmission. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "API 5L X52 pipe manufacturer, API 5L X52 pipe exporter, high yield pipe supplier, oil pipeline pipe manufacturer, gas transmission pipe exporter, PSL1 pipe manufacturer, PSL2 pipe supplier, L360 pipe factory, API certified pipe exporter, X52 pipe stockist, seamless line pipe manufacturer",
    url: "https://www.starlighttubes.com/api-5l-x52-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
      {
        name: "API 5L X52 Pipe",
        url: "https://www.starlighttubes.com/api-5l-x52-pipe",
      },
    ],
    productSchema: {
      name: "API 5L X52 Line Pipe",
      description:
        "Premium API 5L X52 line pipes for medium to high-pressure oil and gas transmission with 360 MPa minimum yield strength.",
      category: "Carbon Steel Pipes",
      material: "Carbon Steel (API 5L X52 / L360 PSL1 & PSL2)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "API 5L X52 Pipe - High Yield Line Pipe Manufacturer",
      summary:
        "Starlight Tubes manufactures API 5L X52 line pipes with 360 MPa yield strength for oil and gas transmission. Seamless and welded configurations with PSL1 and PSL2 certification.",
    },
    entityType: "Product",
    relatedEntities: [
      "API 5L X52",
      "L360",
      "Line Pipe",
      "Oil Gas Transmission",
      "High Yield Pipe",
      "Carbon Steel",
      "PSL2",
      "DNV Approved",
    ],
    faqSchema: [
      {
        question: "What is API 5L X52 pipe used for?",
        answer:
          "API 5L X52 pipes are used for medium to high-pressure oil and gas transmission pipelines. With 360 MPa yield strength, they are suitable for natural gas distribution, crude oil transmission, and gathering line applications.",
      },
      {
        question: "What is the difference between API 5L X42 and X52?",
        answer:
          "X52 has higher yield strength (360 MPa vs 290 MPa) and tensile strength (460 MPa vs 415 MPa) compared to X42. X52 is specified for higher pressure pipeline systems requiring greater mechanical properties.",
      },
    ],
  });
  const projects = [
    {
      title: "API 5L X52 ERW Pipe",
      img: "/apl-5L/api-5l-pipe-1.jpg",
    },
    {
      title: "API 5L X52 Seamless Pipes",
      img: "/apl-5L/api-5l-pipe-2.jpg",
    },
    {
      title: "L360 Grade Pipe",
      img: "/apl-5L/api-5l-pipe-3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium API 5L X52 Line Pipes",
    paragraph1:
      "Starlight Tubes  supplies high-quality API 5L X52 line pipes designed for medium to high-pressure oil and gas pipeline systems. API 5L X52 pipes provide minimum yield strength of 52,200 psi (360 MPa) with excellent combination of strength, toughness, and weldability, making them suitable for natural gas distribution, crude oil transmission, and gathering line applications in onshore and offshore environments.",
    paragraph2:
      "Our API 5L X52 pipes are manufactured through hot rolling or TMCP processes in seamless and welded configurations. Each pipe undergoes rigorous quality testing including tensile testing, Charpy impact testing, hydrostatic testing, ultrasonic inspection, and radiographic examination to ensure compliance with API 5L PSL1 and PSL2 requirements for reliable pipeline service.",
    specifications: [
      {
        label: "Grade",
        value:
          "API 5L X52 (PSL1 & PSL2), Yield Strength: 360 MPa min, Tensile: 460 MPa min",
      },
      {
        label: "Size Range",
        value: 'NB 2" to 48", Wall Thickness up to 40mm, Length up to 18m',
      },
      {
        label: "Standards",
        value: "API 5L, ISO 3183, EN 10208-2, DNV-OS-F101, CSA Z245.1",
      },
      {
        label: "Applications",
        value:
          "Gas Distribution, Oil Transmission, Gathering Lines, Process Piping, Plant Piping",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted API 5L X52 Pipe Supplier",
    description:
      "Starlight Tubes supplies API 5L X52 line pipes for medium to high-pressure applications. We provide PSL1 and PSL2 certified products with comprehensive quality documentation.",
    features: [
      "API 5L PSL1/PSL2",
      "360 MPa Yield Strength",
      "Impact Tested",
      "Seamless & SAW",
      "DNV Approved",
      "Fast Track Delivery",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="API 5L X52 Pipes"
            subtitle="Premium pipeline pipes for oil & gas"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* API 5L X52 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            API 5L X52 Line Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality API 5L X52 line pipes for medium to high-pressure
            oil and gas transmission applications
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
              Explore More API 5L Pipes
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Discover our API 5L certified pipes for oil and gas pipeline
              applications
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

export default API5LX52Pipe;
