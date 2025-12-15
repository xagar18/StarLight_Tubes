import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const StainlessSteel304Plate = () => {
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
    title: "304 Stainless Steel Plate",
    paragraph1:
      "Steel Tubes India supplies premium quality 304 stainless steel plates for a wide range of industrial and commercial applications. Grade 304 plates offer excellent corrosion resistance, good formability, and aesthetic appeal, making them perfect for kitchen equipment, food processing machinery, architectural facades, pressure vessels, and chemical storage tanks.",
    paragraph2:
      "Available in various surface finishes including 2B, BA, No.4, and hairline, our 304 stainless steel plates are manufactured to precise thickness tolerances. We offer comprehensive fabrication services including cutting, bending, rolling, and polishing. Each plate is tested for chemical composition, mechanical properties, and surface quality to ensure consistent performance.",
    specifications: [
      {
        label: "Composition",
        value:
          "18% Chromium, 8% Nickel - Non-magnetic austenitic stainless steel",
      },
      {
        label: "Thickness Range",
        value: "3mm to 100mm, Width up to 2500mm, Length up to 12000mm",
      },
      {
        label: "Standards",
        value: "ASTM A240 SS304, ASME SA240, DIN 1.4301, EN 10088-2, JIS G4304",
      },
      {
        label: "Finish",
        value: "2B, BA, No.1, No.4, Hairline, Mirror 8K, Brushed Finish",
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

        {/* 304 Stainless Steel Plate Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            304 Stainless Steel Plate
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality 304 stainless steel plates manufactured to meet
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

export default StainlessSteel304Plate;
