import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const TeeFittings = () => {
  useSEO({
    title:
      "Tee Fittings - Starlight Tubes | Steel Pipe Tees | Global Suppliers",
    description:
      "Premium tee fittings manufacturer. Equal and reducing tees in butt weld, socket weld, and threaded types. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "tee fittings UAE, steel tees Saudi Arabia, pipe tees Qatar, equal tees Oman, reducing tees Kuwait, butt weld tees Bahrain, socket weld tees worldwide, threaded tees GCC, steel tee fittings UAE, pipe tee manufacturers Saudi Arabia, USA steel suppliers, European steel exporters, global pipe fittings",
    url: "https://www.starlighttubes.com/tee-fittings",
  });
  const projects = [
    {
      title: "Tee Fittings",
      img: "/socket-weld/socket-tee.jpg",
    },
    {
      title: "Equal Tee",
      img: "/tees/equal-tee.webp",
    },
    {
      title: "Reducing Tee",
      img: "/tees/reducing-tee.png",
    },
  ];

  const ctaData = {
    title: "Premium Tee Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality tee fittings designed for branching pipe connections. Our tees enable three-way flow distribution and are available in equal and reducing configurations for various piping system requirements.",
    paragraph2:
      "Available in multiple connection types including butt weld, socket weld, and threaded, our tee fittings are manufactured from premium materials and undergo rigorous quality testing to ensure leak-proof performance and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Equal Tee, Reducing Tee, Straight Tee",
      },
      {
        label: "Size Range",
        value: '1/8" to 48", Schedule 5S to XXS',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.9, B16.11, B16.28",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Tee Fittings Supplier",
    description:
      "Starlight Tubes delivers premium tee fittings with unmatched quality and reliability for branching connections in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Equal & Reducing Options",
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
            title="Tee Fittings"
            subtitle="Premium quality tee fittings for branching connections"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Tee Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Tee Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality tee fittings for three-way flow distribution in
            piping systems
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

export default TeeFittings;
