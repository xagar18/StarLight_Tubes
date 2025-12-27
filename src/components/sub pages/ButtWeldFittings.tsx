import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ButtWeldFittings = () => {
  useSEO({
    title:
      "Butt Weld Fittings - Starlight Tubes | Steel Pipe Butt Weld | Middle East Suppliers",
    description:
      "Expert butt weld fittings manufacturer. Elbows, tees, reducers, caps in stainless steel, carbon steel. Seamless welding connections. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "butt weld fittings UAE, steel butt weld Saudi Arabia, pipe butt weld Qatar, seamless weld fittings Oman, welding connections Kuwait, butt weld elbows Bahrain, steel butt weld fittings Middle East, pipe butt weld manufacturers GCC",
    url: "https://www.starlighttubes.com/butt-weld-fittings",
  });
  const projects = [
    {
      title: "Butt Weld Fittings",
      img: "/pipe-fittings/buttweld-fitting.jpg",
    },
    {
      title: "Butt Weld Elbow",
      img: "/pipe-fittings/pipe-fittings.jpg",
    },
    {
      title: "Butt Weld Tee",
      img: "/pipe-fittings/butt-weld-tee.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Butt Weld Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality butt weld fittings designed for permanent, leak-proof connections in high-pressure and high-temperature applications. Our butt weld fittings provide smooth flow transitions and are ideal for critical piping systems in oil & gas, petrochemical, and power generation industries.",
    paragraph2:
      "Available in various materials and schedules, our butt weld fittings are manufactured using premium grade materials and undergo rigorous quality testing to ensure compliance with ASME B16.9, ASTM A403, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/2" to 48", Schedule 5S to XXS',
      },
      {
        label: "Types",
        value: "Elbows, Tees, Reducers, Caps, Stub Ends, Crosses",
      },
      {
        label: "Standards",
        value: "ASME B16.9, ASTM A403, ASTM A234, MSS SP-43",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Butt Weld Fittings Supplier",
    description:
      "Starlight Tubes delivers premium butt weld fittings with unmatched quality and reliability for high-pressure piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "High-Pressure Applications",
      "Global Export Network",
      "Bulk Order Discounts",
      "Expert Technical Guidance",
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center">
          <PageHero
            title="Butt Weld Fittings"
            subtitle="Premium quality butt weld fittings for high-pressure applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Butt Weld Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Butt Weld Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality butt weld fittings for permanent, leak-proof
            connections in high-pressure systems
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16 px-4">
          <CommonCTA
            title={ctaData.title}
            paragraph1={ctaData.paragraph1}
            paragraph2={ctaData.paragraph2}
            specifications={ctaData.specifications}
          />
        </div>

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Pipe Fittings
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality pipe fittings
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

        <BottomCTA
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          features={bottomCtaData.features}
        />

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

export default ButtWeldFittings;
