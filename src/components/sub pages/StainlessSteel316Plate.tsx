import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const StainlessSteel316Plate = () => {
  const projects = [
    {
      title: "ASTM A240 Stainless Steel 316 Sheet",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "316 Stainless Steel Plate",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "316L Stainless Steel Coil",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "316 Stainless Steel Plate",
    paragraph1:
      "Starlight Tubes supplies premium quality 316 stainless steel plates with enhanced corrosion resistance due to molybdenum addition. Grade 316 plates are the preferred choice for marine environments, coastal construction, chemical storage tanks, pharmaceutical equipment, and pulp & paper industry where superior resistance to chlorides and acidic conditions is essential.",
    paragraph2:
      "Our 316 stainless steel plates are available in various surface finishes and precise thickness tolerances. We offer comprehensive value-added services including laser cutting, water jet cutting, bending, and rolling. Each plate undergoes thorough testing for chemical composition, mechanical properties, and corrosion resistance to ensure optimal performance in demanding applications.",
    specifications: [
      {
        label: "Composition",
        value:
          "16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum - Superior corrosion resistance",
      },
      {
        label: "Thickness Range",
        value: "3mm to 100mm, Width up to 1000mm, Length up to 4000mm",
      },
      {
        label: "Standards",
        value:
          "ASTM A240 SS316, ASME SA240, DIN 1.4401, EN 10088-2, JIS G4304 SUS316",
      },
      {
        label: "Finish",
        value: "2B, BA, No.1, No.4, Hairline, Mirror Polished, Brushed Finish",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted SS 316 Plate Supplier",
    description:
      "Starlight Tubes supplies premium 316 stainless steel plates for marine and chemical applications. We offer comprehensive cutting and fabrication services.",
    features: [
      "Molybdenum Enhanced",
      "Marine Grade",
      "Chloride Resistant",
      "Multiple Finishes",
      "Laser Cutting",
      "ASTM A240 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="SS 316 Plates"
            subtitle="Superior corrosion resistant plates"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* 316 Stainless Steel Plate Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            316 Stainless Steel Plate
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality 316 stainless steel plates manufactured to meet
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

export default StainlessSteel316Plate;
