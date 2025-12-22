import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const PipeFittings = () => {
  const projects = [
    {
      title: "Pipe Fittings",
      img: "/MainScrollableImage/Home.webp",
    },
    {
      title: "Butt Weld Fittings",
      img: "/MainScrollableImage/Home1.webp",
    },
    {
      title: "Flanges",
      img: "/MainScrollableImage/Home2.webp",
    },
  ];

  const ctaData = {
    title: "Premium Pipe Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality pipe fittings that meet international standards. Our fittings are engineered for superior performance, durability, and leak-proof connections in demanding industrial applications including oil & gas, petrochemical, and power generation.",
    paragraph2:
      "Available in various materials including stainless steel, carbon steel, alloy steel, and nickel alloys, our pipe fittings undergo rigorous quality testing to ensure compliance with ASTM, ASME, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/8" to 48", Schedule 5S to XXS, Various pressure ratings',
      },
      {
        label: "Standards",
        value: "ASTM A403, ASTM A234, ASME B16.9, B16.11, B16.28, MSS SP-43",
      },
      {
        label: "Types",
        value: "Elbows, Tees, Reducers, Caps, Couplings, Unions, Nipples",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Pipe Fittings Supplier",
    description:
      "Starlight Tubes delivers premium pipe fittings with unmatched quality and reliability for all your industrial piping needs.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Sizes Available",
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
            title="Pipe Fittings"
            subtitle="Premium quality pipe fittings for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Pipe Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Industrial Pipe Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality pipe fittings manufactured to meet
            international standards
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
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Fittings
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

export default PipeFittings;
