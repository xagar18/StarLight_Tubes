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
      "Stainless Steel Products - Starlight Tubes | Pipes, Tubes, Sheets, Plates | Middle East Suppliers",
    description:
      "Leading stainless steel products manufacturer and exporter. Premium 304, 316, 316L stainless steel pipes, tubes, sheets, plates, round bars, fasteners. ASTM, ASME certified. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "stainless steel pipes UAE, stainless steel tubes Saudi Arabia, 304 stainless steel Qatar, 316 stainless steel Oman, stainless steel sheets Kuwait, stainless steel plates Bahrain, duplex stainless steel Middle East, super duplex GCC, stainless steel round bars UAE, stainless steel fasteners Saudi Arabia, ASTM stainless steel Qatar",
    url: "https://www.starlighttubes.com/stainless-steel",
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
