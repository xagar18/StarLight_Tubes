import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ReducerFittings = () => {
  useSEO({
    title:
      "Reducer Fittings Manufacturer - Concentric & Eccentric Reducers | Starlight Tubes Global Exporter",
    description:
      "Leading reducer fittings manufacturer & global exporter. Premium concentric reducers, eccentric reducers in butt weld, socket weld types. ASME B16.9 certified. SS, carbon steel, alloy steel. Export to 60+ countries.",
    keywords:
      "reducer fittings manufacturer, reducer fittings exporter, concentric reducer manufacturer, eccentric reducer supplier, butt weld reducer exporter, pipe reducer fittings manufacturer, reducer fittings UAE, reducer fittings Saudi Arabia, pipe fittings manufacturer India",
    url: "https://www.starlighttubes.com/reducer-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Reducer Fittings",
        url: "https://www.starlighttubes.com/reducer-fittings",
      },
    ],
    productSchema: {
      name: "Reducer Fittings",
      description:
        "Premium quality reducer fittings for connecting pipes of different diameters. Concentric and eccentric reducers in butt weld, socket weld types. SS 304/316/321, Carbon Steel, Alloy Steel.",
      category: "Pipe Fittings",
      material:
        "Stainless Steel, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Pipe Reducers - Concentric and Eccentric Reducers",
      summary:
        "Starlight Tubes manufactures pipe reducers including concentric and eccentric reducers in stainless steel and carbon steel. ASME B16.9 certified for smooth diameter transitions.",
    },
    entityType: "Product",
    relatedEntities: [
      "Pipe Reducers",
      "Concentric Reducer",
      "Eccentric Reducer",
      "ASME B16.9",
      "Butt Weld Reducer",
      "Diameter Transition",
      "Pipe Size Reduction",
      "Industrial Piping",
    ],
    faqSchema: [
      {
        question:
          "What is the difference between concentric and eccentric reducers?",
        answer:
          "Concentric reducers have a common centerline, maintaining the pipe center axis. Eccentric reducers have offset centerlines with one flat side, used in horizontal pipelines to prevent air pockets (flat side up) or allow drainage (flat side down).",
      },
      {
        question: "When should eccentric reducers be used?",
        answer:
          "Eccentric reducers are used in horizontal pump suction lines (flat side up to prevent cavitation), in slurry or liquid lines requiring drainage (flat side down), and where maintaining pipe bottom elevation is critical for flow.",
      },
    ],
  });
  const projects = [
    {
      title: "Reducer Fittings",
      img: "/reducer-fittings/reducer-fitting.jpg",
    },
    {
      title: "Concentric Reducer",
      img: "/reducer-fittings/concentric-reducer.jpg",
    },
    {
      title: "Eccentric Reducer",
      img: "/reducer-fittings/eccentric-reducer.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Reducer Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality reducer fittings designed for connecting pipes of different diameters. Our reducers provide smooth flow transitions and are available in concentric and eccentric configurations for various piping system requirements.",
    paragraph2:
      "Available in multiple connection types including butt weld, socket weld, and threaded, our reducer fittings are manufactured from premium materials and undergo rigorous quality testing to ensure leak-proof performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Concentric Reducer, Eccentric Reducer",
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
    title: "Your Trusted Reducer Fittings Supplier",
    description:
      "Starlight Tubes delivers premium reducer fittings with unmatched quality and reliability for diameter transitions in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Concentric & Eccentric Options",
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
            title="Reducer Fittings"
            subtitle="Premium quality reducer fittings for diameter transitions"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Reducer Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Reducer Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality reducer fittings for connecting pipes of different
            diameters
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

export default ReducerFittings;
