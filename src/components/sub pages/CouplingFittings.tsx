import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CouplingFittings = () => {
  useSEO({
    title:
      "Coupling Fittings - Starlight Tubes | Steel Pipe Couplings | Global Suppliers",
    description:
      "Premium coupling fittings manufacturer. Full and half couplings in socket weld and threaded types. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "coupling fittings UAE, steel couplings Saudi Arabia, pipe couplings Qatar, full couplings Oman, half couplings Kuwait, socket weld couplings Bahrain, threaded couplings worldwide, steel coupling fittings GCC, pipe coupling manufacturers UAE, USA steel suppliers, European steel exporters, global pipe fittings",
    url: "https://www.starlighttubes.com/coupling-fittings",
  });
  const projects = [
    {
      title: "Coupling Fittings",
      img: "/coupling-fittings/coupling-fitting.jpg",
    },
    {
      title: "Full Coupling",
      img: "/coupling-fittings/full-coupling.jpg",
    },
    {
      title: "Half Coupling",
      img: "/coupling-fittings/half-coupling.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Coupling Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality coupling fittings designed for connecting two pipes of the same diameter. Our couplings provide secure, leak-proof connections and are available in full and half coupling configurations for various piping applications.",
    paragraph2:
      "Available in multiple connection types including socket weld and threaded, our coupling fittings are manufactured from premium materials and undergo rigorous quality testing to ensure reliable performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Full Coupling, Half Coupling, Reducing Coupling",
      },
      {
        label: "Size Range",
        value: '1/8" to 4", Schedule 5S to XXS',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.11, MSS SP-83",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Coupling Fittings Supplier",
    description:
      "Starlight Tubes delivers premium coupling fittings with unmatched quality and reliability for secure pipe connections.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Full & Half Coupling Options",
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
            title="Coupling Fittings"
            subtitle="Premium quality coupling fittings for pipe connections"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Coupling Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Coupling Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality coupling fittings for connecting pipes of the same
            diameter
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

export default CouplingFittings;
