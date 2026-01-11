import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const API5LX65Pipe = () => {
  useSEO({
    title:
      "API 5L X65 Pipe Manufacturer & Exporter | High Strength Line Pipes | Starlight Tubes",
    description:
      "Leading API 5L X65 high-strength line pipe manufacturer and exporter. Premium PSL2 certified pipes for offshore and deepwater applications. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "API 5L X65 pipe manufacturer, API 5L X65 pipe exporter, high strength pipe supplier, offshore pipeline pipe manufacturer, deepwater pipe exporter, PSL2 pipe manufacturer, sour service pipe supplier, L450 pipe factory, TMCP pipe exporter, X65 pipe stockist, HIC tested pipe manufacturer",
    url: "https://www.starlighttubes.com/api-5l-x65-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
      {
        name: "API 5L X65 Pipe",
        url: "https://www.starlighttubes.com/api-5l-x65-pipe",
      },
    ],
    productSchema: {
      name: "API 5L X65 High-Strength Line Pipe",
      description:
        "Premium API 5L X65 high-strength line pipes for demanding oil and gas applications with 450 MPa minimum yield strength and HIC/SSC testing for sour service.",
      category: "Carbon Steel Pipes",
      material: "High Strength Carbon Steel (API 5L X65 / L450 PSL2)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "API 5L X65 Pipe - High Strength Offshore Line Pipe",
      summary:
        "Starlight Tubes manufactures API 5L X65 high-strength line pipes with 450 MPa yield strength for offshore deepwater and sour service applications. PSL2 certified with HIC/SSC testing.",
    },
    entityType: "Product",
    relatedEntities: [
      "API 5L X65",
      "L450",
      "High Strength Pipe",
      "Offshore Pipeline",
      "Sour Service",
      "HIC SSC Testing",
      "TMCP Process",
      "DNV-OS-F101",
    ],
    faqSchema: [
      {
        question: "What is API 5L X65 pipe used for?",
        answer:
          "API 5L X65 pipes are used for high-pressure natural gas pipelines, offshore deepwater installations, and sour service applications. With 450 MPa yield strength, they are ideal for demanding long-distance transmission systems.",
      },
      {
        question: "What is HIC and SSC testing for API 5L X65 pipes?",
        answer:
          "HIC (Hydrogen Induced Cracking) and SSC (Sulfide Stress Cracking) testing per NACE TM0284 and TM0177 verify pipe suitability for sour service environments containing hydrogen sulfide (H2S).",
      },
    ],
  });
  const projects = [
    {
      title: "API 5L X65 PSL2 Seamless Pipe",
      img: "/apl-5L/api-5l-pipe-1.jpg",
    },
    {
      title: "ISO 3183 grade L450 ERW Pipe",
      img: "/apl-5L/api-5l-pipe-2.jpg",
    },
    {
      title: "API 5l X65 PSL2 material",
      img: "/apl-5L/api-5l-pipe-3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium API 5L X65 High-Strength Line Pipes",
    paragraph1:
      "Starlight Tubes supplies premium API 5L X65 high-strength line pipes engineered for demanding oil and gas transmission applications. API 5L X65 pipes offer minimum yield strength of 65,300 psi (450 MPa) with excellent toughness and weldability, making them ideal for high-pressure natural gas pipelines, offshore deepwater installations, and long-distance transmission systems requiring superior mechanical properties.",
    paragraph2:
      "Our API 5L X65 pipes are produced through controlled thermomechanical rolling (TMCP) or quench and temper processes to achieve optimal microstructure and mechanical properties. Each pipe undergoes comprehensive testing including tensile testing, CVN impact testing at low temperatures, DWTT, HIC/SSC testing for sour service, and full-body ultrasonic inspection to ensure PSL2 compliance for critical pipeline projects.",
    specifications: [
      {
        label: "Grade",
        value:
          "API 5L X65 (PSL2), Yield Strength: 450 MPa min, Tensile: 535 MPa min",
      },
      {
        label: "Size Range",
        value: 'NB 4" to 60", Wall Thickness up to 50mm, Length up to 18m',
      },
      {
        label: "Standards",
        value: "API 5L PSL2, ISO 3183, DNV-OS-F101, NACE MR0175/ISO 15156",
      },
      {
        label: "Applications",
        value:
          "High-Pressure Gas Pipelines, Offshore Deepwater, Sour Service, Cross-Country Transmission",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted API 5L X65 Pipe Supplier",
    description:
      "Starlight Tubes specializes in high-strength API 5L X65 line pipes for demanding pipeline applications. We provide PSL2 certified products with HIC/SSC testing for sour service.",
    features: [
      "API 5L PSL2 Certified",
      "450 MPa Yield Strength",
      "Sour Service Grade",
      "HIC/SSC Tested",
      "Offshore Approved",
      "TMCP Process",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="API 5L X65 Pipes"
            subtitle="High-grade pipeline steel for demanding applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* API 5L X65 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            API 5L X65 High-Strength Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality API 5L X65 high-strength line pipes for
            high-pressure oil and gas transmission systems
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

export default API5LX65Pipe;
