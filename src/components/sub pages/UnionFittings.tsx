import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const UnionFittings = () => {
  useSEO({
    title:
      "Union Fittings Manufacturer - Pipe Unions | Starlight Tubes Global Exporter",
    description:
      "Leading union fittings manufacturer & global exporter. Premium threaded unions, socket weld unions, butt weld unions for easy disassembly. ASME B16.11 certified. SS, carbon steel. Export to 60+ countries.",
    keywords:
      "union fittings manufacturer, union fittings exporter, threaded union manufacturer, socket weld union supplier, butt weld union exporter, pipe union fittings manufacturer, union fittings UAE, union fittings Saudi Arabia, pipe fittings manufacturer India",
    url: "https://www.starlighttubes.com/union-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Union Fittings",
        url: "https://www.starlighttubes.com/union-fittings",
      },
    ],
    productSchema: {
      name: "Union Fittings",
      description:
        "Premium quality union fittings for easy disassembly and maintenance of piping systems. Threaded, socket weld, and butt weld unions. SS 304/316/321, Carbon Steel, Alloy Steel materials.",
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
        "Pipe Unions - Threaded and Socket Weld Unions for Easy Maintenance",
      summary:
        "Starlight Tubes manufactures pipe unions including threaded unions and socket weld unions in stainless steel and carbon steel. Designed for easy disassembly and maintenance per ASME B16.11.",
    },
    entityType: "Product",
    relatedEntities: [
      "Pipe Unions",
      "Threaded Union",
      "Socket Weld Union",
      "ASME B16.11",
      "Pipe Disassembly",
      "Maintenance Fittings",
      "Union Nut",
      "Ground Joint Union",
    ],
    faqSchema: [
      {
        question: "What are pipe unions used for?",
        answer:
          "Pipe unions are three-piece fittings that allow easy disconnection and reconnection of pipes without cutting or welding. They consist of a female end, male end, and union nut, making them ideal for equipment maintenance, valve replacement, and system modifications.",
      },
      {
        question: "What is the difference between a union and a coupling?",
        answer:
          "A union is a three-piece fitting that can be disconnected by loosening the union nut, allowing pipes to be separated without rotation. A coupling is a single-piece fitting that permanently connects two pipes and requires cutting to separate them.",
      },
    ],
  });
  const projects = [
    {
      title: "Union Fittings",
      img: "/union-fittings/union-fittings.jpg",
    },
    {
      title: "Threaded Union",
      img: "/union-fittings/threaded-union.jpg",
    },
    {
      title: "Socket Weld Union",
      img: "/union-fittings/socket-weld-union.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Union Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality union fittings designed for easy disassembly and reassembly of piping systems. Our unions allow for quick maintenance and repairs without cutting the pipe, making them essential for systems requiring frequent servicing.",
    paragraph2:
      "Available in multiple connection types including threaded and socket weld, our union fittings are manufactured from premium materials and undergo rigorous quality testing to ensure reliable performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Threaded Union, Socket Weld Union, Butt Weld Union",
      },
      {
        label: "Size Range",
        value: '1/8" to 4", Class 3000/6000/9000',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.11, MSS SP-83",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Union Fittings Supplier",
    description:
      "Starlight Tubes delivers premium union fittings with unmatched quality and reliability for easy maintenance and repairs in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Easy Disassembly",
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
            title="Union Fittings"
            subtitle="Premium quality union fittings for easy maintenance"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Union Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Union Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality union fittings for easy disassembly and maintenance
            of piping systems
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

export default UnionFittings;
