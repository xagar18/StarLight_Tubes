import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const NickelPipe = () => {
  useSEO({
    title:
      "Nickel Pipe Manufacturer - Nickel 200, 201 Alloy Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading nickel alloy pipe manufacturer and exporter. Pure nickel 200, 201 pipes for high temperature and corrosion resistance. Chemical processing, petrochemical applications. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
    keywords:
      "nickel pipe manufacturer, Nickel 200 pipe, Nickel 201 pipe, nickel alloy pipe, pure nickel pipe, corrosion resistant pipe, chemical processing pipe, nickel pipe exporter, nickel pipe India, nickel pipe UAE",
    url: "https://www.starlighttubes.com/nickel-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      {
        name: "Nickel Alloys",
        url: "https://www.starlighttubes.com/nickel-alloys",
      },
      {
        name: "Nickel Pipe",
        url: "https://www.starlighttubes.com/nickel-pipe",
      },
    ],
    productSchema: {
      name: "Nickel Pipes - Nickel 200, 201 Grades",
      description:
        "Premium nickel alloy pipes in Nickel 200, 201 grades for high temperature and corrosion resistant applications in chemical processing and petrochemical industries.",
      category: "Nickel Alloy Pipes",
      material: "Nickel Alloy",
      offers: {
        priceCurrency: "USD",
        lowPrice: "50",
        highPrice: "6000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Nickel Pipe - Pure Nickel 200/201 Alloy Pipes",
      summary:
        "Starlight Tubes supplies high-purity Nickel 200 and 201 pipes with excellent corrosion resistance for chemical processing, petrochemical, and caustic soda production applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Nickel 200",
      "Nickel 201",
      "Nickel Alloy",
      "Corrosion Resistant Pipe",
      "Chemical Processing",
      "Caustic Soda",
      "High Purity Nickel",
    ],
    faqSchema: [
      {
        question: "What is the difference between Nickel 200 and Nickel 201?",
        answer:
          "Nickel 201 is a low-carbon version of Nickel 200 (0.02% max vs 0.15% max carbon). Nickel 201 is preferred for applications above 600°F to prevent embrittlement from carbon precipitation.",
      },
      {
        question: "What are nickel pipes used for?",
        answer:
          "Nickel pipes are used in chemical processing, caustic soda production, food processing, and applications requiring excellent corrosion resistance to acids, alkalis, and high-purity environments.",
      },
    ],
  });
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
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
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
