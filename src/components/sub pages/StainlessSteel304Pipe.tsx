import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const StainlessSteel304Pipe = () => {
  const projects = [
    {
      title: "ASTM A312 TP304",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier1.jpg",
    },
    {
      title: "304 Stainless Steel Tubing",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier2.jpg",
    },
    {
      title: "304 Stainless Steel Pipe",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "304 Stainless Steel Pipe",
    paragraph1:
      "Starlight Tubes supplies premium quality 304 stainless steel pipes, the most versatile and widely used austenitic stainless steel grade. Grade 304 offers excellent corrosion resistance, formability, and weldability, making it ideal for food processing, pharmaceutical equipment, architectural applications, chemical processing, and general engineering purposes.",
    paragraph2:
      "Our 304 stainless steel pipes are available in seamless and welded configurations with various finishes. Each pipe is manufactured using high-grade raw materials and undergoes comprehensive testing including IGC, PMI, hydrostatic testing, and dimensional inspection to ensure superior quality and compliance with international standards.",
    specifications: [
      {
        label: "Composition",
        value:
          "18% Chromium, 8% Nickel - Austenitic non-magnetic stainless steel",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 24", Schedule 5S to XXS, Length up to 12 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM A312 TP304, ASTM A358 CL1/CL3, ASME B36.19, DIN 1.4301, EN 10217",
      },
      {
        label: "Applications",
        value:
          "Food Processing, Pharmaceuticals, Architecture, Chemical Plants, Water Treatment",
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

        {/* 304 Stainless Steel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            304 Stainless Steel Pipe
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality 304 stainless steel pipes manufactured to meet
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

export default StainlessSteel304Pipe;
