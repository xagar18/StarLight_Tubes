import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const CapFittings = () => {
  useSEO({
    title:
      "Cap Fittings - Starlight Tubes | Steel Pipe Caps | Global Suppliers",
    description:
      "Premium cap fittings manufacturer. Threaded and butt weld pipe end closures. Supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
    keywords:
      "cap fittings UAE, steel caps Saudi Arabia, pipe caps Qatar, threaded caps Oman, butt weld caps Kuwait, end closures Bahrain, steel cap fittings worldwide, pipe cap manufacturers GCC, pipeline caps UAE, USA steel suppliers, European steel exporters, global pipe fittings",
    url: "https://www.starlighttubes.com/cap-fittings",
  });
  const projects = [
    {
      title: "Cap Fittings",
      img: "/cap-fittings/cap-fitting.jpg",
    },
    {
      title: "Pipe Cap",
      img: "/cap-fittings/cap-fitting.jpg",
    },
    {
      title: "End Cap",
      img: "/cap-fittings/end-cap.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Cap Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality cap fittings designed for sealing the ends of pipes. Our caps provide complete closure solutions and are essential for system maintenance, testing, and temporary shutdowns in piping systems.",
    paragraph2:
      "Available in multiple connection types including butt weld, socket weld, and threaded, our cap fittings are manufactured from premium materials and undergo rigorous quality testing to ensure leak-proof sealing and compliance with industry standards.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Types",
        value: "Pipe Cap, End Cap, Threaded Cap",
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
    title: "Your Trusted Cap Fittings Supplier",
    description:
      "Starlight Tubes delivers premium cap fittings with unmatched quality and reliability for sealing pipe ends in piping systems.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Leak-Proof Sealing",
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
            title="Cap Fittings"
            subtitle="Premium quality cap fittings for pipe end sealing"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Cap Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Cap Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality cap fittings for sealing pipe ends and system
            closure
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

export default CapFittings;
