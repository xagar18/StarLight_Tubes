import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const Inconel625Tubing = () => {
  const projects = [
    {
      title: "Inconel Alloy 625 Tube",
      img: "/inconel-625-tubing/inconel-625-tube-supplier.jpg",
    },
    {
      title: "Inconel 625 Seamless Tube",
      img: "/inconel-625-tubing/inconel-625-seamless-tube-suppliers.jpg",
    },
    {
      title: "Inconel 625 Tubing",
      img: "/inconel-625-tubing/alloy-625-tubing-suppliers.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel 625 Tubing",
    paragraph1:
      "Starlight Tubes supplies high-performance Inconel 625 tubing (UNS N06625) engineered for exceptional corrosion resistance and high strength from cryogenic temperatures to 1800°F. Inconel 625 tubing provides outstanding resistance to pitting, crevice corrosion, oxidation, and stress-corrosion cracking in chloride environments, making it ideal for seawater systems, chemical processing heat exchangers, aerospace hydraulic lines, and oil & gas downhole applications.",
    paragraph2:
      "We produce Inconel 625 tubing in seamless cold-drawn and welded configurations with precise dimensional tolerances for instrumentation and heat exchanger applications. Each tube undergoes rigorous quality control including solution annealing, ultrasonic inspection, eddy current testing, PMI verification, and mechanical property validation to ensure superior performance in aggressive corrosive environments.",
    specifications: [
      {
        label: "Grade",
        value: "Inconel 625 (UNS N06625, WERKSTOFF NR. 2.4856)",
      },
      {
        label: "Size Range",
        value: 'OD 1/8" to 3", Wall 0.020" to 0.500", Length up to 12 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM B444, ASTM B704, ASME SB444, AMS 5599, DIN 17458, EN 10216-5",
      },
      {
        label: "Applications",
        value:
          "Heat Exchangers, Instrumentation Lines, Aerospace, Marine, Chemical Processing",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel 625 Tubing Supplier",
    description:
      "Starlight Tubes delivers precision Inconel 625 tubing for demanding applications. We ensure exceptional quality with complete material certification for critical service environments.",
    features: [
      "NACE MR0175 Compliant",
      "Precision Tolerances",
      "Corrosion Tested",
      "Heat Exchanger Grade",
      "AMS Certified",
      "Rapid Delivery Network",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Inconel 625 Tubing Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel 625 Tubing
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel 625 tubing manufactured to meet
            international standards for diverse industrial applications
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
              Explore More Inconel 625 Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              View our Inconel 625 products with superior strength and corrosion
              resistance
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

export default Inconel625Tubing;
