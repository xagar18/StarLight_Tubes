import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const Aluminium6063 = () => {
  useSEO({
    title:
      "Aluminium 6063 Manufacturer - Architectural Grade Extrusions | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 6063 manufacturer and global exporter. Premium architectural grade aluminium extrusions, pipes, and profiles for construction and decorative applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
    keywords:
      "aluminium 6063 manufacturer, architectural aluminium exporter, 6063 aluminium extrusion manufacturer, aluminium profile supplier, window frame aluminium factory, 6063-T6 aluminium manufacturer, extrudable aluminium alloy, 6063 aluminium pipe stockist, decorative aluminium manufacturer, construction aluminium wholesaler",
    url: "https://www.starlighttubes.com/aluminium-6063",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
      {
        name: "Aluminium 6063",
        url: "https://www.starlighttubes.com/aluminium-6063",
      },
    ],
    productSchema: {
      name: "Aluminium 6063 Alloy Products",
      description:
        "Premium quality Aluminium 6063 alloy with excellent extrudability, corrosion resistance, and surface finish for construction, window frames, and decorative applications.",
      category: "Aluminium Products > Aluminium 6063",
      material:
        "Aluminium 6063 (Al 97.5%, Mg 0.45-0.9%, Si 0.2-0.6%, Fe ≤0.35%)",
      brand: "Starlight Tubes",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium 6063 - Architectural Grade Alloy",
      summary:
        "Starlight Tubes manufactures Aluminium 6063 extrusions and profiles for construction, window frames, and decorative applications. Excellent surface finish and anodizing response.",
    },
    entityType: "Product",
    relatedEntities: [
      "Aluminium 6063",
      "Architectural Aluminium",
      "Aluminium Extrusion",
      "Window Frames",
      "6063-T5",
      "6063-T6",
      "Anodizable Aluminium",
    ],
    faqSchema: [
      {
        question: "What is 6063 aluminium used for?",
        answer:
          "6063 aluminium is used in window frames, door frames, architectural trim, curtain walls, pipe railings, and decorative applications due to its excellent extrudability, surface finish, and anodizing response.",
      },
      {
        question: "What is the difference between 6061 and 6063 aluminium?",
        answer:
          "6063 has better extrudability and surface finish for architectural applications, while 6061 offers higher strength for structural use. 6063 anodizes better, 6061 machines better.",
      },
    ],
  });
  const projects = [
    {
      title: "Aluminium 6063 Pipe",
      img: "/alumininum-pipe/aluminium-pipes.jpg",
    },
    {
      title: "Aluminium 6063 Extrusion",
      img: "/aluminium-alloy/aluminum-extrusion.jpg",
    },
    {
      title: "Aluminium 6063 Profile",
      img: "/aluminium-alloy/aluminum-profile.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium 6063 Alloy",
    paragraph1:
      "Starlight Tubes supplies high-quality Aluminium 6063 alloy products that offer excellent extrudability, corrosion resistance, and surface finish. This architectural alloy is widely used in construction, window frames, and decorative applications.",
    paragraph2:
      "Available in various forms and tempers, our Aluminium 6063 products are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, EN, and international specifications.",
    specifications: [
      {
        label: "Composition",
        value:
          "Aluminum 97.5%, Magnesium 0.45-0.9%, Silicon 0.2-0.6%, Iron ≤0.35%",
      },
      {
        label: "Tensile Strength",
        value: "185 MPa (T6 temper)",
      },
      {
        label: "Yield Strength",
        value: "145 MPa (T6 temper)",
      },
      {
        label: "Standards",
        value: "ASTM B209, ASTM B210, ASTM B221, EN 573",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium 6063 Supplier",
    description:
      "Starlight Tubes delivers premium Aluminium 6063 alloy products with unmatched quality and reliability for construction and architectural applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Extrusions Available",
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
            title="Aluminium 6063"
            subtitle="Premium quality Aluminium 6063 alloy for architectural applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium 6063 Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium 6063 Alloy
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Aluminium 6063 alloy for construction and
            architectural applications
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

export default Aluminium6063;
