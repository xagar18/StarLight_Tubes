import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import { MeteorsDemo } from "../components/main components/LinkDisplayCard";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

// Stainless Steel Products
const stainlessSteelItems = [
  "Stainless Steel Tube",
  "Duplex Stainless Steel Tube",
  "Super Duplex Stainless Steel Tube",
  "Stainless Steel Pipe",
  "Stainless Steel Sheet",
  "Stainless Steel Bar",
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

// Carbon Steel Products
const carbonSteelItems = [
  "Carbon Steel Pipe",
  "Carbon Steel Welded Pipe",
  "ASTM A106 Pipe",
  "ASTM A53 Pipe",
  "ASTM A333 Pipe",
  "API 5L Grade B Pipe",
  "API 5L X65 Pipe",
  "API 5L X52 Pipe",
  "API 5L X42 Pipe",
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
    title:
      "Products - Steel Pipe Manufacturer & Exporter | Stainless Steel, Carbon Steel, Nickel Alloy Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading manufacturer and exporter of steel pipes, tubes, fittings, flanges. We manufacture stainless steel pipes (304, 316, 316L), carbon steel pipes (ASTM A106, API 5L), nickel alloy pipes (Inconel 625, 600), copper pipes, aluminium pipes. Premium quality seamless and welded pipes for oil gas, petrochemical, pharmaceutical industries. Export to USA, Europe, Middle East, Asia.",
    keywords:
      "steel pipe manufacturer, steel tube manufacturer, steel pipe exporter, pipe manufacturer India, tube manufacturer Mumbai, stainless steel pipe manufacturer, carbon steel pipe manufacturer, nickel alloy pipe manufacturer, seamless pipe manufacturer, welded pipe manufacturer, ERW pipe manufacturer, pipe fittings manufacturer, flanges manufacturer, elbows manufacturer, tees manufacturer, reducers manufacturer, 304 stainless steel manufacturer, 316 stainless steel manufacturer, ASTM A106 manufacturer, API 5L manufacturer, Inconel 625 manufacturer, Inconel 600 manufacturer, duplex steel manufacturer, super duplex manufacturer, copper pipe manufacturer, aluminium pipe manufacturer, steel pipe factory, steel pipe supplier, steel pipe distributor, industrial pipe manufacturer, oil gas pipe manufacturer, petrochemical pipe manufacturer",
    url: "https://www.starlighttubes.com/product",
    speakableContent: {
      headline:
        "Starlight Tubes Product Range - Industrial Steel Pipes & Tubes",
      summary:
        "Explore Starlight Tubes' complete range of industrial steel products including stainless steel, carbon steel, nickel alloys, copper, aluminium pipes, tubes, fittings, and flanges for global industries.",
    },
    entityType: "Product",
    relatedEntities: [
      "stainless steel pipes",
      "carbon steel tubes",
      "nickel alloy products",
      "pipe fittings",
      "industrial flanges",
      "seamless pipes",
      "welded tubes",
    ],
    faqSchema: [
      {
        question: "What products does Starlight Tubes manufacture?",
        answer:
          "Starlight Tubes manufactures a complete range of industrial steel products including stainless steel pipes (304, 316, 316L), carbon steel pipes (ASTM A106, API 5L), nickel alloy pipes (Inconel 625, 600), copper pipes, aluminium pipes, pipe fittings, and flanges.",
      },
      {
        question: "What industries do Starlight Tubes products serve?",
        answer:
          "Our products serve oil & gas, petrochemical, pharmaceutical, power generation, marine, aerospace, construction, and chemical processing industries worldwide.",
      },
      {
        question: "Are Starlight Tubes products certified?",
        answer:
          "Yes, all our products come with mill test certificates, comply with ASTM, ASME, API, DIN, EN standards, and are manufactured under ISO 9001:2015 certified processes.",
      },
    ],
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Hero Section */}
        <PageHero
          title="Starlight Tubes Products"
          subtitle="Complete Range of Industrial Steel Pipes, Tubes, Fittings & Flanges"
          image="https://res.cloudinary.com/dtdardvqm/image/upload/f_avif,q_auto,w_1200,c_fill/product_e8o6zt"
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
              Starlight Tubes - Steel & Metal Products
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl">
              Starlight Tubes offers comprehensive range of high-quality
              industrial steel & metal products for diverse applications
              worldwide, serving global markets across USA, Europe, Middle East,
              Asia & Africa
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
              Starlight Tubes - Copper, Aluminium & Fittings
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl">
              Starlight Tubes provides complete range of non-ferrous metals
              including copper pipes, aluminium sheets, and comprehensive pipe
              fittings like flanges, elbows, tees, reducers for all industrial
              needs
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
