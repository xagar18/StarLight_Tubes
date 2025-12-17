import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { ImagesSliderDemo } from "../components/main components/ImageSlider";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { CommonCTA } from "../components/sub components/ StainlessSteelTubeCTA";

const Material = () => {
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
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

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
