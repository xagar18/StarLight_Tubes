import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const API5LX52Pipe = () => {
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
    title: "Premium API 5L X52 Line Pipes",
    paragraph1:
      "Starlight Tubes manufactures and supplies high-quality API 5L X52 line pipes designed for medium to high-pressure oil and gas pipeline systems. API 5L X52 pipes provide minimum yield strength of 52,200 psi (360 MPa) with excellent combination of strength, toughness, and weldability, making them suitable for natural gas distribution, crude oil transmission, and gathering line applications in onshore and offshore environments.",
    paragraph2:
      "Our API 5L X52 pipes are manufactured through hot rolling or TMCP processes in seamless and welded configurations. Each pipe undergoes rigorous quality testing including tensile testing, Charpy impact testing, hydrostatic testing, ultrasonic inspection, and radiographic examination to ensure compliance with API 5L PSL1 and PSL2 requirements for reliable pipeline service.",
    specifications: [
      {
        label: "Grade",
        value:
          "API 5L X52 (PSL1 & PSL2), Yield Strength: 360 MPa min, Tensile: 460 MPa min",
      },
      {
        label: "Size Range",
        value: 'NB 2" to 48", Wall Thickness up to 40mm, Length up to 18m',
      },
      {
        label: "Standards",
        value: "API 5L, ISO 3183, EN 10208-2, DNV-OS-F101, CSA Z245.1",
      },
      {
        label: "Applications",
        value:
          "Gas Distribution, Oil Transmission, Gathering Lines, Process Piping, Plant Piping",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <ImagesSliderDemo />
        </div>

        {/* API 5L X52 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            API 5L X52 Line Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality API 5L X52 line pipes for medium to high-pressure
            oil and gas transmission applications
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

export default API5LX52Pipe;
