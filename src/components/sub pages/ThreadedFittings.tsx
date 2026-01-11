import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ThreadedFittings = () => {
  useSEO({
    title:
      "Threaded Fittings Manufacturer - NPT BSP Fittings | Starlight Tubes Global Exporter",
    description:
      "Leading threaded fittings manufacturer & global exporter. Premium NPT, BSP, BSPT threaded pipe fittings in SS, carbon steel. ASME B16.11 certified. Easy assembly fittings. Export to 60+ countries worldwide.",
    keywords:
      "threaded fittings manufacturer, threaded fittings exporter, NPT fittings manufacturer, BSP fittings supplier, BSPT fittings exporter, threaded pipe fittings manufacturer, forged threaded fittings, threaded fittings UAE, threaded fittings Saudi Arabia, pipe fittings manufacturer India",
    url: "https://www.starlighttubes.com/threaded-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Threaded Fittings",
        url: "https://www.starlighttubes.com/threaded-fittings",
      },
    ],
    productSchema: {
      name: "Threaded Fittings",
      description:
        "Premium quality threaded fittings for easy assembly and disassembly in piping systems. Available in NPT, BSPT, BSPP, Metric threads. SS 304/316/321, Carbon Steel, Alloy Steel materials.",
      category: "Pipe Fittings",
      material:
        "Stainless Steel, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Threaded Fittings - NPT, BSP, BSPT Pipe Fittings",
      summary:
        "Starlight Tubes manufactures threaded pipe fittings in NPT, BSP, and BSPT thread standards. Easy assembly and disassembly for instrumentation and maintenance applications per ASME B16.11.",
    },
    entityType: "Product",
    relatedEntities: [
      "Threaded Fittings",
      "NPT Fittings",
      "BSP Fittings",
      "BSPT Fittings",
      "ASME B16.11",
      "Forged Fittings",
      "Threaded Elbow",
      "Threaded Tee",
      "Pipe Threads",
    ],
    faqSchema: [
      {
        question: "What is the difference between NPT and BSP threads?",
        answer:
          "NPT (National Pipe Thread) is the American standard with tapered threads that seal on the thread itself. BSP (British Standard Pipe) comes in parallel (BSPP) and tapered (BSPT) versions. NPT uses a 60° thread angle while BSP uses 55°. They are not interchangeable.",
      },
      {
        question:
          "When should threaded fittings be used instead of welded fittings?",
        answer:
          "Threaded fittings are ideal for low to medium pressure applications where easy assembly, disassembly, and maintenance are required. They are commonly used in instrumentation, pneumatic systems, and applications requiring frequent servicing without cutting pipes.",
      },
    ],
  });
  const projects = [
    {
      title: "Threaded Fittings",
      img: "/threaded-fittings/thread-fittings.jpg",
    },
    {
      title: "Threaded Elbow",
      img: "/socket-weld/socket-elbow.jpg",
    },
    {
      title: "Threaded Tee",
      img: "/socket-weld/socket-tee.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Threaded Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality threaded fittings designed for easy assembly and disassembly in low to medium pressure applications. Our threaded fittings provide reliable connections and are ideal for instrumentation, process lines, and systems requiring frequent maintenance.",
    paragraph2:
      "Available in various materials and pressure ratings, our threaded fittings are manufactured using premium grade materials and undergo rigorous quality testing to ensure compliance with ASME B16.11, ASTM A403, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/8" to 4", Class 2000/3000/6000',
      },
      {
        label: "Thread Standards",
        value: "NPT, BSPT, BSPP, Metric Threads",
      },
      {
        label: "Standards",
        value: "ASME B16.11, ASTM A403, ASTM A182, MSS SP-79",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Threaded Fittings Supplier",
    description:
      "Starlight Tubes delivers premium threaded fittings with unmatched quality and reliability for easy assembly and maintenance.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Easy Assembly/Disassembly",
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
            title="Threaded Fittings"
            subtitle="Premium quality threaded fittings for easy assembly and maintenance"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Threaded Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Threaded Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality threaded fittings for easy assembly and disassembly
            in various applications
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

export default ThreadedFittings;
