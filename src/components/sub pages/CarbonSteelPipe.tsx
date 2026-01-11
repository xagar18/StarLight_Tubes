import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CarbonSteelPipe = () => {
  useSEO({
    title:
      "Carbon Steel Pipe Manufacturer - ASTM A106, A53, API 5L Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading carbon steel pipe manufacturer and exporter. ASTM A106 Grade B/C, ASTM A53 Grade B, API 5L Grade B/X42/X52/X65 pipes. Seamless, ERW, welded pipes for oil gas, petrochemical, water pipeline applications. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "carbon steel pipe manufacturer, carbon steel pipe exporter, ASTM A106 pipe manufacturer, ASTM A53 pipe manufacturer, API 5L pipe manufacturer, seamless carbon steel pipe, ERW carbon steel pipe, welded carbon steel pipe, carbon steel pipe India, carbon steel pipe UAE, carbon steel pipe Saudi Arabia, oil gas pipeline pipe, petrochemical pipe manufacturer, MS pipe manufacturer",
    url: "https://www.starlighttubes.com/carbon-steel-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
      {
        name: "Carbon Steel Pipe",
        url: "https://www.starlighttubes.com/carbon-steel-pipe",
      },
    ],
    productSchema: {
      name: "Carbon Steel Pipes - ASTM A106, ASTM A53, API 5L",
      description:
        "High-quality carbon steel pipes including ASTM A106, ASTM A53, API 5L grades for oil & gas, petrochemical, and industrial applications. Seamless and welded configurations available.",
      category: "Carbon Steel Pipes",
      material: "Carbon Steel",
      offers: {
        priceCurrency: "USD",
        lowPrice: "15",
        highPrice: "3000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Carbon Steel Pipe Manufacturer - ASTM A106, A53, API 5L Pipes",
      summary:
        "Starlight Tubes manufactures premium carbon steel pipes including ASTM A106, ASTM A53, and API 5L grades. Seamless and welded configurations available for oil gas, petrochemical, and water pipeline applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Carbon Steel",
      "ASTM A106",
      "ASTM A53",
      "API 5L",
      "Seamless Pipe",
      "ERW Pipe",
      "Oil Gas Pipeline",
      "Petrochemical Piping",
    ],
    faqSchema: [
      {
        question: "What are the main types of carbon steel pipes?",
        answer:
          "Carbon steel pipes are available in seamless, ERW (Electric Resistance Welded), and welded configurations. Common grades include ASTM A106 for high temperature, ASTM A53 for general purpose, and API 5L for oil and gas pipelines.",
      },
      {
        question:
          "What is the difference between seamless and welded carbon steel pipes?",
        answer:
          "Seamless pipes have no weld seam and offer superior strength for high-pressure applications. Welded pipes (ERW, SAW) are more cost-effective and suitable for moderate pressure and structural applications.",
      },
    ],
  });
  const projects = [
    {
      title: "Carbon Steel Pipe",
      img: "/carbon-steel-pipe/carbon-steel-pipe.jpg",
    },
    {
      title: "Carbon Steel Welded Pipe",
      img: "/carbon-steel-pipe/steel-welded-pipe.jpg",
    },
    {
      title: "Carbon Steel Seamless Pipe",
      img: "/carbon-steel-pipe/steel-seamless-pipe.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Carbon Steel Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality carbon steel pipes engineered for structural, mechanical, and pressure applications across diverse industries. Our carbon steel pipes offer excellent strength-to-weight ratio, superior weldability, and cost-effective solutions for oil & gas transmission, water distribution, construction, and industrial piping systems requiring reliable performance under moderate temperature and pressure conditions.",
    paragraph2:
      "We produce carbon steel pipes in seamless and welded configurations across multiple grades including low carbon, medium carbon, and high carbon variants. Each pipe undergoes comprehensive quality control including hydrostatic testing, ultrasonic inspection, dimensional verification, and mechanical property testing to ensure compliance with ASTM, API, and EN standards for critical pipeline and structural applications.",
    specifications: [
      {
        label: "Grades",
        value:
          "ASTM A106 Gr.B/C, ASTM A53 Gr.B, API 5L Gr.B to X70, IS 1239, IS 3589",
      },
      {
        label: "Size Range",
        value: 'NB 1/2" to 48", Schedule 20 to XXS, Length up to 6 meters',
      },
      {
        label: "Standards",
        value: "ASTM A106, ASTM A53, API 5L, ASTM A333, EN 10216-1, DIN 2448",
      },
      {
        label: "Applications",
        value:
          "Oil & Gas, Water Pipelines, Structural, Boiler Tubes, Process Piping",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Carbon Steel Pipe Partner",
    description:
      "Starlight Tubes offers reliable carbon steel pipes for structural and pipeline applications. We ensure quality products with complete API and ASTM certifications for your projects.",
    features: [
      "API 5L Certified Products",
      "ASTM Standards Compliant",
      "Large Stock Availability",
      "Competitive Market Pricing",
      "Third Party Inspection",
      "Quick Turnaround Time",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="Carbon Steel Pipes"
            subtitle="Seamless & welded pipes for industrial piping"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Carbon Steel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Carbon Steel Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality carbon steel pipes manufactured to meet
            international standards for diverse industrial applications
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16 px-4">
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
              Explore More Carbon Steel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of carbon steel pipes for industrial
              piping systems
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

export default CarbonSteelPipe;
