import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const StainlessSteel316Tube = () => {
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
    title: "316 Stainless Steel Tube",
    paragraph1:
      "Starlight Tubes manufactures and supplies premium quality 316 stainless steel tubes with superior corrosion resistance due to molybdenum content. Grade 316 tubes are specifically designed for highly corrosive environments including marine applications, pharmaceutical equipment, heat exchangers, and chemical processing plants where exposure to chlorides and acids is common.",
    paragraph2:
      "Our 316 stainless steel tubes are available in seamless and welded configurations with exceptional mechanical properties. Each tube undergoes stringent quality control including PMI testing, intergranular corrosion testing, and dimensional verification to ensure compliance with international standards and reliable performance in critical applications.",
    specifications: [
      {
        label: "Composition",
        value:
          "16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum - Enhanced corrosion resistance",
      },
      {
        label: "Size Range",
        value:
          "OD 6mm to 660mm, Wall Thickness 0.5mm to 50mm, Length up to 12 meters",
      },
      {
        label: "Standards",
        value:
          "ASTM A213 TP316, ASTM A269 TP316, ASME SA213, DIN 1.4401, EN 10216-5",
      },
      {
        label: "Applications",
        value:
          "Marine Equipment, Pharmaceuticals, Heat Exchangers, Chemical Processing, Coastal Construction",
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

        {/* 316 Stainless Steel Tube Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            316 Stainless Steel Tube
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality 316 stainless steel tubes manufactured to meet
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

export default StainlessSteel316Tube;
