import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const StainlessSteelTube = () => {
  const projects = [
    {
      title: "Stainless Steel Tube",
      img: "/stainless-steel-tube/stainless-steel-tube-tubing-supplier1.jpg",
    },
    {
      title: "Stainless Steel Seamless Tubes",
      img: "/stainless-steel-tube/stainless-steel-tube-tubing-supplier2.jpg",
    },
    {
      title: "Stainless Steel Tubing",
      img: "/stainless-steel-tube/stainless-steel-tube-tubing-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Stainless Steel Tubes",
    paragraph1:
      "Starlight Tubes supplies high-quality stainless steel tubes that meet international standards. Our tubes are engineered for superior corrosion resistance, durability, and performance in demanding industrial applications including oil & gas, petrochemical, power generation, and marine industries.",
    paragraph2:
      "Available in seamless and welded configurations, our stainless steel tubes are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, ASME, and international specifications. We offer customized solutions to meet your specific project requirements.",
    specifications: [
      {
        label: "Grades",
        value:
          "304, 304L, 316, 316L, 321, 310S, 347, 904L, Duplex & Super Duplex",
      },
      {
        label: "Size Range",
        value:
          "OD 6mm to 660mm, Wall Thickness 0.5mm to 50mm, Length up to 12 meters",
      },
      {
        label: "Standards",
        value:
          "ASTM A213, ASTM A269, ASTM A312, ASME SA213, DIN 17458, EN 10216",
      },
      {
        label: "Types",
        value: "Seamless, Welded, ERW, EFW with various finishes available",
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

        {/* Stainless Steel Tubes Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Stainless Steel Tubes & Tubing
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality stainless steel tubes manufactured to meet
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
              Explore More Stainless Steel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality stainless steel products
              for your industrial applications
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

export default StainlessSteelTube;
