import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router";
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
  "Duplex Stainless Steel Tube",
  "Super Duplex Stainless Steel Tube",
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
  "/stainless-steel-tube",
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
  "Carbon Steel Welded Pipe",
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
      "Starlight Tubes | Steel Pipe Manufacturers & Exporters to Middle East | Stainless Steel, Carbon Steel, Nickel Alloys, Pipe Fittings",
    description:
      "Starlight Tubes - Leading manufacturers and exporters of premium steel pipes, tubes, fittings, flanges, and metal products to Middle East. Specializing in stainless steel pipes, carbon steel tubes, nickel alloys, copper pipes, aluminium sheets, pipe fittings, flanges, elbows, tees, reducers, butt weld fittings, socket weld fittings, threaded fittings. ISO certified steel manufacturing company in Mumbai with global delivery to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "Starlight Tubes, starlight tubes Mumbai, steel pipe manufacturers Middle East, steel tube exporters UAE, stainless steel pipes Saudi Arabia, carbon steel pipes Qatar, nickel alloy pipes Oman, ERW pipes Kuwait, seamless pipes Bahrain, pipe fittings Middle East, flanges UAE, elbows Saudi Arabia, tees Qatar, reducers Oman, butt weld fittings Kuwait, socket weld fittings Bahrain, copper pipes GCC, aluminium sheets Middle East, inconel pipes UAE, duplex stainless steel Saudi Arabia, super duplex Qatar, 304 stainless steel Oman, 316 stainless steel Kuwait, 316L pipes Bahrain, ASTM A106 Middle East, API 5L GCC, Inconel 625 UAE, Inconel 600 Saudi Arabia, copper nickel pipes Qatar, cupro nickel Oman, aluminium 6061 Kuwait, aluminium 7075 Bahrain, industrial steel suppliers GCC, steel manufacturing company Mumbai, Middle East steel exporters, GCC pipe fittings, steel flanges Middle East, pipe elbows UAE, steel tees Saudi Arabia, pipe reducers Qatar",
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
              Premium quality metal products including steel pipes, tubes,
              fittings, flanges, elbows, tees, reducers, and industrial
              materials for Middle East markets
            </p>
          </div>

          <div className="max-full h-fit flex md:flex-row flex-col items-center md:justify-center gap-20">
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

        {/* View All Products Button */}
        <div className="w-full flex justify-center mt-12 mb-8">
          <Link
            to="/product"
            className="inline-flex items-center px-6 py-3 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-green-400/20"
          >
            <span>View All Products</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Header Section - Before CTA */}
        <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
              5+ Years of Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Leading Manufacturer & Exporter of Steel Tubes
          </h1>

          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Starlight Tubes - Premier manufacturers of ERW and Seamless steel
            pipes, tubes, fittings, flanges, and industrial metal products with
            over a decade of excellence in manufacturing. Serving 100+
            organizations across Middle East countries including UAE, Saudi
            Arabia, Qatar, Oman, Kuwait, and Bahrain with premium quality steel
            products and reliable delivery.
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
