import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ASTMA333Pipe = () => {
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
