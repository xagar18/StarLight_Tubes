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
      "ASTM A672 Pipe - Starlight Tubes | Electric Fusion Welded Pipes | Global Suppliers",
    description:
      "Premium ASTM A672 electric fusion welded pipes manufacturer. Carbon and alloy steel pipes for pressure vessels and heat exchangers. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "ASTM A672 pipe UAE, electric fusion welded pipes Saudi Arabia, pressure vessel pipes Qatar, heat exchanger pipes Oman, carbon steel pipes Kuwait, alloy steel pipes Bahrain, ASTM A672 pipe worldwide, fusion welded pipe manufacturers GCC, USA steel suppliers, European steel exporters, global steel manufacturers",
    url: "https://www.starlighttubes.com/astm-a672-pipe",
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
