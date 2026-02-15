import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

const StainlessSteel = () => {
  useSEO({
    title:
      "Stainless Steel Pipe Manufacturer & Exporter | 304, 316, 316L Pipes & Tubes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading stainless steel pipe manufacturer and exporter in India. We manufacture 304 stainless steel pipes, 316 stainless steel tubes, 316L pipes, duplex stainless steel, super duplex pipes. Premium quality seamless and welded stainless steel pipes for oil gas, petrochemical, pharmaceutical industries. Export to USA, Europe, Middle East.",
    keywords:
      "stainless steel pipe manufacturer, stainless steel tube manufacturer, stainless steel pipe exporter, 304 stainless steel manufacturer, 316 stainless steel manufacturer, 316L pipe manufacturer, stainless steel seamless pipe manufacturer, stainless steel welded pipe manufacturer, duplex stainless steel manufacturer, super duplex manufacturer, stainless steel pipe factory, stainless steel tube factory, stainless steel sheet manufacturer, stainless steel plate manufacturer, stainless steel round bar manufacturer, SS pipe manufacturer, SS tube exporter, stainless steel pipe supplier India, stainless steel pipe distributor",
    url: "https://www.starlighttubes.com/stainless-steel",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      {
        name: "Stainless Steel",
        url: "https://www.starlighttubes.com/stainless-steel",
      },
    ],
    productSchema: {
      name: "Stainless Steel Pipes and Tubes",
      description:
        "High-quality stainless steel pipes, tubes, and related products including 304, 316, and 316L grades manufactured by Starlight Tubes.",
      category: "Stainless Steel Pipes",
      material: "Stainless Steel",
      offers: {
        priceCurrency: "USD",
        lowPrice: "10",
        highPrice: "5000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Stainless Steel Pipes & Tubes - 304, 316, 316L Grades",
      summary:
        "Starlight Tubes manufactures premium stainless steel pipes and tubes in grades 304, 304L, 316, 316L, 321, duplex, and super duplex for corrosion-resistant industrial applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "304 stainless steel",
      "316 stainless steel",
      "316L stainless steel",
      "duplex stainless steel",
      "super duplex steel",
      "SS seamless pipes",
      "SS welded tubes",
    ],
    faqSchema: [
      {
        question: "What stainless steel grades does Starlight Tubes offer?",
        answer:
          "We offer a comprehensive range including 304, 304L, 316, 316L, 321, 310S, 347, 904L, Duplex 2205, and Super Duplex 2507 grades in pipes, tubes, sheets, plates, round bars, and fasteners.",
      },
      {
        question: "What is the difference between 304 and 316 stainless steel?",
        answer:
          "316 stainless steel contains molybdenum which provides superior corrosion resistance, especially in marine and chemical environments. 304 is more economical and suitable for general applications.",
      },
      {
        question: "What sizes of stainless steel pipes are available?",
        answer:
          "We supply stainless steel pipes from 1/8 inch to 24 inch NB, sheets from 0.5mm to 100mm thickness, and round bars from 3mm to 500mm diameter, meeting ASTM A312, A269, A270, A213 standards.",
      },
    ],
    featuredSnippet: {
      type: "list",
      content: "Stainless Steel Products by Starlight Tubes",
      listItems: [
        "SS 304/304L Pipes & Tubes (ASTM A312 TP304)",
        "SS 316/316L Pipes & Tubes (ASTM A312 TP316)",
        "Duplex 2205 & Super Duplex 2507 Pipes",
        "Stainless Steel Sheets, Plates & Coils",
        "SS Round Bars, Flat Bars & Wire",
        "SS Fasteners - Bolts, Nuts, Washers",
      ],
    },
    qaSchema: [
      {
        question: "What is the price of SS 304 pipe per kg?",
        answer:
          "SS 304 pipe prices vary based on size, wall thickness, and quantity. Starlight Tubes offers competitive factory-direct pricing. Contact us with your specific requirements for the best quote. We offer bulk discounts.",
        upvoteCount: 180,
      },
      {
        question:
          "Which stainless steel grade is best for marine applications?",
        answer:
          "SS 316L and Duplex 2205 are recommended for marine applications due to their superior resistance to chloride-induced corrosion and pitting. SS 316L contains molybdenum for added protection. Super Duplex 2507 offers the highest marine corrosion resistance.",
        upvoteCount: 140,
      },
    ],
  });
  const ctaData = {
    title: "Stainless Steel Products",
    paragraph1:
      "Starlight Tubes is India's leading exporter and stockist of premium Stainless Steel products. We supply a comprehensive range of stainless steel pipes, tubes, plates, sheets, round bars, fasteners, and wire that offer exceptional corrosion resistance, durability, and aesthetic appeal for diverse industrial applications.",
    paragraph2:
      "Our stainless steel products are sourced from top global mills and meet stringent international standards including ASTM, ASME, DIN, EN, and JIS. Ideal for chemical processing, oil & gas, food & beverage, pharmaceutical, marine, and architectural applications. All products come with mill test certificates and full traceability.",
    specifications: [
      {
        label: "Grades Available",
        value:
          "304, 304L, 316, 316L, 321, 310S, 347, 904L, Duplex 2205, Super Duplex 2507",
      },
      {
        label: "Products",
        value:
          "Seamless & Welded Pipes, Tubes, Plates, Sheets, Coils, Round Bars, Fasteners, Wire",
      },
      {
        label: "Size Range",
        value:
          'Pipes: 1/8" to 24" NB | Sheets: 0.5mm to 100mm | Round Bars: 3mm to 500mm',
      },
      {
        label: "Standards",
        value: "ASTM A312, A269, A270, A213, A240, A276, A479, A193, A194",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Stainless Steel Products"
          subtitle="Premium SS 304, 316, 321, Duplex & Super Duplex grades"
          image="/MainScrollableImage/Home.webp"
        />

        <div>
          {/* Stainless Steel Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Stainless Steel
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Stainless Steel Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Premium quality stainless steel pipes, tubes, plates, sheets,
              round bars, and fasteners for industrial applications
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

export default StainlessSteel;
