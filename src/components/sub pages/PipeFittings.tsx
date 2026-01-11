import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const PipeFittings = () => {
  useSEO({
    title:
      "Pipe Fittings Manufacturer - Elbows, Tees, Reducers, Couplings | Starlight Tubes Global Exporter",
    description:
      "Leading pipe fittings manufacturer and exporter. Steel elbows, tees, reducers, couplings, caps, stub ends for industrial applications. Butt weld, socket weld, threaded fittings. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
    keywords:
      "pipe fittings manufacturer, steel fittings manufacturer, elbow fittings, tee fittings, reducer fittings, coupling fittings, butt weld fittings, socket weld fittings, threaded fittings, pipe fittings exporter, industrial fittings India",
    url: "https://www.starlighttubes.com/pipe-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Pipe Fittings",
        url: "https://www.starlighttubes.com/pipe-fittings",
      },
    ],
    productSchema: {
      name: "Pipe Fittings - Elbows, Tees, Reducers, Couplings",
      description:
        "Premium steel pipe fittings including elbows, tees, reducers, couplings, caps, stub ends in butt weld, socket weld, and threaded configurations.",
      category: "Pipe Fittings",
      material: "Stainless Steel, Carbon Steel, Alloy Steel",
      offers: {
        priceCurrency: "USD",
        lowPrice: "5",
        highPrice: "1500",
        availability: "https://schema.org/InStock",
      },
    },
  });
  const projects = [
    {
      title: "Pipe Fittings",
      img: "/pipe-fittings/pipe-fittings.jpg",
    },
    {
      title: "Butt Weld Fittings",
      img: "/pipe-fittings/buttweld-fitting.jpg",
    },
    {
      title: "Flanges",
      img: "/pipe-fittings/flanges.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Pipe Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality pipe fittings that meet international standards. Our fittings are engineered for superior performance, durability, and leak-proof connections in demanding industrial applications including oil & gas, petrochemical, and power generation.",
    paragraph2:
      "Available in various materials including stainless steel, carbon steel, alloy steel, and nickel alloys, our pipe fittings undergo rigorous quality testing to ensure compliance with ASTM, ASME, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/8" to 48", Schedule 5S to XXS, Various pressure ratings',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.9, B16.11, B16.28, MSS SP-43",
      },
      {
        label: "Types",
        value: "Elbows, Tees, Reducers, Caps, Couplings, Unions, Nipples",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Pipe Fittings Supplier",
    description:
      "Starlight Tubes delivers premium pipe fittings with unmatched quality and reliability for all your industrial piping needs.",
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
            title="Pipe Fittings"
            subtitle="Premium quality pipe fittings for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Pipe Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Industrial Pipe Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality pipe fittings manufactured to meet international
            standards
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
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Fittings
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

export default PipeFittings;
