import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const API5LX65Pipe = () => {
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
    title: "Premium API 5L X65 High-Strength Line Pipes",
    paragraph1:
      "Starlight Tubes manufactures and supplies premium API 5L X65 high-strength line pipes engineered for demanding oil and gas transmission applications. API 5L X65 pipes offer minimum yield strength of 65,300 psi (450 MPa) with excellent toughness and weldability, making them ideal for high-pressure natural gas pipelines, offshore deepwater installations, and long-distance transmission systems requiring superior mechanical properties.",
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

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <ImagesSliderDemo />
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

export default API5LX65Pipe;
