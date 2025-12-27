import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CuproNickel9010 = () => {
  useSEO({
    title:
      "CuNi 90/10 Pipe - Starlight Tubes | Copper Nickel 90/10 | Middle East Suppliers",
    description:
      "Professional copper nickel 90/10 pipes manufacturer. CuNi 90/10 seamless, welded pipes. Marine, desalination applications. Corrosion resistant in seawater. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "copper nickel 90/10 UAE, CuNi 9010 pipes Saudi Arabia, copper nickel pipes Qatar, marine pipes Oman, desalination pipes Kuwait, seawater resistant pipes Bahrain, copper nickel 90/10 Middle East, CuNi pipe manufacturers GCC",
    url: "https://www.starlighttubes.com/copper-nickel-90-10",
  });
  const projects = [
    {
      title: "Cupro Nickel 90/10 Pipe",
      img: "/copper-pipe/copper-pipe-supplier1.jpg",
    },
    {
      title: "Cupro Nickel 90/10 Tube",
      img: "/copper-pipe/copper-pipe-supplier2.jpg",
    },
    {
      title: "Cupro Nickel 90/10 Fittings",
      img: "/cupro-nickel-90/cupro-nickel-90-10-fittings.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Cupro Nickel 90/10",
    paragraph1:
      "Starlight Tubes supplies high-quality Cupro Nickel 90/10 (C70600) alloy products that offer excellent corrosion resistance in marine environments. This alloy provides superior resistance to seawater corrosion and biofouling.",
    paragraph2:
      "Our Cupro Nickel 90/10 products are manufactured using premium grade raw materials and undergo rigorous quality testing. Available in pipes, tubes, and fittings, we provide complete solutions for marine, offshore, and desalination applications.",
    specifications: [
      {
        label: "Grade",
        value: "C70600 (CuNi 90/10)",
      },
      {
        label: "Composition",
        value: "Copper 88-90%, Nickel 9-11%, Iron 1-1.8%",
      },
      {
        label: "Size Range",
        value: "OD 6mm to 300mm, Wall Thickness 0.5mm to 15mm",
      },
      {
        label: "Standards",
        value: "ASTM B111, ASTM B466, ASTM B467, BS 2871",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Cupro Nickel 90/10 Supplier",
    description:
      "Starlight Tubes delivers premium Cupro Nickel 90/10 products with unmatched quality and reliability. We ensure timely delivery and competitive pricing for all your marine and industrial requirements.",
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
            title="Cupro Nickel 90/10"
            subtitle="Premium quality Cupro Nickel 90/10 for marine and industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Cupro Nickel 90/10 Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Cupro Nickel 90/10
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Cupro Nickel 90/10 manufactured to meet
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

export default CuproNickel9010;
