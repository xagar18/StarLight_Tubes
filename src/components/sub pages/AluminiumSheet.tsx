import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const AluminiumSheet = () => {
  useSEO({
    title:
      "Aluminium Sheet - Starlight Tubes | Aluminium Sheets | Global Suppliers",
    description:
      "Premium aluminium sheets manufacturer. Lightweight corrosion resistant sheets for aerospace and marine applications. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "aluminium sheet UAE, aluminium sheets Saudi Arabia, lightweight sheets Qatar, corrosion resistant sheets Oman, aerospace sheets Kuwait, marine sheets Bahrain, aluminium sheet worldwide, aluminium sheet manufacturers GCC, USA steel suppliers, European steel exporters, global aluminium manufacturers",
    url: "https://www.starlighttubes.com/aluminium-sheet",
  });
  const projects = [
    {
      title: "Aluminium Sheet",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "Aluminium Plate",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "Aluminium Coil",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium Sheets",
    paragraph1:
      "Starlight Tubes supplies high-quality aluminium sheets that meet international standards. Our aluminium sheets offer excellent formability, lightweight properties, corrosion resistance, and surface finish for aerospace, automotive, and construction applications.",
    paragraph2:
      "Available in various alloys and tempers, our aluminium sheets are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "6061, 6063, 5052, 5083, 7075, 2024, 3003, 1100, 1050",
      },
      {
        label: "Size Range",
        value:
          "Thickness 0.2mm to 150mm, Width up to 2500mm, Length up to 12000mm",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B548, AMS 4027, EN 485, JIS H4000",
      },
      {
        label: "Types",
        value:
          "Hot Rolled, Cold Rolled, Annealed, Mill Finish, Brushed, Coated",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium Sheet Supplier",
    description:
      "Starlight Tubes delivers premium aluminium sheets with unmatched quality and reliability for diverse industrial applications.",
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
            title="Aluminium Sheets"
            subtitle="Premium quality aluminium sheets for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium Sheet Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium Sheets & Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality aluminium sheets for aerospace, automotive, and
            construction applications
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16 px-4">
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
              Explore More Aluminium Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality aluminium products
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

export default AluminiumSheet;
