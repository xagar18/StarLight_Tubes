import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const InconelBolts = () => {
  const projects = [
    {
      title: "Stainless Steel Tube",
      img: "/StainlessSteelTube1.png",
    },
    {
      title: "Stainless Steel Seamless Tubes",
      img: "/StainlessSteelTube2.png",
    },
    {
      title: "Stainless Steel Tubing",
      img: "/StainlessSteelTube3.png",
    },
  ];

  const ctaData = {
    title: "Premium Inconel Alloy Bolts & Fasteners",
    paragraph1:
      "Steel Tubes India manufactures and supplies high-performance Inconel alloy bolts, nuts, screws, studs, and fasteners designed for extreme service conditions requiring exceptional strength retention at elevated temperatures. Our Inconel fasteners provide outstanding resistance to oxidation, corrosion, thermal fatigue, and stress-corrosion cracking, making them critical for aerospace assemblies, gas turbine installations, nuclear power plants, and high-temperature petrochemical processing equipment.",
    paragraph2:
      "We produce Inconel fasteners in fully threaded and partially threaded configurations across multiple grades, thread standards, and head styles. Each fastener is manufactured to exacting specifications and undergoes rigorous testing including dimensional inspection, hardness verification, thread gauging, and material certification to ensure reliable performance in critical bolted joint applications operating from cryogenic to 1800°F temperatures.",
    specifications: [
      {
        label: "Grades",
        value: "Inconel 600, 601, 617, 625, 718, 725, 800, 825, X-750",
      },
      {
        label: "Size Range",
        value:
          'M3 to M100, 1/4" to 4", Custom lengths available, Thread: Metric, UNC, UNF',
      },
      {
        label: "Standards",
        value: "ASTM F468, ASTM F467, DIN 931, DIN 933, ISO 4014, ASME B18.2.1",
      },
      {
        label: "Types",
        value:
          "Hex Bolts, Studs, Nuts, Socket Head Cap Screws, U-Bolts, Anchor Bolts",
      },
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Inconel Bolts Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel Alloy Bolts & Fasteners
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel alloy bolts and fasteners manufactured to
            meet international standards for diverse industrial applications
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

        {/* Manufacturer & Exporter Section */}

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Premium Epoxy Coating Solutions
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Industry-leading FBE and epoxy coating applications for superior
              corrosion protection and extended service life
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

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

export default InconelBolts;
