import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const API5LGradeBPipe = () => {
  useSEO({
    title:
      "API 5L Grade B Pipe - Starlight Tubes | Carbon Steel Grade B Pipes | Global Suppliers",
    description:
      "Premium API 5L Grade B carbon steel pipes manufacturer. Oil and gas pipeline pipes. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "API 5L grade B pipe UAE, carbon steel grade B pipes Saudi Arabia, oil pipes Qatar, gas pipes Oman, seamless grade B pipes Kuwait, welded grade B pipes Bahrain, API 5L grade B pipe worldwide, carbon steel pipe manufacturers GCC, USA steel suppliers, European steel exporters, global steel manufacturers",
    url: "https://www.starlighttubes.com/api-5l-grade-b-pipe",
  });
  const projects = [
    {
      title: "API 5L Grade B Seamless Pipe",
      img: "/apl-5L/api-5l-pipe-1.jpg",
    },
    {
      title: "API 5L Grade b ERW pipe",
      img: "/apl-5L/api-5l-pipe-2.jpg",
    },
    {
      title: "API 5l Grade B Pipe",
      img: "/apl-5L/api-5l-pipe-3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium API 5L Grade B Line Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality API 5L Grade B line pipes designed for oil and gas transmission pipeline systems. API 5L Grade B pipes offer minimum yield strength of 35,500 psi (245 MPa) and are widely used for conveying natural gas, crude oil, and petroleum products in onshore and offshore pipeline installations. Available in PSL1 and PSL2 specifications to meet varying service requirements.",
    paragraph2:
      "Our API 5L Grade B pipes are manufactured in seamless (SMLS) and welded (ERW, SAW, DSAW) configurations with comprehensive quality assurance. Each pipe undergoes hydrostatic testing, non-destructive examination, chemical analysis, and mechanical testing including tensile, CVN impact, and guided bend tests to ensure compliance with API specifications for critical pipeline applications.",
    specifications: [
      {
        label: "Grade",
        value: "API 5L Grade B (PSL1 & PSL2), Yield Strength: 245 MPa min",
      },
      {
        label: "Size Range",
        value: 'NB 1/2" to 48", Wall Thickness up to 40mm, Length up to 18m',
      },
      {
        label: "Standards",
        value: "API 5L, ISO 3183, EN 10208-2, DNV-OS-F101, NACE MR0175",
      },
      {
        label: "Applications",
        value:
          "Oil & Gas Transmission, Cross-Country Pipelines, Offshore Pipelines, Distribution Lines",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted API 5L Grade B Pipe Supplier",
    description:
      "Starlight Tubes supplies API 5L Grade B line pipes for oil and gas transmission. We provide PSL1 and PSL2 certified products with complete API monogram documentation.",
    features: [
      "API 5L PSL1/PSL2",
      "Seamless & Welded",
      "Pipeline Grade",
      "Hydrostatic Tested",
      "3LPE/FBE Coating",
      "Global Delivery",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="API 5L Grade B Pipes"
            subtitle="Line pipes for oil & gas transportation"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* API 5L Grade B Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            API 5L Grade B Line Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality API 5L Grade B pipes for oil and gas transmission
            pipeline applications
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

export default API5LGradeBPipe;
