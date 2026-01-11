import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { BottomCTA } from "../components/sub components/BottomCTA";
import { CommonCTA } from "../components/sub components/CommonCTA";

const Material = () => {
  useSEO({
    title:
      "Industrial Materials - Stainless Steel, Carbon Steel, Nickel Alloys, Inconel | Starlight Tubes Manufacturer",
    description:
      "Premium industrial materials from Starlight Tubes - leading manufacturer and exporter. Stainless steel 304, 316, 316L, duplex, super duplex. Carbon steel ASTM A106, API 5L. Nickel alloys Monel, Hastelloy. Inconel 625, 600, 718. Pipes, tubes, plates, sheets, round bars. Export to 60+ countries.",
    keywords:
      "industrial materials manufacturer, stainless steel materials, carbon steel materials, nickel alloy materials, inconel materials, industrial metal supplier, steel materials India, metal materials exporter, SS materials, MS materials, alloy materials, high temperature materials, corrosion resistant materials, aerospace materials, petrochemical materials",
    url: "https://www.starlighttubes.com/materials",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Materials", url: "https://www.starlighttubes.com/materials" },
    ],
    speakableContent: {
      headline: "Industrial Materials - Steel, Nickel Alloys & Inconel",
      summary:
        "Starlight Tubes supplies premium industrial materials including stainless steel, carbon steel, nickel alloys, and Inconel superalloys in pipes, tubes, plates, sheets, and round bars for global industries.",
    },
    entityType: "Product",
    relatedEntities: [
      "stainless steel materials",
      "carbon steel materials",
      "nickel alloy materials",
      "inconel materials",
      "industrial metals",
      "aerospace materials",
      "petrochemical materials",
    ],
    faqSchema: [
      {
        question: "What industrial materials does Starlight Tubes supply?",
        answer:
          "We supply stainless steel (304, 316, 316L, duplex, super duplex), carbon steel (ASTM A106, API 5L), nickel alloys (Monel, Hastelloy), and Inconel (625, 600, 718) in pipes, tubes, plates, sheets, round bars, and fasteners.",
      },
      {
        question: "What industries do Starlight Tubes materials serve?",
        answer:
          "Our materials serve oil & gas, petrochemical, power generation, aerospace, marine, pharmaceutical, and chemical processing industries worldwide with export to 60+ countries.",
      },
      {
        question: "How do I select the right material for my application?",
        answer:
          "Contact our technical team for material selection guidance based on your application requirements including temperature, pressure, corrosion environment, and mechanical properties. We provide expert consultation for optimal material choice.",
      },
    ],
  });
  const ctaData = {
    title: "Premium Industrial Materials",
    paragraph1:
      "Starlight Tubes is India's leading exporter and stockist of premium industrial materials including Stainless Steel, Nickel Alloys, Inconel, and Carbon Steel products. With over 5 years of excellence in global trade, we source and supply high-quality pipes, tubes, plates, sheets, round bars, and fasteners that meet the most stringent international standards for critical applications in oil & gas, petrochemical, power generation, aerospace, and marine industries.",
    paragraph2:
      "Our comprehensive product range covers diverse material grades and specifications to meet your exact requirements. From corrosion-resistant stainless steel to high-temperature Inconel alloys, we provide customized solutions backed by rigorous quality testing, mill test certificates, and compliance with ASTM, ASME, API, DIN, and EN standards. Trusted by 50+ organizations across 5+ countries.",
    specifications: [
      {
        label: "Stainless Steel",
        value:
          "304, 304L, 316, 316L, 321, 310S, 347, 904L, Duplex & Super Duplex",
      },
      {
        label: "Nickel & Inconel",
        value:
          "Nickel 200/201, Inconel 600, 601, 625, 718, 725, 800, 825, X-750",
      },
      {
        label: "Carbon Steel",
        value: "ASTM A106, A53, A333, API 5L Gr.B, X42, X52, X65, A671, A672",
      },
      {
        label: "Product Forms",
        value: "Pipes, Tubes, Plates, Sheets, Round Bars, Fasteners, Wire",
      },
    ],
  };

  const bottomCtaData = {
    title: "Partner With India's Leading Material Supplier",
    description:
      "Starlight Tubes delivers unmatched quality, competitive pricing, and reliable supply chain solutions for all your industrial material needs. With 5+ years of export excellence and 50+ satisfied clients worldwide, we are your trusted partner for critical applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Complete Mill Test Certificates",
      "Custom Sizes & Specifications",
      "Worldwide Shipping Network",
      "Competitive Factory Pricing",
      "Technical Support 24/7",
      "Third Party Inspection",
      "On-Time Delivery Guaranteed",
      "Bulk Order Discounts",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Premium Industrial Materials"
          subtitle="High-quality Stainless Steel, Carbon Steel, Nickel Alloys & Inconel Products"
          image="/MainScrollableImage/Home2.webp"
        />

        <div>
          {/* Materials Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                Our Materials
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Industrial Materials & Alloys
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Comprehensive range of premium quality metals and alloys
              manufactured to meet international standards
            </p>
          </div>

          {/* Common CTA Section */}
          <div className="w-full h-fit flex justify-center mb-16">
            <CommonCTA
              title={ctaData.title}
              paragraph1={ctaData.paragraph1}
              paragraph2={ctaData.paragraph2}
              specifications={ctaData.specifications}
            />
          </div>
        </div>

        <div>
          <InfiniteMovingCardsDemo />
        </div>

        {/* Bottom CTA Section */}
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

export default Material;
