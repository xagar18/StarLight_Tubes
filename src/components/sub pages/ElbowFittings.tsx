import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ElbowFittings = () => {
  useSEO({
    title:
      "Elbow Fittings Manufacturer - 90°, 45° Pipe Elbows | Starlight Tubes Global Exporter",
    description:
      "Leading elbow fittings manufacturer and exporter. 90 degree, 45 degree elbows in butt weld, socket weld, and threaded types. Stainless steel, carbon steel, alloy steel elbows. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
    keywords:
      "elbow fittings manufacturer, 90 degree elbow, 45 degree elbow, pipe elbow manufacturer, butt weld elbow, socket weld elbow, threaded elbow, stainless steel elbow, carbon steel elbow, elbow fittings exporter, pipe elbows India",
    url: "https://www.starlighttubes.com/elbow-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Elbow Fittings",
        url: "https://www.starlighttubes.com/elbow-fittings",
      },
    ],
    productSchema: {
      name: "Elbow Fittings - 90°, 45° Pipe Elbows",
      description:
        "Premium elbow fittings in 90 degree and 45 degree configurations. Butt weld, socket weld, and threaded types in stainless steel, carbon steel, and alloy steel.",
      category: "Elbow Fittings",
      material: "Stainless Steel, Carbon Steel, Alloy Steel",
      offers: {
        priceCurrency: "USD",
        lowPrice: "5",
        highPrice: "1000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Pipe Elbows - 45° and 90° Stainless Steel & Carbon Steel",
      summary:
        "Starlight Tubes manufactures pipe elbows in 45° and 90° angles in stainless steel and carbon steel. Long radius and short radius available per ASME B16.9.",
    },
    entityType: "Product",
    relatedEntities: [
      "Pipe Elbows",
      "ASME B16.9",
      "Butt Weld Fittings",
      "Long Radius Elbow",
      "Short Radius Elbow",
      "45 Degree Elbow",
      "90 Degree Elbow",
      "180 Degree Elbow",
    ],
    faqSchema: [
      {
        question:
          "What is the difference between long radius and short radius elbows?",
        answer:
          "Long radius elbows have a centerline radius of 1.5 times the nominal pipe size, while short radius elbows have a radius equal to the nominal size. Long radius elbows are preferred for smoother flow and lower pressure drop.",
      },
      {
        question: "What materials are pipe elbows available in?",
        answer:
          "Pipe elbows are available in stainless steel (304, 316, 316L), carbon steel (A234 WPB), alloy steel, and nickel alloys (Inconel, Monel). All elbows comply with ASME B16.9, B16.11, and ASTM standards.",
      },
    ],
  });
  const projects = [
    {
      title: "Elbow Fittings",
      img: "/socket-weld/socket-elbow.jpg",
    },
    {
      title: "90° Elbow",
      img: "/elbows/90-degree-elbow.jpg",
    },
    {
      title: "45° Elbow",
      img: "/elbows/45-degree-elbow.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Elbow Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality elbow fittings designed for changing the direction of flow in piping systems. Our elbows provide smooth flow transitions and are available in various angles including 45°, 90°, and 180° configurations.",
    paragraph2:
      "Available in multiple connection types including butt weld, socket weld, and threaded, our elbow fittings are manufactured from premium materials and undergo rigorous quality testing to ensure leak-proof performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Angles",
        value: "45°, 90°, 180° (Long/Short Radius)",
      },
      {
        label: "Size Range",
        value: '1/8" to 48", Schedule 5S to XXS',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.9, B16.11, B16.28",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Elbow Fittings Supplier",
    description:
      "Starlight Tubes delivers premium elbow fittings with unmatched quality and reliability for directional flow changes in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Multiple Angle Options",
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
            title="Elbow Fittings"
            subtitle="Premium quality elbow fittings for directional flow changes"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Elbow Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Elbow Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality elbow fittings for changing flow direction in piping
            systems
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
              Explore More Pipe Fittings
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality pipe fittings
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

export default ElbowFittings;
