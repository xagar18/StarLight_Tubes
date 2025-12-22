import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const StainlessSteel316Tube = () => {
  const projects = [
    {
      title: "316 Stainless Steel Tube",
      img: "/stainless-steel-tube/stainless-steel-tube-tubing-supplier1.jpg",
    },
    {
      title: "ASTM A312 TP316 Pipe",
      img: "/stainless-steel-tube/stainless-steel-tube-tubing-supplier2.jpg",
    },
    {
      title: "Stainless Steel 316 Pipe",
      img: "/stainless-steel-tube/stainless-steel-tube-tubing-supplier3.jpg",
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
        value: "OD 6mm to 38, Wall Thickness 1mm to 3mm, Length up to 6 meters",
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

  const bottomCtaData = {
    title: "Your Trusted SS 316 Tube Supplier",
    description:
      "Starlight Tubes provides premium 316 stainless steel tubes for marine and pharmaceutical applications. We offer seamless and welded options with excellent corrosion resistance.",
    features: [
      "Enhanced Corrosion Resistance",
      "Marine Approved",
      "Pharmaceutical Grade",
      "Seamless & Welded",
      "PMI Tested",
      "ASTM A213 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="SS 316 Tubes"
            subtitle="Marine grade stainless steel tubes"
            image="/MainScrollableImage/Home.webp"
          />
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

        {/* Exporter Section */}

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More SS 316 Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Explore our SS 316 grade products ideal for marine and chemical
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

export default StainlessSteel316Tube;
