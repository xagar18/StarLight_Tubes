import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import Cta from "../components/main components/HomeCta";
import FAQAccordion from "../components/main components/HomeFAQ";
import StatsGrid from "../components/main components/HomeStats";
import { ImagesSliderDemo } from "../components/main components/ImageSlider";
import { MeteorsDemo } from "../components/main components/LinkDisplayCard";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";

const stainlessSteelItems = [
  "Stainless Steel Tube",
  "Stainless Steel Pipe",
  "Stainless Steel Sheet",
  "Stainless Steel Round Bar",
  "Stainless Steel Fasteners",
  "Stainless Steel Wire",
  "304 Stainless Steel Pipe",
  "304 Stainless Steel Plate",
  "316 Stainless Steel Tube",
  "316 Stainless Steel Plate",
  "316L Stainless Steel Pipe",
];

const stainlessSteelLinks = [
  "/stainless-steel-tube",
  "/stainless-steel-pipe",
  "/stainless-steel-sheet",
  "/stainless-steel-round-bar",
  "/stainless-steel-fasteners",
  "/stainless-steel-wire",
  "/stainless-steel-304-pipe",
  "/stainless-steel-304-plate",
  "/stainless-steel-316-tube",
  "/stainless-steel-316-plate",
  "/stainless-steel-316l-pipe",
];

const nickelAlloyItems = [
  "Nickel Pipe",
  "Nickel Sheet",
  "Inconel Pipe",
  "Inconel Plate",
  "Inconel Round Bar",
  "Inconel Bolts",
  "Inconel 600 Plate",
  "Inconel 600 Pipe",
  "Inconel 625 Tubing",
  "Inconel 625 Pipe",
  "Inconel 625 Plate",
];

const nickelAlloyLinks = [
  "/nickel-pipe",
  "/nickel-sheet",
  "/inconel-pipe",
  "/inconel-plate",
  "/inconel-round-bar",
  "/inconel-bolts",
  "/inconel-600-plate",
  "/inconel-600-pipe",
  "/inconel-625-tubing",
  "/inconel-625-pipe",
  "/inconel-625-plate",
];

const carbonSteelItems = [
  "Carbon Steel Pipe",
  "ASTM A106",
  "ASTM A53",
  "ASTM A333",
  "API 5L Grade B",
  "API 5L X65",
  "API 5L X52",
  "API 5L X42",
  "A671 Pipe",
  "A672 Pipe",
];

const carbonSteelLinks = [
  "/carbon-steel-pipe",
  "/astm-a106-pipe",
  "/astm-a53-pipe",
  "/astm-a333-pipe",
  "/api-5l-grade-b-pipe",
  "/api-5l-x65-pipe",
  "/api-5l-x52-pipe",
  "/api-5l-x42-pipe",
  "/a671-pipe",
  "/a672-pipe",
];

const Home = () => {
  // SEO optimization for home page
  useSEO({
    title:
      "Starlight Tubes - Premium Stainless Steel Pipes, Tubes & Nickel Alloys Supplier",
    description:
      "Leading  supplier of stainless steel pipes, tubes, inconel alloys, carbon steel pipes, and nickel alloys. ISO certified with global delivery. Competitive prices on 304, 316, 316L stainless steel products.",
    keywords:
      "stainless steel pipe, stainless steel tube, inconel pipe, nickel alloy, carbon steel pipe, 304 stainless steel, 316 stainless steel, 316L pipe, API 5L pipe, ASTM A106 pipe, stainless steel fasteners, steel supplier",
    url: "https://www.starlighttubes.com",
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Product Categories Section */}
        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Explore Our Product Range
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl">
              Premium quality metal products for industrial applications
            </p>
          </div>

          <div className="w-full px-4 md:px-8 flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-6 lg:gap-10">
            <MeteorsDemo
              title="Stainless Steel"
              items={stainlessSteelItems}
              links={stainlessSteelLinks}
            />
            <MeteorsDemo
              title="Nickel Alloy"
              items={nickelAlloyItems}
              links={nickelAlloyLinks}
            />
            <MeteorsDemo
              title="Carbon Steel"
              items={carbonSteelItems}
              links={carbonSteelLinks}
            />
          </div>
        </div>

        {/* Header Section - Before CTA */}
        <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
              5+ Years of Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Leading Exporter of Steel Tubes
          </h1>

          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Over a decade of excellence in ERW and Seamless pipe manufacturing,
            serving 100+ organizations across 10+ countries
          </p>
        </div>

        <div>
          <Cta />
        </div>

        <div>
          <InfiniteMovingCardsDemo />
        </div>

        <div>
          <FAQAccordion />
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

export default Home;
