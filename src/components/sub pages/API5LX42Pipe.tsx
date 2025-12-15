import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const API5LX42Pipe = () => {
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
    title: "Premium API 5L X42 Line Pipes",
    paragraph1:
      "Steel Tubes India manufactures and supplies high-quality API 5L X42 line pipes widely used in oil and gas transmission pipeline systems. API 5L X42 pipes offer minimum yield strength of 42,100 psi (290 MPa) with excellent ductility and weldability, making them suitable for natural gas distribution networks, crude oil gathering systems, and general purpose pipeline applications requiring reliable performance at moderate pressures.",
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

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <ImagesSliderDemo />
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

export default API5LX42Pipe;
