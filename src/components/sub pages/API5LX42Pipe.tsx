import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const API5LX42Pipe = () => {
  useSEO({
    title:
      "API 5L X42 Pipe - Starlight Tubes | Carbon Steel X42 Pipes | Middle East Suppliers",
    description:
      "Expert API 5L X42 carbon steel pipes manufacturer. High yield strength pipes. Oil, gas pipeline applications. Seamless, welded construction. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "API 5L X42 pipe UAE, carbon steel X42 pipes Saudi Arabia, high yield pipes Qatar, oil pipeline pipes Oman, gas pipeline pipes Kuwait, seamless X42 pipes Bahrain, API 5L X42 pipe Middle East, carbon steel pipe manufacturers GCC",
    url: "https://www.starlighttubes.com/api-5l-x42-pipe",
  });
  const projects = [
    {
      title: "API 5L X42 Pipe",
      img: "/apl-5L/api-5l-pipe-1.jpg",
    },
    {
      title: "L290 PSL1 Material",
      img: "/apl-5L/api-5l-pipe-2.jpg",
    },
    {
      title: "API 5L X42 PSL2",
      img: "/apl-5L/api-5l-pipe-3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium API 5L X42 Line Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality API 5L X42 line pipes widely used in oil and gas transmission pipeline systems. API 5L X42 pipes offer minimum yield strength of 42,100 psi (290 MPa) with excellent ductility and weldability, making them suitable for natural gas distribution networks, crude oil gathering systems, and general purpose pipeline applications requiring reliable performance at moderate pressures.",
    paragraph2:
      "Our API 5L X42 pipes are produced in seamless and welded (ERW, LSAW, SSAW) configurations with various end finishes including plain end, beveled end, and threaded ends. Each pipe undergoes comprehensive quality control including hydrostatic testing, non-destructive examination, chemical analysis, and mechanical property verification to ensure compliance with API 5L specifications.",
    specifications: [
      {
        label: "Grade",
        value:
          "API 5L X42 (PSL1 & PSL2), Yield Strength: 290 MPa min, Tensile: 415 MPa min",
      },
      {
        label: "Size Range",
        value: 'NB 1/2" to 48", Wall Thickness up to 35mm, Length up to 18m',
      },
      {
        label: "Standards",
        value: "API 5L, ISO 3183, EN 10208-1, GOST 20295, IS 1978",
      },
      {
        label: "Applications",
        value:
          "Gas Distribution, Oil Gathering, Water Pipelines, Plant Piping, Process Lines",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted API 5L X42 Pipe Supplier",
    description:
      "Starlight Tubes provides API 5L X42 line pipes for gas distribution and oil gathering. We offer seamless and welded options with complete API certification.",
    features: [
      "API 5L Certified",
      "290 MPa Yield Strength",
      "Seamless & ERW",
      "NACE Compliant",
      "Coating Options",
      "Competitive Pricing",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="API 5L X42 Pipes"
            subtitle="High-strength pipeline steel"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* API 5L X42 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            API 5L X42 Line Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality API 5L X42 line pipes for oil and gas transmission
            and distribution applications
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

export default API5LX42Pipe;
