import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CapFittings = () => {
  useSEO({
    title:
      "Cap Fittings Manufacturer - Pipe End Caps | Starlight Tubes Global Exporter",
    description:
      "Leading cap fittings manufacturer & global exporter. Premium pipe end caps, threaded caps, butt weld caps in SS, carbon steel, alloy steel. ASME B16.9/B16.11 certified. Export to 60+ countries worldwide.",
    keywords:
      "cap fittings manufacturer, cap fittings exporter, pipe end caps manufacturer, threaded caps supplier, butt weld caps exporter, steel pipe caps manufacturer, cap fittings UAE, cap fittings Saudi Arabia, pipe fittings manufacturer India",
    url: "https://www.starlighttubes.com/cap-fittings",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Fittings", url: "https://www.starlighttubes.com/fittings" },
      {
        name: "Cap Fittings",
        url: "https://www.starlighttubes.com/cap-fittings",
      },
    ],
    productSchema: {
      name: "Cap Fittings",
      description:
        "Premium quality cap fittings for sealing pipe ends. Available in threaded, butt weld, and socket weld types. SS 304/316/321, Carbon Steel, Alloy Steel materials.",
      category: "Pipe Fittings",
      material:
        "Stainless Steel, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Pipe Caps - End Caps for Sealing Pipe Ends",
      summary:
        "Starlight Tubes manufactures pipe caps and end caps in stainless steel and carbon steel. Available in butt weld, socket weld, and threaded types per ASME B16.9 and B16.11.",
    },
    entityType: "Product",
    relatedEntities: [
      "Pipe Caps",
      "End Caps",
      "ASME B16.9",
      "ASME B16.11",
      "Butt Weld Cap",
      "Threaded Cap",
      "Socket Weld Cap",
      "Pipe End Closure",
    ],
    faqSchema: [
      {
        question: "What are pipe caps used for?",
        answer:
          "Pipe caps are used to seal the end of pipes permanently or temporarily. They are essential for system testing, maintenance shutdowns, future expansion provisions, and closing off unused pipe ends in piping systems.",
      },
      {
        question: "What is the difference between a cap and a plug?",
        answer:
          "A pipe cap fits over the outside of a pipe end to seal it externally, while a plug fits inside the pipe end. Caps are used for butt weld and socket weld connections, while plugs are typically threaded fittings that screw into female-threaded connections.",
      },
    ],
  });
  const projects = [
    {
      title: "Cap Fittings",
      img: "/cap-fittings/cap-fitting.jpg",
    },
    {
      title: "Pipe Cap",
      img: "/cap-fittings/cap-fitting.jpg",
    },
    {
      title: "End Cap",
      img: "/cap-fittings/end-cap.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Cap Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality cap fittings designed for sealing the ends of pipes. Our caps provide complete closure solutions and are essential for system maintenance, testing, and temporary shutdowns in piping systems.",
    paragraph2:
      "Available in multiple connection types including butt weld, socket weld, and threaded, our cap fittings are manufactured from premium materials and undergo rigorous quality testing to ensure leak-proof sealing and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Pipe Cap, End Cap, Threaded Cap",
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
    title: "Your Trusted Cap Fittings Supplier",
    description:
      "Starlight Tubes delivers premium cap fittings with unmatched quality and reliability for sealing pipe ends in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Leak-Proof Sealing",
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
            title="Cap Fittings"
            subtitle="Premium quality cap fittings for pipe end sealing"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Cap Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Cap Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality cap fittings for sealing pipe ends and system
            closure
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

export default CapFittings;
