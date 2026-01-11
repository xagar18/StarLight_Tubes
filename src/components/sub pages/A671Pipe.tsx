import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const A671Pipe = () => {
  useSEO({
    title:
      "ASTM A671 Pipe Manufacturer & Exporter | EFW Pipes | Starlight Tubes",
    description:
      "Leading ASTM A671 electric fusion welded pipe manufacturer and exporter. Premium EFW pipes for power plants and pressure vessels. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "ASTM A671 pipe manufacturer, ASTM A671 pipe exporter, EFW pipe supplier, electric fusion welded pipe manufacturer, power plant pipe exporter, pressure vessel pipe manufacturer, DSAW pipe supplier, carbon steel pipe factory, SA671 pipe exporter, A671 CC60 manufacturer, A671 CC65 stockist",
    url: "https://www.starlighttubes.com/astm-a671-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
      {
        name: "ASTM A671 Pipe",
        url: "https://www.starlighttubes.com/astm-a671-pipe",
      },
    ],
    productSchema: {
      name: "ASTM A671 Electric Fusion Welded Pipe",
      description:
        "Premium ASTM A671 EFW pipes for atmospheric and low temperature service applications in power plants, refineries, and chemical processing facilities.",
      category: "Carbon Steel Pipes",
      material:
        "Carbon Steel (ASTM A671 CC60, CC65, CC70, CE55, CE60, CE65, CF66)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "ASTM A671 EFW Pipe - Power Plant Grade",
      summary:
        "Starlight Tubes manufactures ASTM A671 electric fusion welded pipes for power plants and refineries. 100% radiographic tested EFW pipes in CC60, CC65, CC70 grades for pressure piping applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "ASTM A671",
      "ASME SA671",
      "EFW Pipe",
      "DSAW Pipe",
      "Power Plant",
      "Pressure Piping",
      "Refinery",
      "Radiographic Testing",
    ],
    faqSchema: [
      {
        question: "What is ASTM A671 pipe used for?",
        answer:
          "ASTM A671 EFW pipes are used for atmospheric and lower temperature service in power plants, refineries, and chemical processing. They are fabricated from pressure vessel quality plates with double submerged arc welding.",
      },
      {
        question: "What does CC65 mean in ASTM A671 CC65 pipe?",
        answer:
          "CC65 indicates the pipe class where 'C' denotes 100% radiographic examination of weld seams, and '65' refers to the plate material specification (A516 Grade 65). Higher numbers indicate higher tensile strength.",
      },
    ],
  });
  const projects = [
    {
      title: "ASTM A671 Pipe",
      img: "/carbon-steel-pipe/carbon-steel-pipe.jpg",
    },
    {
      title: "ASTM A671 Welded Pipe",
      img: "/carbon-steel-pipe/steel-welded-pipe.jpg",
    },
    {
      title: "A671 EFW Pipe",
      img: "/carbon-steel-pipe/steel-seamless-pipe.jpg",
    },
  ];

  const ctaData = {
    title: "Premium ASTM A671 EFW Pipes",
    paragraph1:
      "Starlight Tubes supplies premium ASTM A671 Electric Fusion Welded (EFW) steel pipes designed for atmospheric and lower temperature service applications. ASTM A671 pipes are fabricated from pressure vessel quality steel plates with double submerged arc welding (DSAW) and are widely used in power plants, refineries, chemical facilities, and pressure piping systems where high integrity welded joints are essential.",
    paragraph2:
      "Our ASTM A671 pipes are available in multiple grades and classes including CC60, CC65, CC70, CE55, CE60, CE65, and CF66 to meet various pressure and temperature requirements. Each pipe undergoes 100% radiographic examination of weld seams, hydrostatic testing, and comprehensive mechanical testing to ensure compliance with ASME specifications for critical pressure service applications.",
    specifications: [
      {
        label: "Grades",
        value: "ASTM A671 CC60, CC65, CC70, CE55, CE60, CE65, CF66, CK75",
      },
      {
        label: "Size Range",
        value: 'NB 16" to 72", Wall Thickness 6mm to 65mm, Length up to 12m',
      },
      {
        label: "Standards",
        value: "ASTM A671, ASME SA671, EN 10217-5, EN 10217-6",
      },
      {
        label: "Applications",
        value:
          "Power Plants, Refineries, Pressure Piping, Chemical Processing, Low Temperature Service",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted ASTM A671 Pipe Supplier",
    description:
      "Starlight Tubes supplies certified ASTM A671 EFW pipes for power generation and pressure vessel applications. We ensure 100% radiographic inspection and complete material documentation.",
    features: [
      "100% Radiographic Tested",
      "ASME SA671 Compliant",
      "Stress Relieved",
      "Power Plant Approved",
      "Custom Classes Available",
      "Complete MTCs Provided",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="ASTM A671 Pipes"
            subtitle="Electric fusion welded pipes for pressure service"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* A671 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            ASTM A671 EFW Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality ASTM A671 Electric Fusion Welded pipes for
            atmospheric and low temperature service applications
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
              Explore More EFW Pipes
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              View our Electric Fusion Welded pipes for pressure vessel
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

export default A671Pipe;
