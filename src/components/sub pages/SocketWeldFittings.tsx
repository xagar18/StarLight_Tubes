import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const SocketWeldFittings = () => {
  useSEO({
    title:
      "Socket Weld Fittings - Starlight Tubes | Steel Pipe Socket Weld | Middle East Suppliers",
    description:
      "Professional socket weld fittings manufacturer. Elbows, tees, couplings in stainless steel, carbon steel. High pressure socket connections. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "socket weld fittings UAE, steel socket weld Saudi Arabia, pipe socket weld Qatar, high pressure fittings Oman, socket connections Kuwait, weld fittings Bahrain, steel socket weld fittings Middle East, pipe socket weld manufacturers GCC",
    url: "https://www.starlighttubes.com/socket-weld-fittings",
  });
  useSEO({
    title:
      "Socket Weld Fittings - Starlight Tubes | Steel Pipe Socket Weld | Middle East Suppliers",
    description:
      "Professional socket weld fittings manufacturer. Elbows, tees, couplings in stainless steel, carbon steel. High pressure socket connections. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "socket weld fittings UAE, steel socket weld Saudi Arabia, pipe socket weld Qatar, high pressure fittings Oman, socket connections Kuwait, weld fittings Bahrain, steel socket weld fittings Middle East, pipe socket weld manufacturers GCC",
    url: "https://www.starlighttubes.com/socket-weld-fittings",
  });
  const projects = [
    {
      title: "Socket Weld Fittings",
      img: "/socket-weld/socket-fittings.jpg",
    },
    {
      title: "Socket Weld Elbow",
      img: "/socket-weld/socket-elbow.jpg",
    },
    {
      title: "Socket Weld Tee",
      img: "/socket-weld/socket-tee.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Socket Weld Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality socket weld fittings designed for small bore piping systems requiring high integrity connections. Our socket weld fittings provide excellent flow characteristics and are commonly used in high-pressure, high-temperature applications in chemical processing and power plants.",
    paragraph2:
      "Available in various materials and pressure classes, our socket weld fittings are manufactured using premium grade materials and undergo rigorous quality testing to ensure compliance with ASME B16.11, ASTM A403, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/8" to 4", Class 3000/6000/9000',
      },
      {
        label: "Types",
        value: "Elbows, Tees, Couplings, Caps, Unions, Plugs",
      },
      {
        label: "Standards",
        value: "ASME B16.11, ASTM A403, ASTM A182, MSS SP-79",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Socket Weld Fittings Supplier",
    description:
      "Starlight Tubes delivers premium socket weld fittings with unmatched quality and reliability for small bore high-pressure systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "High Integrity Connections",
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
            title="Socket Weld Fittings"
            subtitle="Premium quality socket weld fittings for high-integrity connections"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Socket Weld Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Socket Weld Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality socket weld fittings for small bore piping systems
            requiring high integrity
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

export default SocketWeldFittings;
