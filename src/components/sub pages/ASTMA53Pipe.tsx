import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ASTMA53Pipe = () => {
  useSEO({
    title:
      "ASTM A53 Pipe - Starlight Tubes | Black Steel Pipes | Middle East Suppliers",
    description:
      "Reliable ASTM A53 black steel pipes manufacturer. Grade A, B pipes. Seamless, ERW, galvanized. General purpose piping applications. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "ASTM A53 pipe UAE, black steel pipes Saudi Arabia, galvanized pipes Qatar, ERW pipes Oman, seamless pipes Kuwait, grade A pipes Bahrain, ASTM A53 pipe Middle East, steel pipe manufacturers GCC",
    url: "https://www.starlighttubes.com/astm-a53-pipe",
  });
  const projects = [
    {
      title: "ASTM A53 Grade B Pipe",
      img: "/carbon-steel-pipe/carbon-steel-pipe.jpg",
    },
    {
      title: "SA53 gr b ERW Pipe",
      img: "/carbon-steel-pipe/steel-welded-pipe.jpg",
    },
    {
      title: "ASTM A53 Grade B Seamless Pipe",
      img: "/carbon-steel-pipe/steel-seamless-pipe.jpg",
    },
  ];

  const ctaData = {
    title: "Premium ASTM A53 Steel Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality ASTM A53 steel pipes available in both seamless and welded (ERW) configurations. ASTM A53 pipes are the most widely specified carbon steel pipes for general purpose applications including steam, water, gas, and air lines. Available in Type E (Electric Resistance Welded), Type F (Furnace Butt Welded), and Type S (Seamless), these pipes offer versatile solutions for mechanical and pressure applications.",
    paragraph2:
      "Our ASTM A53 pipes are available in Grade A and Grade B with black and hot-dip galvanized finishes for corrosion protection. Each pipe undergoes comprehensive quality testing including hydrostatic testing, flattening tests, bend tests, and dimensional verification to ensure reliable performance in structural and fluid conveyance applications.",
    specifications: [
      {
        label: "Grades",
        value: "ASTM A53 Grade A, Grade B | Type E, Type F, Type S",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 26", Schedule 10 to XXS, Length up to 6m',
      },
      {
        label: "Standards",
        value: "ASTM A53, ASME SA53, API 5L, BS 1387, EN 10255",
      },
      {
        label: "Applications",
        value:
          "Steam Lines, Water Supply, Gas Distribution, Structural, Fire Protection",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted ASTM A53 Pipe Supplier",
    description:
      "Starlight Tubes supplies versatile ASTM A53 pipes for general purpose applications. We offer seamless and welded options with black and galvanized finishes.",
    features: [
      "Type E, F, S Available",
      "Grade A & B Stock",
      "Black & Galvanized",
      "General Purpose Grade",
      "Fire Protection Rated",
      "Competitive Pricing",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="ASTM A53 Pipes"
            subtitle="Black & galvanized pipes for mechanical applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* ASTM A53 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            ASTM A53 Steel Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality ASTM A53 seamless and welded steel pipes for general
            purpose mechanical and pressure applications
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

export default ASTMA53Pipe;
