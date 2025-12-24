import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import { MeteorsDemo } from "../components/main components/LinkDisplayCard";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

// Stainless Steel Products
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

// Carbon Steel Products
const carbonSteelItems = [
  "Carbon Steel Pipe",
  "ASTM A106 Pipe",
  "ASTM A53 Pipe",
  "ASTM A333 Pipe",
  "API 5L Grade B Pipe",
  "API 5L X65 Pipe",
  "API 5L X52 Pipe",
  "API 5L X42 Pipe",
  "A671 Pipe",
  "A672 Pipe",
  "Welded Steel Pipe",
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
  "/welded-steel-pipe",
];

// Nickel Alloy Products
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

// Copper Products
const copperItems = [
  "Copper Pipe",
  "Copper Tube",
  "Copper Sheet",
  "Copper Plate",
  "Copper Round Bar",
  "Copper Fittings",
  "Copper Nickel Pipe",
  "Copper Nickel Tube",
  "Cupro Nickel 90/10",
  "Cupro Nickel 70/30",
];

const copperLinks = [
  "/copper-pipe",
  "/copper-tube",
  "/copper-sheet",
  "/copper-plate",
  "/copper-round-bar",
  "/copper-fittings",
  "/copper-nickel-pipe",
  "/copper-nickel-tube",
  "/cupro-nickel-90-10",
  "/cupro-nickel-70-30",
];

// Aluminium Products
const aluminiumItems = [
  "Aluminium Pipe",
  "Aluminium Tube",
  "Aluminium Sheet",
  "Aluminium Plate",
  "Aluminium Round Bar",
  "Aluminium Coil",
  "Aluminium 6061",
  "Aluminium 6063",
  "Aluminium 5052",
  "Aluminium 7075",
];

const aluminiumLinks = [
  "/aluminium-pipe",
  "/aluminium-tube",
  "/aluminium-sheet",
  "/aluminium-plate",
  "/aluminium-round-bar",
  "/aluminium-coil",
  "/aluminium-6061",
  "/aluminium-6063",
  "/aluminium-5052",
  "/aluminium-7075",
];

// Pipe Fittings Products
const fittingsItems = [
  "Pipe Fittings",
  "Butt Weld Fittings",
  "Socket Weld Fittings",
  "Threaded Fittings",
  "Flanges",
  "Elbow Fittings",
  "Tee Fittings",
  "Reducer Fittings",
  "Cap Fittings",
  "Coupling Fittings",
  "Union Fittings",
];

const fittingsLinks = [
  "/pipe-fittings",
  "/butt-weld-fittings",
  "/socket-weld-fittings",
  "/threaded-fittings",
  "/flanges",
  "/elbow-fittings",
  "/tee-fittings",
  "/reducer-fittings",
  "/cap-fittings",
  "/coupling-fittings",
  "/union-fittings",
];

const Product = () => {
  useSEO({
    title: "Products - Starlight Tubes | Steel Pipes, Tubes & Fittings",
    description:
      "Explore our complete range of industrial products including Stainless Steel, Carbon Steel, Nickel Alloys, Copper, Aluminium pipes, tubes, sheets and fittings.",
    keywords:
      "steel products, stainless steel pipe, carbon steel tube, nickel alloy, copper pipe, aluminium sheet, pipe fittings, industrial materials",
    url: "https://www.starlighttubes.com/product",
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Hero Section */}
        <PageHero
          title="Our Products"
          subtitle="Comprehensive Range of Industrial Steel & Metal Products"
          image="/main-page/product.png"
        />

        {/* Main Products Section - Row 1 */}
        <div className="w-full">
          <div className="w-full flex flex-col items-center justify-center mt-24 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Premium Quality Products
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Steel & Metal Products
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl">
              High-quality industrial materials for diverse applications
              worldwide
            </p>
          </div>

          <div className="max-full h-fit flex md:flex-row flex-col flex-wrap items-center md:justify-center gap-12 px-4">
            <MeteorsDemo
              title="Stainless Steel"
              items={stainlessSteelItems}
              links={stainlessSteelLinks}
            />
            <MeteorsDemo
              title="Carbon Steel"
              items={carbonSteelItems}
              links={carbonSteelLinks}
            />
            <MeteorsDemo
              title="Nickel Alloys"
              items={nickelAlloyItems}
              links={nickelAlloyLinks}
            />
          </div>
        </div>

        {/* Products Section - Row 2 */}
        <div className="w-full">
          <div className="w-full flex flex-col items-center justify-center mt-24 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                Non-Ferrous Metals
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Copper, Aluminium & Fittings
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl">
              Complete range of non-ferrous metals and pipe fittings for all
              industrial needs
            </p>
          </div>

          <div className="max-full h-fit flex md:flex-row flex-col flex-wrap items-center md:justify-center gap-12 px-4 mb-24">
            <MeteorsDemo
              title="Copper"
              items={copperItems}
              links={copperLinks}
            />
            <MeteorsDemo
              title="Aluminium"
              items={aluminiumItems}
              links={aluminiumLinks}
            />
            <MeteorsDemo
              title="Pipe Fittings"
              items={fittingsItems}
              links={fittingsLinks}
            />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </NavbarDemo>
    </div>
  );
};

export default Product;
