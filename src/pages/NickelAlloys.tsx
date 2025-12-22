import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

const NickelAlloys = () => {
  const ctaData = {
    title: "Nickel Alloy Products",
    paragraph1:
      "Starlight Tubes is India's trusted exporter and stockist of premium Nickel Alloy products. We supply high-performance nickel pipes, tubes, sheets, plates, and round bars that offer exceptional resistance to corrosion, high temperatures, and aggressive chemical environments.",
    paragraph2:
      "Our nickel alloy products are ideal for chemical processing, petrochemical, marine, aerospace, and power generation industries. We source from globally recognized mills and provide complete certification including mill test certificates, PMI reports, and compliance with ASTM, ASME, and NACE standards.",
    specifications: [
      {
        label: "Grades Available",
        value:
          "Nickel 200, Nickel 201, Monel 400, Monel K500, Hastelloy C276, Hastelloy C22",
      },
      {
        label: "Products",
        value:
          "Seamless & Welded Pipes, Tubes, Sheets, Plates, Round Bars, Fittings, Flanges",
      },
      {
        label: "Size Range",
        value:
          'Pipes: 1/8" to 12" NB | Sheets: 0.5mm to 50mm | Round Bars: 5mm to 300mm',
      },
      {
        label: "Standards",
        value: "ASTM B161, B162, B163, B164, B165, B166, B564, B574, B575",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Nickel Alloy Products"
          subtitle="Nickel 200/201, Monel, Hastelloy for high-temperature applications"
          image="/MainScrollableImage/Home2.webp"
        />

        <div>
          {/* Nickel Alloys Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
                Nickel Alloys
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Nickel Alloy Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              High-performance nickel alloy pipes, sheets, plates, and round
              bars for extreme environments
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

export default NickelAlloys;
