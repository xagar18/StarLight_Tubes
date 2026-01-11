import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const InconelRoundBar = () => {
  useSEO({
    title:
      "Inconel Round Bar Manufacturer & Exporter | Inconel 600/625/718 Bars | Starlight Tubes",
    description:
      "Leading Inconel round bar manufacturer and exporter in India. Premium Inconel 600, 625, 718 round bars for aerospace, marine & gas turbine applications. ASTM B166 certified. Global supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "inconel round bar manufacturer, inconel bar exporter, inconel 600 round bar supplier, inconel 625 bar manufacturer, inconel 718 bar exporter India, aerospace inconel bar manufacturer, marine grade inconel bar supplier, ASTM B166 inconel bar, inconel round bar UAE, inconel bar Saudi Arabia, high temperature alloy bar manufacturer",
    url: "https://www.starlighttubes.com/inconel-round-bar",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Inconel", url: "https://www.starlighttubes.com/inconel" },
      {
        name: "Inconel Round Bar",
        url: "https://www.starlighttubes.com/inconel-round-bar",
      },
    ],
    productSchema: {
      name: "Inconel Alloy Round Bar",
      description:
        "Premium quality Inconel alloy round bars (600, 625, 718 grades) manufactured to ASTM B166 standards for aerospace, marine, and high-temperature industrial applications.",
      category: "Inconel Alloy Products",
      material: "Inconel 600, 601, 617, 625, 718, 725, X-750",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Inconel Round Bar - High Performance Nickel Alloy Bars",
      summary:
        "Starlight Tubes supplies Inconel round bars in grades 600, 625, and 718 with exceptional high-temperature strength for aerospace fasteners, gas turbine components, and nuclear applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Inconel Round Bar",
      "Inconel 718",
      "Inconel 625",
      "Aerospace Fasteners",
      "Gas Turbine",
      "ASTM B166",
      "High Temperature Bar",
      "Centerless Ground",
    ],
    faqSchema: [
      {
        question: "What is Inconel 718 round bar used for?",
        answer:
          "Inconel 718 round bars are primarily used for aerospace fasteners, gas turbine discs, rocket motor components, and nuclear reactor parts due to their exceptional strength up to 1300°F and resistance to creep deformation.",
      },
      {
        question: "What finishes are available for Inconel round bars?",
        answer:
          "Inconel round bars are available in hot rolled, cold drawn, centerless ground, peeled, black, and bright finishes to meet various machining and application requirements.",
      },
    ],
  });
  const projects = [
    {
      title: "Inconel Round Bar",
      img: "/stainless-steel-round-bar/round-bar.jpg",
    },
    {
      title: "Inconel Hex Bar",
      img: "/stainless-steel-round-bar/hex-bar.jpg",
    },
    {
      title: "Inconel Square Bar",
      img: "/stainless-steel-round-bar/square-bar.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel Alloy Round Bars",
    paragraph1:
      "Starlight Tubes manufactures and supplies high-quality Inconel alloy round bars engineered for superior performance in extreme temperature and corrosive environments. Our Inconel round bars exhibit exceptional resistance to oxidation, corrosion, and creep deformation at elevated temperatures, making them indispensable for aerospace fasteners, gas turbine components, nuclear reactor internals, and chemical processing equipment requiring outstanding mechanical properties above 1200°F.",
    paragraph2:
      "We produce Inconel round bars in hot rolled, cold drawn, centerless ground, and peeled finishes across multiple grades. Each bar undergoes comprehensive quality testing including ultrasonic inspection, dimensional verification, hardness testing, and metallurgical examination to ensure precise tolerances and material consistency for critical machining and fabrication applications.",
    specifications: [
      {
        label: "Grades",
        value: "Inconel 600, 601, 617, 625, 686, 718, 725, 800, 825, X-750",
      },
      {
        label: "Size Range",
        value:
          "6mm to 100mm diameter, Length up to 6 meters, Custom sizes available",
      },
      {
        label: "Standards",
        value:
          "ASTM B166, ASTM B446, ASTM B564, ASME SB166, DIN 17744, EN 10272",
      },
      {
        label: "Finishes",
        value:
          "Hot Rolled, Cold Drawn, Centerless Ground, Peeled, Black, Bright",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel Round Bar Supplier",
    description:
      "Starlight Tubes provides precision Inconel round bars for machining and fabrication applications. We offer multiple grades and finishes with complete material certification.",
    features: [
      "Aerospace Approved",
      "Centerless Ground",
      "Custom Diameters",
      "Multiple Grades Stock",
      "Cut-to-Length Service",
      "Metallurgical Reports",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel Round Bars"
            subtitle="Precision round bars for aerospace & industrial use"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel Round Bar Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel Alloy Round Bars
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel alloy round bars manufactured to meet
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

export default InconelRoundBar;
