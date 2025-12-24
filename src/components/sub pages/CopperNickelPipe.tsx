import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CopperNickelPipe = () => {
  const projects = [
    {
      title: "Copper Nickel Pipe",
      img: "/copper-pipe/copper-pipe-supplier1.jpg",
    },
    {
      title: "CuNi 90/10 Pipe",
      img: "/copper-pipe/copper-pipe-supplier2.jpg",
    },
    {
      title: "CuNi 70/30 Pipe",
      img: "/copper-pipe/copper-pipe-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Copper Nickel Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality copper nickel pipes that offer excellent corrosion resistance, particularly in marine and seawater applications. Our CuNi pipes provide superior resistance to biofouling and erosion in demanding environments.",
    paragraph2:
      "Available in 90/10 and 70/30 compositions, our copper nickel pipes are manufactured using premium grade raw materials and undergo rigorous quality testing. We provide customized solutions for marine, offshore, and industrial applications.",
    specifications: [
      {
        label: "Grades",
        value: "C70600 (90/10), C71500 (70/30), C71640",
      },
      {
        label: "Size Range",
        value: "OD 6mm to 300mm, Wall Thickness 0.5mm to 15mm",
      },
      {
        label: "Standards",
        value: "ASTM B111, ASTM B466, ASTM B467, EN 12451",
      },
      {
        label: "Applications",
        value: "Marine, Offshore, Desalination, Heat Exchangers, Power Plants",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Copper Nickel Pipe Supplier",
    description:
      "Starlight Tubes delivers premium copper nickel pipes with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your marine and industrial requirements.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Marine Grade Quality",
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
            title="Copper Nickel Pipes"
            subtitle="Premium quality copper nickel pipes for marine and industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Copper Nickel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Copper Nickel Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality copper nickel pipes manufactured to meet
            international standards for marine and industrial applications
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
              Explore More Copper Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality copper products for your
              marine and industrial applications
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

export default CopperNickelPipe;
