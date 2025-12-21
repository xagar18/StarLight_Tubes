import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const NickelPipe = () => {
  const projects = [
    {
      title: "Nickel Alloy Pipes and Tubes",
      img: "/nickel-pipe/nickel-alloy-pipe-suppliers.jpg",
    },
    {
      title: "Seamless Nickel Alloy Pipe",
      img: "/nickel-pipe/nickel-alloy-tube-suppliers.jpg",
    },
    {
      title: "Nickel Alloy Tubing",
      img: "/nickel-pipe/nickel-alloy-tubing-suppliers.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Nickel Alloy Pipes",
    paragraph1:
      "Starlight Tubes supplies high-purity nickel alloy pipes designed for extreme temperature and corrosive environments. Our nickel pipes offer exceptional resistance to oxidation, sulfidation, and chloride stress corrosion cracking, making them ideal for chemical processing, petrochemical refineries, power generation, and aerospace applications where standard stainless steel cannot perform.",
    paragraph2:
      "Available in seamless and welded configurations, our nickel alloy pipes are manufactured from grades including Nickel 200, Nickel 201, and other specialty alloys. Each pipe undergoes comprehensive testing including PMI verification, hydrostatic testing, ultrasonic inspection, and corrosion resistance evaluation to ensure superior quality and reliability in demanding service conditions.",
    specifications: [
      {
        label: "Grades",
        value: "Nickel 200 (UNS N02200), Nickel 201 (UNS N02201), Nickel 205",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 8", Schedule 5S to XXS, Length up to 6 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM B161, ASTM B162, ASTM B725, ASME SB161, DIN 17751, EN 10216",
      },
      {
        label: "Applications",
        value:
          "Chemical Processing, Caustic Soda Production, Aerospace, Electronics, High-Temperature Service",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Nickel Alloy Pipe Supplier",
    description:
      "Starlight Tubes provides premium nickel alloy pipes for corrosive and high-temperature applications. Our products meet the stringent requirements of chemical and petrochemical industries.",
    features: [
      "High Purity Nickel Grades",
      "Corrosion Resistance Tested",
      "Chemical Industry Approved",
      "Complete Traceability",
      "Customized Solutions",
      "Expert Metallurgical Support",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Nickel Pipes"
            subtitle="High purity nickel pipes for corrosive environments"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Nickel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Nickel Alloy Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality nickel alloy pipes manufactured to meet
            international standards for diverse industrial applications
          </p>
        </div>

        {/* Common CTA Section */}
        <div className="w-full h-fit flex justify-center mb-16">
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
              Explore More Nickel Alloy Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our extensive range of nickel alloy products for
              high-temperature applications
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

export default NickelPipe;
