import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const A672Pipe = () => {
  useSEO({
    title:
      "ASTM A672 Pipe Manufacturer & Exporter | High Pressure EFW Pipes | Starlight Tubes",
    description:
      "Leading ASTM A672 electric fusion welded pipe manufacturer and exporter. Premium high-pressure EFW pipes for power generation and petrochemical applications. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "ASTM A672 pipe manufacturer, ASTM A672 pipe exporter, high pressure pipe supplier, EFW pipe manufacturer, power plant pipe exporter, petrochemical pipe manufacturer, DSAW pipe supplier, carbon steel pipe factory, SA672 pipe exporter, A672 B70 manufacturer, A672 C70 stockist",
    url: "https://www.starlighttubes.com/astm-a672-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
      {
        name: "ASTM A672 Pipe",
        url: "https://www.starlighttubes.com/astm-a672-pipe",
      },
    ],
    productSchema: {
      name: "ASTM A672 Electric Fusion Welded Pipe",
      description:
        "Premium ASTM A672 EFW pipes for high-pressure service at moderate temperatures in steam systems, hydrocrackers, and critical pressure applications.",
      category: "Carbon Steel Pipes",
      material:
        "Carbon Steel (ASTM A672 B60, B65, B70, C60, C65, C70, D70, E60, E65, E70)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "ASTM A672 High Pressure EFW Pipe Manufacturer",
      summary:
        "Starlight Tubes manufactures ASTM A672 electric fusion welded pipes for high-pressure steam and hydrocracker applications. Multiple grades B60, B70, C70 available with stress relief heat treatment.",
    },
    entityType: "Product",
    relatedEntities: [
      "ASTM A672",
      "ASME SA672",
      "High Pressure Pipe",
      "EFW Pipe",
      "Steam Piping",
      "Hydrocracker",
      "Power Plant",
      "Stress Relieved",
    ],
    faqSchema: [
      {
        question: "What is the difference between ASTM A671 and A672 pipes?",
        answer:
          "ASTM A671 is for atmospheric and lower temperature service, while ASTM A672 is designed for high-pressure service at moderate temperatures. A672 has stricter requirements for high-pressure applications.",
      },
      {
        question: "What pressure rating can ASTM A672 pipes handle?",
        answer:
          "ASTM A672 pipes are designed for high-pressure service with various class designations. The class letter indicates radiographic examination level and the number indicates the base plate specification determining pressure capability.",
      },
    ],
  });
  const projects = [
    {
      title: "ASTM A672 Pipe",
      img: "/carbon-steel-pipe/carbon-steel-pipe.jpg",
    },
    {
      title: "ASTM A672 Welded Pipe",
      img: "/carbon-steel-pipe/steel-welded-pipe.jpg",
    },
    {
      title: "A672 Pipe Material",
      img: "/carbon-steel-pipe/steel-seamless-pipe.jpg",
    },
  ];

  const ctaData = {
    title: "Premium ASTM A672 EFW Pipes",
    paragraph1:
      "Starlight Tubes supplies premium ASTM A672 Electric Fusion Welded (EFW) steel pipes designed for high-pressure service at moderate temperatures. ASTM A672 pipes are fabricated from carbon and alloy steel plates with double submerged arc welding and are essential for steam systems, high-pressure process piping, hydrocracker units, and critical pressure applications in power generation and petrochemical industries.",
    paragraph2:
      "Our ASTM A672 pipes are available in multiple grades including B60, B65, B70, C60, C65, C70, D70, E60, E65, and E70 with various class designations for different pressure ratings. Each pipe undergoes 100% radiographic inspection of weld seams, stress relief heat treatment, hydrostatic testing, and mechanical property verification to ensure superior performance in demanding high-pressure service conditions.",
    specifications: [
      {
        label: "Grades",
        value:
          "ASTM A672 B60, B65, B70, C60, C65, C70, D70, E60, E65, E70, H75, J80",
      },
      {
        label: "Size Range",
        value: 'NB 16" to 80", Wall Thickness 8mm to 80mm, Length up to 12m',
      },
      {
        label: "Standards",
        value: "ASTM A672, ASME SA672, EN 10217-2, EN 10217-5",
      },
      {
        label: "Applications",
        value:
          "High-Pressure Steam, Hydrocrackers, Power Plants, Process Piping, Pressure Vessels",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted ASTM A672 Pipe Supplier",
    description:
      "Starlight Tubes provides certified ASTM A672 EFW pipes for high-pressure applications. We ensure complete quality documentation for power plant and petrochemical projects.",
    features: [
      "High Pressure Rated",
      "ASME SA672 Compliant",
      "Multiple Classes Stock",
      "100% Radiographic Test",
      "Stress Relieved",
      "Complete MTCs",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="ASTM A672 Pipes"
            subtitle="EFW pipes for high-pressure applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* A672 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            ASTM A672 EFW Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality ASTM A672 Electric Fusion Welded pipes for
            high-pressure service at moderate temperatures
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

export default A672Pipe;
