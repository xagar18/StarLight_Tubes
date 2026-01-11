import { useSEO } from "@/hooks/use-seo";
import { lazy, Suspense } from "react";
import Footer from "../components/main components/Fotter";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { BottomCTA } from "../components/sub components/BottomCTA";

// Lazy load heavy 3D components
const WorldMapDemo = lazy(() =>
  import("../components/main components/AboutMap").then((m) => ({
    default: m.WorldMapDemo,
  }))
);
const CardSpotlightDemo = lazy(() =>
  import("../components/main components/AboutSpotLightCard").then((m) => ({
    default: m.CardSpotlightDemo,
  }))
);

// Loading fallback for 3D components
const MapLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-gray-900/5 rounded-xl">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading map...</p>
    </div>
  </div>
);

const About = () => {
  useSEO({
    title:
      "About Us - Steel Pipe Manufacturer & Exporter India | Starlight Tubes Manufacturing Company",
    description:
      "About Starlight Tubes - India's leading steel pipe manufacturer and exporter. ISO certified steel manufacturing factory in Mumbai. We manufacture stainless steel pipes, carbon steel tubes, nickel alloy pipes, pipe fittings, flanges. Export to USA, Europe, Middle East, Asia. Over 5 years of excellence in steel pipe manufacturing and export.",
    keywords:
      "steel pipe manufacturer India, steel tube manufacturer Mumbai, steel pipe exporter India, steel pipe manufacturing company, steel pipe factory India, pipe manufacturer about us, steel tube manufacturer about, ISO certified steel manufacturer, steel manufacturing company India, pipe manufacturing factory Mumbai, steel pipe supplier India, leading steel manufacturer, top pipe exporter, best steel pipe manufacturer, quality steel manufacturer, industrial pipe manufacturer India, seamless pipe manufacturer, welded pipe manufacturer, ERW pipe manufacturer India",
    url: "https://www.starlighttubes.com/about",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "About Us", url: "https://www.starlighttubes.com/about" },
    ],
    speakableContent: {
      headline:
        "About Starlight Tubes - India's Leading Steel Pipe Manufacturer",
      summary:
        "Starlight Tubes is India's No. 1 exporter and stockist of industrial steel pipes and tubes, serving global industries since 2020 with ISO certified quality products.",
    },
    entityType: "Organization",
    relatedEntities: [
      "steel pipe manufacturer",
      "ISO certified company",
      "export house India",
      "industrial steel supplier",
      "Mumbai steel factory",
    ],
    faqSchema: [
      {
        question: "Who is Starlight Tubes?",
        answer:
          "Starlight Tubes is India's No. 1 exporter and stockist of industrial steel pipes and tubes, serving Oil & Gas, petrochemical, and chemical processing industries since 2020. We are ISO 9001, 14001, OHSAS 18001 certified and a Government of India Recognized Export House.",
      },
      {
        question: "Where is Starlight Tubes located?",
        answer:
          "Starlight Tubes is headquartered in Mumbai, India, with global export capabilities to over 50 countries including USA, Europe, Middle East, and Asia.",
      },
      {
        question: "What certifications does Starlight Tubes have?",
        answer:
          "Starlight Tubes holds ISO 9001:2015, ISO 14001, OHSAS 18001 certifications, PED 97/23/EC approval, and is a Government of India Recognized Export House.",
      },
    ],
  });
  const heading = "Starlight Tubes";
  const text1 =
    "Starlight Tubes is India's No. 1 exporter and stockist of industrial steel pipes and tubes, serving the Oil & Gas, petrochemical, and chemical processing industries since 2020. We supply piping materials in Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys to UAE, Saudi Arabia, Kuwait, Qatar, Egypt, Turkey, Oman, Africa, Malaysia, and many countries across USA & Europe. As a stocking distributor of leading global steel pipe suppliers from India, Japan, Italy, China & UK, we maintain ready stock of Pipes, Tubes, Sheets, Plates, Coils, Fittings, Flanges, Round Bars, and Fasteners. We specialize in supplying materials for Boilers, Steam Pipelines, and LNG Projects. Starlight Tubes is an ISO 9001, 14001, OHSAS 18001 certified company and a Government of India Recognized Export House. We are PED 97/23/EC approved Supplier & Exporter, and we only deal in high-quality steel material with proper mill test certificates and documentation.";

  const bottomCtaData = {
    title: "Why Choose Starlight Tubes?",
    description:
      "With decades of industry experience and a commitment to excellence, Starlight Tubes has become the preferred partner for leading organizations worldwide. Our dedication to quality, reliability, and customer satisfaction sets us apart in the industrial materials sector.",
    features: [
      "ISO 9001, 14001, OHSAS 18001 Certified",
      "Government Recognized Export House",
      "PED 97/23/EC Approved Supplier",
      "Global Shipping to 50+ Countries",
      "Complete Mill Test Certificates",
      "Extensive Ready Stock Inventory",
      "Expert Technical Consultation",
      "Competitive Factory Pricing",
      "On-Time Delivery Guaranteed",
    ],
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          {/* Image Slider Section */}
          <PageHero
            title="About Starlight Tubes"
            subtitle="India's No. 1 Exporter & Stockist of Industrial Steel Products Since 2020"
            image="https://res.cloudinary.com/dtdardvqm/image/upload/f_avif,q_auto,w_1200,c_fill/aboutus_whnwsq"
          />

          {/* About Section */}
          <div className="w-full max-w-7xl mx-auto px-6 mt-20 mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 mb-4 rounded-full bg-gray-900/10 border border-gray-300 text-gray-700 text-sm font-semibold">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Our Company
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Leading the industry in quality steel tubes and piping solutions
                since 2020
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <Suspense fallback={<MapLoader />}>
                <CardSpotlightDemo
                  heading={heading}
                  text={text1}
                  image="./img.png"
                />
              </Suspense>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <BottomCTA
            title={bottomCtaData.title}
            description={bottomCtaData.description}
            features={bottomCtaData.features}
          />

          {/* World Map Section */}
          <div>
            <Suspense fallback={<MapLoader />}>
              <WorldMapDemo />
            </Suspense>
          </div>
          {/* Footer Section */}
          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </>
  );
};

export default About;
