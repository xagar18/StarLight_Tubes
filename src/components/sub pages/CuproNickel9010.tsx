import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CuproNickel9010 = () => {
  useSEO({
    title:
      "CuNi 90/10 Pipe Manufacturer - C70600 Copper Nickel Marine Pipe | Starlight Tubes Global Exporter",
    description:
      "Leading CuNi 90/10 pipe manufacturer & global exporter. ASTM B466 C70600 copper nickel pipes for marine, desalination & offshore applications. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "CuNi 90/10 pipe manufacturer, copper nickel 9010 exporter, ASTM B466 supplier, C70600 pipe manufacturer, marine pipe, desalination pipe, seawater resistant pipe, CuNi pipe UAE, copper nickel pipe Saudi Arabia, CuNi 90/10 manufacturer India",
    url: "https://www.starlighttubes.com/copper-nickel-90-10",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      { name: "Copper", url: "https://www.starlighttubes.com/copper" },
      {
        name: "CuNi 90/10",
        url: "https://www.starlighttubes.com/copper-nickel-90-10",
      },
    ],
    productSchema: {
      name: "Cupro Nickel 90/10 Pipe",
      description:
        "Premium CuNi 90/10 (C70600) pipes with excellent seawater corrosion resistance. ASTM B466/B467 certified copper nickel pipes for marine, desalination, and offshore applications.",
      category: "Copper Nickel Pipes",
      material:
        "Cupro Nickel 90/10 (C70600 - 88-90% Copper, 9-11% Nickel, 1-1.8% Iron)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Cupro Nickel 90/10 - C70600 Marine Alloy",
      summary:
        "Starlight Tubes manufactures CuNi 90/10 (C70600) pipes and tubes for marine, desalination, and offshore applications. ASTM B466/B467 certified with excellent seawater corrosion resistance.",
    },
    entityType: "Product",
    relatedEntities: [
      "Cupro Nickel 90/10",
      "C70600",
      "CuNi Alloy",
      "Marine Pipe",
      "Desalination",
      "ASTM B466",
      "Seawater Resistant",
    ],
    faqSchema: [
      {
        question: "What is CuNi 90/10 alloy?",
        answer:
          "CuNi 90/10 (C70600) is a copper-nickel alloy containing 88-90% copper, 9-11% nickel, and 1-1.8% iron. It offers excellent seawater corrosion resistance and biofouling resistance for marine applications.",
      },
      {
        question: "Where is Cupro Nickel 90/10 used?",
        answer:
          "Cupro Nickel 90/10 is used in marine piping systems, seawater cooling, desalination plants, offshore platforms, shipbuilding, and coastal power plant condensers.",
      },
    ],
  });
  const projects = [
    {
      title: "Cupro Nickel 90/10 Pipe",
      img: "/copper-pipe/copper-pipe-supplier1.jpg",
    },
    {
      title: "Cupro Nickel 90/10 Tube",
      img: "/copper-pipe/copper-pipe-supplier2.jpg",
    },
    {
      title: "Cupro Nickel 90/10 Fittings",
      img: "/cupro-nickel-90/cupro-nickel-90-10-fittings.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Cupro Nickel 90/10",
    paragraph1:
      "Starlight Tubes supplies high-quality Cupro Nickel 90/10 (C70600) alloy products that offer excellent corrosion resistance in marine environments. This alloy provides superior resistance to seawater corrosion and biofouling.",
    paragraph2:
      "Our Cupro Nickel 90/10 products are manufactured using premium grade raw materials and undergo rigorous quality testing. Available in pipes, tubes, and fittings, we provide complete solutions for marine, offshore, and desalination applications.",
    specifications: [
      {
        label: "Grade",
        value: "C70600 (CuNi 90/10)",
      },
      {
        label: "Composition",
        value: "Copper 88-90%, Nickel 9-11%, Iron 1-1.8%",
      },
      {
        label: "Size Range",
        value: "OD 6mm to 300mm, Wall Thickness 0.5mm to 15mm",
      },
      {
        label: "Standards",
        value: "ASTM B111, ASTM B466, ASTM B467, BS 2871",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Cupro Nickel 90/10 Supplier",
    description:
      "Starlight Tubes delivers premium Cupro Nickel 90/10 products with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your marine and industrial requirements.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Marine Grade Quality",
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
            title="Cupro Nickel 90/10"
            subtitle="Premium quality Cupro Nickel 90/10 for marine and industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Cupro Nickel 90/10 Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Cupro Nickel 90/10
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Cupro Nickel 90/10 manufactured to meet
            international standards for marine and industrial applications
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
              marine and industrial applications
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

export default CuproNickel9010;
