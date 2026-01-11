import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const AluminiumRoundBar = () => {
  useSEO({
    title:
      "Aluminium Round Bar Manufacturer - 6061/7075 Aerospace Grade Bars | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium round bar manufacturer & global exporter. ASTM B211 6061, 7075, 2024 aerospace grade bars. Excellent machinability & strength-to-weight ratio. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "aluminium round bar manufacturer, aluminum bar exporter, ASTM B211 supplier, 6061 round bar manufacturer, 7075 aerospace bar, machinable aluminium bar, aluminium bar UAE, aluminum round bar Saudi Arabia, aluminium bar manufacturer India",
    url: "https://www.starlighttubes.com/aluminium-round-bar",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
      {
        name: "Aluminium Round Bar",
        url: "https://www.starlighttubes.com/aluminium-round-bar",
      },
    ],
    productSchema: {
      name: "Aluminium Round Bar",
      description:
        "Premium aluminium round bars in various alloys including 6061, 7075, 2024. ASTM B211 certified bars with excellent machinability for aerospace, automotive, and construction applications.",
      category: "Aluminium Round Bars",
      material:
        "Aluminium Alloy (6061, 6063, 5052, 5083, 7075, 2024, 3003, 1100)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium Round Bars - Aerospace Grade",
      summary:
        "Starlight Tubes supplies aluminium round bars for aerospace, automotive, and machining applications. 6061, 7075, 2024 grades available per ASTM B211 standards.",
    },
    entityType: "Product",
    relatedEntities: [
      "Aluminium Round Bar",
      "Aluminium Rod",
      "6061-T6 Bar",
      "7075 Bar",
      "ASTM B211",
      "Machinable Aluminium",
      "Aerospace Bar",
    ],
    faqSchema: [
      {
        question: "What are aluminium round bars used for?",
        answer:
          "Aluminium round bars are used in aerospace components, automotive parts, machined fittings, structural supports, and general fabrication due to their machinability and strength-to-weight ratio.",
      },
      {
        question: "Which aluminium alloy bar is best for machining?",
        answer:
          "6061-T6 offers excellent machinability with good strength. 2011 is specifically designed for high-speed machining. 7075 provides highest strength for demanding aerospace applications.",
      },
    ],
  });
  const projects = [
    {
      title: "Aluminium Round Bar",
      img: "/stainless-steel-round-bar/round-bar.jpg",
    },
    {
      title: "Aluminium Hex Bar",
      img: "/stainless-steel-round-bar/hex-bar.jpg",
    },
    {
      title: "Aluminium Square Bar",
      img: "/stainless-steel-round-bar/square-bar.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium Round Bars",
    paragraph1:
      "Starlight Tubes supplies high-quality aluminium round bars that offer excellent strength-to-weight ratio, corrosion resistance, and machinability. Our aluminium bars are ideal for aerospace, automotive, construction, and various industrial applications.",
    paragraph2:
      "Available in various alloys and tempers, our aluminium round bars are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "6061, 6063, 5052, 5083, 7075, 2024, 3003, 1100",
      },
      {
        label: "Diameter Range",
        value: "6mm to 300mm",
      },
      {
        label: "Length",
        value: "Up to 6 meters",
      },
      {
        label: "Standards",
        value: "ASTM B211, ASTM B221, AMS 4127, EN 573",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium Round Bar Supplier",
    description:
      "Starlight Tubes delivers premium aluminium round bars with unmatched quality and reliability for aerospace, automotive, and construction applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Lengths Available",
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
            title="Aluminium Round Bars"
            subtitle="Premium quality aluminium round bars for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium Round Bar Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium Round Bars
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality aluminium round bars for aerospace, automotive, and
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

export default AluminiumRoundBar;
