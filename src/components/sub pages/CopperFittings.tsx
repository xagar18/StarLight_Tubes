import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CopperFittings = () => {
  useSEO({
    title:
      "Copper Fittings Manufacturer - Elbows, Tees, Couplings | Starlight Tubes Global Exporter",
    description:
      "Leading copper fittings manufacturer and global exporter. Premium copper elbows, tees, couplings, adapters for plumbing, HVAC, and refrigeration systems. ISO certified manufacturer supplying to 60+ countries worldwide.",
    keywords:
      "copper fittings manufacturer, copper pipe fittings exporter, copper elbow manufacturer, copper tee supplier, copper coupling factory, plumbing copper fittings, HVAC copper fittings manufacturer, refrigeration fittings supplier, threaded copper fittings, soldered copper fittings, copper fittings wholesaler",
    url: "https://www.starlighttubes.com/copper-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Copper", url: "https://www.starlighttubes.com/copper" },
      {
        name: "Copper Fittings",
        url: "https://www.starlighttubes.com/copper-fittings",
      },
    ],
    productSchema: {
      name: "Copper Pipe Fittings",
      description:
        "Premium quality copper fittings including elbows, tees, couplings, and adapters for plumbing, HVAC, and industrial applications.",
      category: "Copper Products > Copper Fittings",
      material: "Copper (ASTM B75, ASTM B88, ASME B16.22, EN 1254)",
      brand: "Starlight Tubes",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Copper Fittings - Elbows, Tees & Couplings",
      summary:
        "Starlight Tubes manufactures copper fittings for plumbing, HVAC, and refrigeration systems. Elbows, tees, couplings, and adapters available per ASME B16.22 and EN 1254 standards.",
    },
    entityType: "Product",
    relatedEntities: [
      "Copper Fittings",
      "Copper Elbow",
      "Copper Tee",
      "Copper Coupling",
      "ASME B16.22",
      "Plumbing Fittings",
      "Solder Fittings",
    ],
    faqSchema: [
      {
        question: "What types of copper fittings are available?",
        answer:
          "Copper fittings include elbows (45° and 90°), tees, couplings, adapters, reducers, caps, and unions in threaded, soldered, compression, and push-fit connection types.",
      },
      {
        question:
          "What is the difference between solder and compression copper fittings?",
        answer:
          "Solder fittings require heat and flux to create permanent joints, while compression fittings use mechanical pressure for tool-free, reusable connections suitable for accessible locations.",
      },
    ],
  });
  const projects = [
    {
      title: "Copper Elbow Fittings",
      img: "/copper-fittings/copper-elbow-fittings.jpg",
    },
    {
      title: "Copper Tee Fittings",
      img: "/copper-fittings/copper-tee.jpg",
    },
    {
      title: "Copper Coupling Fittings",
      img: "/copper-fittings/copper-coupling.webp",
    },
  ];

  const ctaData = {
    title: "Premium Copper Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality copper fittings that provide reliable connections for plumbing, HVAC, and industrial systems. Our copper fittings offer excellent corrosion resistance and thermal conductivity for demanding applications.",
    paragraph2:
      "Available in various types and sizes, our copper fittings are manufactured using premium grade raw materials and undergo rigorous quality testing. We provide complete fitting solutions including elbows, tees, couplings, and custom configurations.",
    specifications: [
      {
        label: "Types",
        value: "Elbows, Tees, Couplings, Adapters, Nipples, Plugs",
      },
      {
        label: "Size Range",
        value: '1/8" to 4" (DN6 to DN100)',
      },
      {
        label: "Connection Types",
        value: "Threaded, Soldered, Compression, Push-fit",
      },
      {
        label: "Standards",
        value: "ASTM B75, ASTM B88, ASME B16.22, EN 1254",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Fittings Supplier",
    description:
      "Starlight Tubes delivers premium copper fittings with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your plumbing and industrial fitting requirements.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Complete Fitting Range",
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
            title="Copper Fittings"
            subtitle="Premium quality copper fittings for plumbing and industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Copper Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper fittings manufactured to meet international
            standards for plumbing and industrial applications
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
              Explore More Copper Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality copper products for your
              plumbing and industrial applications
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

export default CopperFittings;
