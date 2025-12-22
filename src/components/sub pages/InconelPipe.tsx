import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const InconelPipe = () => {
  const projects = [
    {
      title: "Inconel pipe",
      img: "/inconel-pipe/inconel-pipe-supplier1.jpg",
    },
    {
      title: "Welded Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier2.jpg",
    },
    {
      title: "Seamless Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel Alloy Pipes",
    paragraph1:
      "Starlight Tubes supplies premium Inconel alloy pipes engineered for extreme high-temperature and corrosive applications. Inconel pipes offer outstanding strength, oxidation resistance, and resistance to stress-corrosion cracking, making them essential for aerospace engines, nuclear reactors, chemical processing plants, and gas turbines operating above 1000°F.",
    paragraph2:
      "Our Inconel pipes are available in seamless and welded configurations across multiple grades including Inconel 600, 625, 718, and 825. Each pipe undergoes stringent quality control including solution annealing, PMI testing, ultrasonic inspection, and mechanical property verification to ensure exceptional performance in the most demanding industrial environments.",
    specifications: [
      {
        label: "Grades",
        value: "Inconel 600, 601, 617, 625, 718, 725, 800, 825, X-750",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 10", Schedule 5S to XXS, Length up to 6 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM B167, ASTM B444, ASTM B704, ASME SB167, DIN 17744, EN 10216",
      },
      {
        label: "Applications",
        value:
          "Aerospace, Nuclear Power, Gas Turbines, Chemical Processing, Heat Treatment Furnaces",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Inconel Pipe Supplier",
    description:
      "Starlight Tubes specializes in high-performance Inconel alloy pipes for extreme environments. We provide certified products with complete documentation for aerospace and nuclear applications.",
    features: [
      "Aerospace & Nuclear Approved",
      "Complete Material Certification",
      "Solution Annealed Condition",
      "PMI Tested Products",
      "Custom Alloy Grades",
      "Dedicated Technical Team",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Inconel Pipes"
            subtitle="Superalloy pipes for extreme temperatures"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Inconel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel Alloy Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel alloy pipes manufactured to meet
            international standards for diverse industrial applications
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

        {/* Exporter Section */}

        <div>
          <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Our Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Explore More Inconel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Discover our premium Inconel superalloy products for extreme
              environments
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

        {/* Bottom CTA Section */}
        <BottomCTA
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          features={bottomCtaData.features}
        />

        {/* Stats Grid Section */}
        <div>
          <StatsGrid />
        </div>
        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default InconelPipe;
