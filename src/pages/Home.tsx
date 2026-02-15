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
  "/stainless-steel-bar",
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
  "Inconel Bar",
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
  "/inconel-bar",
  "/inconel-bolts",
  "/inconel-600-plate",
  "/inconel-600-pipe",
  "/inconel-625-tubing",
  "/inconel-625-pipe",
  "/inconel-625-plate",
];

const pipeFittingsItems = [
  "Butt Weld Fittings",
  "Elbow Fittings",
  "Tee Fittings",
  "Reducer Fittings",
  "Cap Fittings",
  "Coupling Fittings",
  "Union Fittings",
  "Flanges",
  "Socket Weld Fittings",
  "Threaded Fittings",
  "Pipe Fittings",
];

const pipeFittingsLinks = [
  "/butt-weld-fittings",
  "/elbow-fittings",
  "/tee-fittings",
  "/reducer-fittings",
  "/cap-fittings",
  "/coupling-fittings",
  "/union-fittings",
  "/flanges",
  "/socket-weld-fittings",
  "/threaded-fittings",
  "/pipe-fittings",
];

const Home = () => {
  // SEO optimization for home page with enhanced AEO & GEO structured data
  useSEO({
    title:
      "Starlight Tubes | Steel Pipe Manufacturer & Exporter India | Stainless Steel, Carbon Steel, Nickel Alloy Pipes",
    description:
      "Starlight Tubes - Leading steel pipe manufacturer and exporter in India. We manufacture and export stainless steel pipes, carbon steel tubes, nickel alloy pipes, inconel pipes, pipe fittings, flanges to USA, Europe, Middle East, Asia. ISO certified steel manufacturing factory in Mumbai. Premium quality seamless & welded pipes, ERW pipes. Best steel tube manufacturer and exporter for oil & gas, petrochemical, pharmaceutical industries.",
    keywords:
      "steel pipe manufacturer, steel tube manufacturer, steel pipe exporter, steel tube exporter, pipe manufacturer India, tube manufacturer India, steel pipe factory, steel pipe supplier, steel pipe distributor, stainless steel pipe manufacturer, carbon steel pipe manufacturer, nickel alloy pipe manufacturer, inconel pipe manufacturer, seamless pipe manufacturer, welded pipe manufacturer, ERW pipe manufacturer, industrial pipe manufacturer, oil gas pipe manufacturer, petrochemical pipe manufacturer, pipe fittings manufacturer, flanges manufacturer, elbows manufacturer, tees manufacturer, reducers manufacturer, steel pipe manufacturer Mumbai, steel pipe exporter India, best steel pipe manufacturer, top steel pipe exporter, leading pipe manufacturer, premium steel tubes, quality steel pipes, steel pipe manufacturing company, steel tube manufacturing factory, pipe manufacturer exporter, steel pipes wholesale, bulk steel pipes supplier, international steel pipe exporter, global steel pipe manufacturer, Starlight Tubes, stainless steel 304 manufacturer, stainless steel 316 manufacturer, carbon steel ASTM A106 manufacturer, API 5L pipe manufacturer, Inconel 625 manufacturer, Inconel 600 manufacturer, duplex steel manufacturer, super duplex manufacturer, copper pipe manufacturer, aluminium pipe manufacturer",
    url: "https://www.starlighttubes.com",
    breadcrumbs: [{ name: "Home", url: "https://www.starlighttubes.com/" }],
    // AEO: FAQ Schema for Answer Engines
    faqSchema: [
      {
        question: "Who is the best steel pipe manufacturer in India?",
        answer:
          "Starlight Tubes is one of the leading steel pipe manufacturers in India, specializing in stainless steel, carbon steel, and nickel alloy pipes. We are ISO 9001 certified and export to 60+ countries worldwide.",
      },
      {
        question: "Which company exports steel pipes globally?",
        answer:
          "Starlight Tubes is a premier steel pipe exporter based in Mumbai, India. We export stainless steel pipes, carbon steel tubes, inconel pipes, and pipe fittings to USA, Europe, Middle East, Asia, and Africa.",
      },
      {
        question: "What types of steel pipes does Starlight Tubes manufacture?",
        answer:
          "Starlight Tubes manufactures stainless steel pipes (304, 316, 316L), carbon steel pipes (ASTM A106, API 5L, ASTM A53), nickel alloy pipes (Inconel 625, 600, Monel), copper pipes, aluminium pipes, and various pipe fittings and flanges.",
      },
      {
        question: "Does Starlight Tubes provide mill test certificates?",
        answer:
          "Yes, Starlight Tubes provides complete mill test certificates (MTC) and third-party inspection reports with all our steel pipe products. We ensure 100% quality assurance and traceability.",
      },
      {
        question: "What industries do you supply steel pipes to?",
        answer:
          "We supply steel pipes to Oil & Gas, Petrochemical, Chemical Processing, Power Generation, Pharmaceutical, Food Processing, Marine, Construction, and various industrial sectors worldwide.",
      },
    ],
    // AEO: Speakable content for voice search (Google Assistant, Alexa, Siri)
    speakableContent: {
      headline: "Starlight Tubes - India's Leading Steel Pipe Manufacturer",
      summary:
        "Starlight Tubes is a premier steel pipe manufacturer and exporter based in Mumbai, India. We manufacture stainless steel pipes, carbon steel tubes, nickel alloy pipes, and export to over 60 countries. ISO 9001 certified with competitive factory prices.",
    },
    // AEO: Q&A Schema for direct answers in search
    qaSchema: [
      {
        question: "What is the price of stainless steel pipes?",
        answer:
          "Stainless steel pipe prices vary based on grade (304, 316, 316L), size, and quantity. Contact Starlight Tubes for competitive factory-direct pricing. We offer bulk discounts for large orders.",
        upvoteCount: 125,
      },
      {
        question: "How to order steel pipes from India?",
        answer:
          "To order steel pipes from Starlight Tubes India: 1) Send your requirements via email or WhatsApp, 2) Receive quotation within 24 hours, 3) Confirm order with advance payment, 4) Get delivery with Mill Test Certificate. We export worldwide with door-to-door delivery.",
        upvoteCount: 98,
      },
    ],
    // GEO: Service Schema for AI-powered search engines
    serviceSchema: {
      name: "Steel Pipe Manufacturing & Export Services",
      description:
        "Complete steel pipe manufacturing and global export services including stainless steel, carbon steel, nickel alloy pipes, fittings, and flanges with ISO certification and worldwide delivery.",
      serviceType: "Manufacturing & Export",
      areaServed: [
        "United States",
        "United Arab Emirates",
        "Saudi Arabia",
        "United Kingdom",
        "Germany",
        "France",
        "India",
        "Singapore",
        "Malaysia",
        "Australia",
      ],
    },
    // AEO: Featured Snippet Optimization
    featuredSnippet: {
      type: "list",
      content: "Top Steel Pipe Products by Starlight Tubes",
      listItems: [
        "Stainless Steel Pipes (304, 316, 316L)",
        "Carbon Steel Pipes (ASTM A106, API 5L)",
        "Nickel Alloy Pipes (Inconel 625, 600)",
        "Pipe Fittings (Elbows, Tees, Reducers)",
        "Flanges (ANSI, DIN, JIS Standards)",
        "Copper & Aluminium Pipes",
      ],
    },
    // GEO: Entity type and related entities for AI context
    entityType: "Organization",
    relatedEntities: [
      "Steel Manufacturing",
      "Pipe Industry",
      "Metal Export",
      "Industrial Piping",
      "Oil and Gas Industry",
      "Petrochemical Industry",
      "Stainless Steel",
      "Carbon Steel",
      "Nickel Alloys",
    ],
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
              materials for global markets including USA, Europe, Middle East &
              Asia
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
              title="Pipe Fittings"
              items={pipeFittingsItems}
              links={pipeFittingsLinks}
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
            organizations across 60+ countries including USA, UK, Germany, UAE,
            Saudi Arabia, Singapore, and Australia with premium quality steel
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
