import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ASTMA333Pipe = () => {
  useSEO({
    title:
      "ASTM A333 Pipe Manufacturer & Exporter | Low Temperature Pipes | Starlight Tubes",
    description:
      "Leading ASTM A333 low temperature pipe manufacturer and exporter. Premium Grade 6 & Grade 9 cryogenic pipes for LNG and refrigeration. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "ASTM A333 pipe manufacturer, ASTM A333 pipe exporter, low temperature pipe supplier, cryogenic pipe manufacturer, Grade 6 pipe exporter, Grade 9 pipe manufacturer, LNG pipe supplier, carbon steel pipe factory, industrial pipe exporter, ASTM A333 stockist, SA333 pipe manufacturer",
    url: "https://www.starlighttubes.com/astm-a333-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
      {
        name: "ASTM A333 Pipe",
        url: "https://www.starlighttubes.com/astm-a333-pipe",
      },
    ],
    productSchema: {
      name: "ASTM A333 Low Temperature Pipe",
      description:
        "Premium ASTM A333 low temperature carbon steel pipes for cryogenic service, LNG plants, and refrigeration systems with Charpy impact testing.",
      category: "Carbon Steel Pipes",
      material:
        "Low Temperature Carbon Steel (ASTM A333 Grade 1, 3, 4, 6, 7, 8, 9, 10, 11)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "ASTM A333 Low Temperature Pipe - Cryogenic Service",
      summary:
        "Starlight Tubes manufactures ASTM A333 low temperature pipes for cryogenic service down to -150°F. Grade 6 most popular for LNG plants, refrigeration systems, and cold climate pipelines.",
    },
    entityType: "Product",
    relatedEntities: [
      "ASTM A333",
      "ASME SA333",
      "Low Temperature Pipe",
      "Cryogenic Pipe",
      "LNG Pipeline",
      "Grade 6",
      "Charpy Impact",
      "Refrigeration",
    ],
    faqSchema: [
      {
        question: "What is ASTM A333 Grade 6 pipe used for?",
        answer:
          "ASTM A333 Grade 6 pipes are used for low-temperature service applications including LNG plants, cryogenic systems, refrigeration facilities, and cold climate pipelines operating down to -50°F (-46°C).",
      },
      {
        question: "Why is Charpy impact testing required for ASTM A333 pipes?",
        answer:
          "Charpy V-notch impact testing is mandatory to verify that the pipe maintains adequate toughness and ductility at specified low temperatures, preventing brittle fracture in cryogenic service conditions.",
      },
    ],
  });
  const projects = [
    {
      title: "A333 Grade 6 Pipe",
      img: "/carbon-steel-pipe/carbon-steel-pipe.jpg",
    },
    {
      title: "A333 Low Temp Pipe",
      img: "/carbon-steel-pipe/steel-welded-pipe.jpg",
    },
    {
      title: "A333 Grade 6 Seamless Pipe",
      img: "/carbon-steel-pipe/steel-seamless-pipe.jpg",
    },
  ];

  const ctaData = {
    title: "Premium ASTM A333 Low Temperature Pipes",
    paragraph1:
      "Starlight Tubes supplies premium ASTM A333 seamless and welded steel pipes specifically designed for low-temperature service applications. ASTM A333 pipes are engineered to maintain excellent toughness and ductility at temperatures as low as -150°F, making them essential for cryogenic systems, LNG facilities, refrigeration plants, and cold climate pipeline installations where impact resistance at sub-zero temperatures is critical.",
    paragraph2:
      "Our ASTM A333 pipes are available in multiple grades (Grade 1, 3, 4, 6, 7, 8, 9, 10, 11) with normalized or quenched and tempered heat treatment for optimal low-temperature performance. Each pipe undergoes mandatory Charpy V-notch impact testing at specified temperatures, along with hydrostatic testing and non-destructive examination to ensure reliable service in cryogenic environments.",
    specifications: [
      {
        label: "Grades",
        value: "ASTM A333 Grade 1, 3, 4, 6, 7, 8, 9, 10, 11",
      },
      {
        label: "Size Range",
        value: 'NB 1/2" to 24", Schedule 40 to XXS, Length up to 12m',
      },
      {
        label: "Standards",
        value: "ASTM A333, ASME SA333, EN 10216-4, JIS G3460, DIN 17173",
      },
      {
        label: "Applications",
        value:
          "LNG Plants, Cryogenic Service, Refrigeration, Cold Climate Pipelines, Chemical Processing",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted ASTM A333 Pipe Supplier",
    description:
      "Starlight Tubes supplies certified ASTM A333 low-temperature pipes for cryogenic applications. We provide impact tested products for LNG and refrigeration systems.",
    features: [
      "Low Temperature Grade",
      "Charpy Impact Tested",
      "LNG Plant Approved",
      "Multiple Grades Stock",
      "Cryogenic Service",
      "ASME SA333 Certified",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="ASTM A333 Pipes"
            subtitle="Seamless pipes for low-temperature service"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* ASTM A333 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            ASTM A333 Low Temperature Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality ASTM A333 seamless pipes engineered for cryogenic
            and low-temperature service applications
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
              Explore More ASTM Pipes
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Explore our ASTM certified pipes for pressure and temperature
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

export default ASTMA333Pipe;
