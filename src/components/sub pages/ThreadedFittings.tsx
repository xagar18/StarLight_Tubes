import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const ThreadedFittings = () => {
  const projects = [
    {
      title: "Threaded Fittings",
      img: "/MainScrollableImage/Home.webp",
    },
    {
      title: "Threaded Elbow",
      img: "/MainScrollableImage/Home1.webp",
    },
    {
      title: "Threaded Tee",
      img: "/MainScrollableImage/Home2.webp",
    },
  ];

  const ctaData = {
    title: "Premium Threaded Fittings",
    paragraph1:
      "Starlight Tubes supplies high-quality threaded fittings designed for easy assembly and disassembly in low to medium pressure applications. Our threaded fittings provide reliable connections and are ideal for instrumentation, process lines, and systems requiring frequent maintenance.",
    paragraph2:
      "Available in various materials and pressure ratings, our threaded fittings are manufactured using premium grade materials and undergo rigorous quality testing to ensure compliance with ASME B16.11, ASTM A403, and international specifications.",
    specifications: [
      {
        label: "Materials",
        value:
          "SS 304/316/321, Carbon Steel, Alloy Steel, Inconel, Monel, Hastelloy",
      },
      {
        label: "Size Range",
        value: '1/8" to 4", Class 2000/3000/6000',
      },
      {
        label: "Thread Standards",
        value: "NPT, BSPT, BSPP, Metric Threads",
      },
      {
        label: "Standards",
        value: "ASME B16.11, ASTM A403, ASTM A182, MSS SP-79",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Threaded Fittings Supplier",
    description:
      "Starlight Tubes delivers premium threaded fittings with unmatched quality and reliability for easy assembly and maintenance.",
    features: [
      "ISO 9001:2015 Certified",
      "Full Material Traceability",
      "Easy Assembly/Disassembly",
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
            title="Threaded Fittings"
            subtitle="Premium quality threaded fittings for easy assembly and maintenance"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Threaded Fittings Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Threaded Fittings
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality threaded fittings for easy assembly and disassembly
            in various applications
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

export default ThreadedFittings;
