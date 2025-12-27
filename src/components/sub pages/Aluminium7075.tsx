import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Aluminium7075 = () => {
  useSEO({
    title:
      "Aluminium 7075 - Starlight Tubes | Aluminium 7075 Pipes, Sheets | Middle East Suppliers",
    description:
      "Expert aluminium 7075 manufacturer. High strength alloy pipes, sheets, round bars. Aerospace, defense applications. Superior strength-to-weight ratio. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "aluminium 7075 UAE, aluminium 7075 pipes Saudi Arabia, high strength alloy Qatar, aluminium sheets Oman, aluminium round bars Kuwait, aerospace aluminium Bahrain, defense aluminium Middle East, aluminium 7075 manufacturers GCC",
    url: "https://www.starlighttubes.com/aluminium-7075",
  });
  const projects = [
    {
      title: "Aluminium 7075 Plate",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "Aluminium 7075 Bar",
      img: "/stainless-steel-round-bar/round-bar.jpg",
    },
    {
      title: "Aluminium 7075 Sheet",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium 7075 Alloy",
    paragraph1:
      "Starlight Tubes supplies high-quality Aluminium 7075 alloy products that offer exceptional strength-to-weight ratio and excellent fatigue resistance. This high-strength alloy is widely used in aerospace, defense, and high-performance applications.",
    paragraph2:
      "Available in various forms and tempers, our Aluminium 7075 products are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Composition",
        value:
          "Aluminum 87.1-91.4%, Zinc 5.1-6.1%, Magnesium 2.1-2.9%, Copper 1.2-2.0%",
      },
      {
        label: "Tensile Strength",
        value: "570 MPa (T6 temper)",
      },
      {
        label: "Yield Strength",
        value: "505 MPa (T6 temper)",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B211, ASTM B221, AMS 4045",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium 7075 Supplier",
    description:
      "Starlight Tubes delivers premium Aluminium 7075 alloy products with unmatched quality and reliability for aerospace and high-performance applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "High-Strength Alloy",
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
            title="Aluminium 7075"
            subtitle="Premium quality Aluminium 7075 alloy for aerospace applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium 7075 Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium 7075 Alloy
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Aluminium 7075 alloy for aerospace and
            high-performance applications
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

export default Aluminium7075;
