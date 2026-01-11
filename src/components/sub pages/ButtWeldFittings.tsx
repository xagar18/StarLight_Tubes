import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ButtWeldFittings = () => {
  useSEO({
    title:
      "Butt Weld Fittings Manufacturer - Industrial Pipe Fittings | Starlight Tubes Global Exporter",
    description:
      "Leading butt weld fittings manufacturer & global exporter. Premium seamless weld fittings, elbows, tees, reducers in SS, carbon steel, alloy steel. ASME B16.9 certified. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "butt weld fittings manufacturer, butt weld fittings exporter, seamless weld fittings supplier, industrial pipe fittings manufacturer, ASME B16.9 fittings, butt weld elbows manufacturer, butt weld tees exporter, steel pipe fittings global supplier, butt weld fittings UAE, butt weld fittings Saudi Arabia, pipe fittings manufacturer India",
    url: "https://www.starlighttubes.com/butt-weld-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Butt Weld Fittings",
        url: "https://www.starlighttubes.com/butt-weld-fittings",
      },
    ],
    productSchema: {
      name: "Butt Weld Fittings",
      description:
        "Premium quality butt weld fittings for permanent, leak-proof connections in high-pressure and high-temperature piping systems. Available in SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy.",
      category: "Pipe Fittings",
      material:
        "Stainless Steel, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline:
        "Butt Weld Fittings - Seamless Weld Fittings for High-Pressure Systems",
      summary:
        "Starlight Tubes manufactures premium butt weld fittings including elbows, tees, reducers, and caps in stainless steel and carbon steel. ASME B16.9 certified for permanent, leak-proof connections.",
    },
    entityType: "Product",
    relatedEntities: [
      "Butt Weld Fittings",
      "ASME B16.9",
      "Seamless Weld Fittings",
      "Pipe Fittings",
      "Butt Weld Elbow",
      "Butt Weld Tee",
      "Butt Weld Reducer",
      "Industrial Piping",
    ],
    faqSchema: [
      {
        question: "What are butt weld fittings used for?",
        answer:
          "Butt weld fittings are used for permanent, leak-proof connections in high-pressure and high-temperature piping systems. They are welded directly to the pipe, providing smooth flow transitions and are ideal for oil & gas, petrochemical, and power generation industries.",
      },
      {
        question: "What materials are butt weld fittings available in?",
        answer:
          "Butt weld fittings are available in stainless steel (304, 316, 321), carbon steel (A234 WPB), alloy steel, and nickel alloys including Inconel, Monel, and Hastelloy. All fittings comply with ASME B16.9 and ASTM A403 standards.",
      },
    ],
  });
  const projects = [
    {
      title: "Butt Weld Fittings",
      img: "/pipe-fittings/buttweld-fitting.jpg",
    },
    {
      title: "Butt Weld Elbow",
      img: "/pipe-fittings/pipe-fittings.jpg",
    },
    {
      title: "Butt Weld Tee",
      img: "/pipe-fittings/butt-weld-tee.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Butt Weld Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality butt weld fittings designed for permanent, leak-proof connections in high-pressure and high-temperature applications. Our butt weld fittings provide smooth flow transitions and are ideal for critical piping systems in oil & gas, petrochemical, and power generation industries.",
    paragraph2:
      "Available in various materials and schedules, our butt weld fittings are manufactured using premium grade materials and undergo rigorous quality testing to ensure compliance with ASME B16.9, ASTM A403, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/2" to 48", Schedule 5S to XXS',
      },
      {
        label: "Types",
        value: "Elbows, Tees, Reducers, Caps, Stub Ends, Crosses",
      },
      {
        label: "Standards",
        value: "ASME B16.9, ASTM A403, ASTM A234, MSS SP-43",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Butt Weld Fittings Supplier",
    description:
      "Starlight Tubes delivers premium butt weld fittings with unmatched quality and reliability for high-pressure piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "High-Pressure Applications",
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
            title="Butt Weld Fittings"
            subtitle="Premium quality butt weld fittings for high-pressure applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Butt Weld Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Butt Weld Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality butt weld fittings for permanent, leak-proof
            connections in high-pressure systems
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

export default ButtWeldFittings;
