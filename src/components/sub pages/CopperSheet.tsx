import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CopperSheet = () => {
  const projects = [
    {
      title: "Copper sheet",
      img: "/copper-sheet/copper-sheet-supplier.jpg",
    },
    {
      title: "Copper Coil Tubing",
      img: "/copper-sheet/copper-coil-supplier.jpg",
    },
    {
      title: "Copper Plate",
      img: "/copper-sheet/copper-plate-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Copper Sheets",
    paragraph1:
      "Starlight Tubes supplies high-quality copper sheets that meet international standards. Our copper sheets offer excellent electrical and thermal conductivity, malleability, and corrosion resistance for electrical, roofing, and decorative applications.",
    paragraph2:
      "Available in various grades and tempers, our copper sheets are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "C10100, C10200, C11000, C12000, C12200, ETP, DHP, OFHC",
      },
      {
        label: "Size Range",
        value:
          "Thickness 0.1mm to 50mm, Width up to 2000mm, Length up to 6000mm",
      },
      {
        label: "Standards",
        value: "ASTM B152, ASTM B370, EN 1652, JIS H3100",
      },
      {
        label: "Types",
        value: "Hot Rolled, Cold Rolled, Annealed, Half Hard, Full Hard",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Sheet Supplier",
    description:
      "Starlight Tubes delivers premium copper sheets with unmatched quality and reliability for electrical and industrial applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Sizes Available",
      "Global Export Network",
      "Bulk Order Discounts",
      "Expert Technical Guidance",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="Copper Sheets"
            subtitle="Premium quality copper sheets for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Sheets & Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper sheets for electrical, roofing, and
            decorative applications
          </p>
        </div>

        <div className="w-full h-fit flex justify-center mb-16">
          <CommonCTA
            title={ctaData.title}
            paragraph1={ctaData.paragraph1}
            paragraph2={ctaData.paragraph2}
            specifications={ctaData.specifications}
          />
        </div>

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Copper Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality copper products
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

        <BottomCTA
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          features={bottomCtaData.features}
        />

        <div>
          <StatsGrid />
        </div>
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default CopperSheet;
