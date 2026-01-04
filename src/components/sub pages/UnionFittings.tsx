import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const UnionFittings = () => {
  useSEO({
    title:
      "Union Fittings - Starlight Tubes | Steel Pipe Unions | Global Suppliers",
    description:
      "Premium union fittings manufacturer. Screwed and socket weld unions for easy disassembly. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "union fittings UAE, steel unions Saudi Arabia, pipe unions Qatar, screwed unions Oman, socket weld unions Kuwait, disassembly unions Bahrain, steel union fittings worldwide, pipe union manufacturers GCC, threaded unions UAE, USA steel suppliers, European steel exporters, global pipe fittings",
    url: "https://www.starlighttubes.com/union-fittings",
  });
  const projects = [
    {
      title: "Union Fittings",
      img: "/union-fittings/union-fittings.jpg",
    },
    {
      title: "Threaded Union",
      img: "/union-fittings/threaded-union.jpg",
    },
    {
      title: "Socket Weld Union",
      img: "/union-fittings/socket-weld-union.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Union Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality union fittings designed for easy disassembly and reassembly of piping systems. Our unions allow for quick maintenance and repairs without cutting the pipe, making them essential for systems requiring frequent servicing.",
    paragraph2:
      "Available in multiple connection types including threaded and socket weld, our union fittings are manufactured from premium materials and undergo rigorous quality testing to ensure reliable performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Threaded Union, Socket Weld Union, Butt Weld Union",
      },
      {
        label: "Size Range",
        value: '1/8" to 4", Class 3000/6000/9000',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.11, MSS SP-83",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Union Fittings Supplier",
    description:
      "Starlight Tubes delivers premium union fittings with unmatched quality and reliability for easy maintenance and repairs in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Easy Disassembly",
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
            title="Union Fittings"
            subtitle="Premium quality union fittings for easy maintenance"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Union Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Union Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality union fittings for easy disassembly and maintenance
            of piping systems
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

export default UnionFittings;
