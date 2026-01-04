import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const AluminiumPipe = () => {
  useSEO({
    title:
      "Aluminium Pipe - Starlight Tubes | Aluminium Pipes | Global Suppliers",
    description:
      "Premium aluminium pipes manufacturer. Lightweight corrosion resistant pipes for HVAC and construction. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "aluminium pipe UAE, aluminium pipes Saudi Arabia, lightweight pipes Qatar, corrosion resistant pipes Oman, HVAC pipes Kuwait, construction pipes Bahrain, aluminium pipe worldwide, aluminium pipe manufacturers GCC, USA steel suppliers, European steel exporters, global aluminium manufacturers",
    url: "https://www.starlighttubes.com/aluminium-pipe",
  });
  const projects = [
    {
      title: "Aluminium Pipe",
      img: "/alumininum-pipe/aluminium-pipes.jpg",
    },
    {
      title: "Aluminium Seamless Pipe",
      img: "/alumininum-pipe/aluminium-seamless-pipes.jpg",
    },
    {
      title: "Aluminium Tube",
      img: "/alumininum-pipe/aluminium-tubes.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Aluminium Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality aluminium pipes that meet international standards. Our aluminium pipes offer excellent strength-to-weight ratio, corrosion resistance, and durability for aerospace, automotive, construction, and marine applications.",
    paragraph2:
      "Available in various alloys and tempers, our aluminium pipes are manufactured using premium grade raw materials and undergo rigorous quality testing to ensure compliance with ASTM, AMS, and international specifications.",
    specifications: [
      {
        label: "Grades",
        value: "6061, 6063, 5052, 5083, 7075, 2024, 3003, 1100",
      },
      {
        label: "Size Range",
        value:
          "OD 6mm to 400mm, Wall Thickness 0.5mm to 25mm, Length up to 6 meters",
      },
      {
        label: "Standards",
        value: "ASTM B210, ASTM B241, ASTM B221, AMS 4150, EN 573",
      },
      {
        label: "Types",
        value: "Seamless, Extruded, Drawn, Round, Square, Rectangular",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Aluminium Pipe Supplier",
    description:
      "Starlight Tubes delivers premium aluminium pipes with unmatched quality and reliability for aerospace, automotive, and construction applications.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Custom Lengths Available",
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
            title="Aluminium Pipes"
            subtitle="Premium quality aluminium pipes for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Aluminium Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Aluminium Pipes & Tubes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality aluminium pipes for aerospace, automotive, and
            construction applications
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
              Explore More Aluminium Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality aluminium products
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

export default AluminiumPipe;
