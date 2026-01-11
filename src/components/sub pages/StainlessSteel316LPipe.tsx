import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const StainlessSteel316LPipe = () => {
  useSEO({
    title:
      "SS 316L Pipe Manufacturer - ASTM A312 TP316L Seamless/Welded | Starlight Tubes Global Exporter",
    description:
      "Leading SS 316L pipe manufacturer & global exporter. ASTM A312 TP316L low carbon seamless & welded pipes. IGC tested, pharmaceutical grade. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "SS 316L pipe manufacturer, stainless steel 316L pipe exporter, ASTM A312 TP316L supplier, low carbon pipe manufacturer, seamless 316L pipe, welded SS 316L pipe, pharmaceutical grade pipe, 316L pipe UAE, SS 316L pipe Saudi Arabia, 316L pipe manufacturer India",
    url: "https://www.starlighttubes.com/stainless-steel-316L-pipe",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Stainless Steel",
        url: "https://www.starlighttubes.com/stainless-steel",
      },
      {
        name: "SS 316L Pipe",
        url: "https://www.starlighttubes.com/stainless-steel-316L-pipe",
      },
    ],
    productSchema: {
      name: "Stainless Steel 316L Pipe",
      description:
        "Premium SS 316L pipes in seamless and welded configurations. ASTM A312 TP316L certified low carbon stainless steel with enhanced weldability for pharmaceutical and marine applications.",
      category: "Stainless Steel Pipes",
      material:
        "Stainless Steel 316L (Low Carbon <0.03%, 16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "SS 316L Pipe - Low Carbon ASTM A312 TP316L Pipes",
      summary:
        "Starlight Tubes manufactures premium SS 316L pipes with extra low carbon content for enhanced weldability and corrosion resistance in pharmaceutical, food processing, and marine applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Stainless Steel 316L",
      "ASTM A312",
      "Low Carbon Steel",
      "Pharmaceutical Grade",
      "IGC Tested",
      "Marine Piping",
      "Enhanced Weldability",
    ],
    faqSchema: [
      {
        question: "What is the difference between SS 316 and SS 316L pipes?",
        answer:
          "SS 316L has lower carbon content (less than 0.03%) compared to SS 316, providing better weldability and resistance to intergranular corrosion without requiring post-weld heat treatment.",
      },
      {
        question: "What applications are SS 316L pipes ideal for?",
        answer:
          "SS 316L pipes are ideal for pharmaceutical process lines, food & beverage equipment, marine piping systems, and chemical processing where welding is required without post-weld treatment.",
      },
    ],
  });
  const projects = [
    {
      title: "316L Stainless Steel Pipe",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier1.jpg",
    },
    {
      title: "SA 312 TP316L Seamless Tube",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier2.jpg",
    },
    {
      title: "ASTM A213 SS TP 316L Stainless Steel Tubing",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "316L Stainless Steel Pipe",
    paragraph1:
      "Starlight Tubes manufactures and supplies premium quality 316L stainless steel pipes, the low carbon version of 316 grade offering enhanced corrosion resistance and weldability. Grade 316L pipes are specifically engineered for applications requiring welding without post-weld heat treatment, making them ideal for pharmaceutical process lines, food & beverage equipment, marine piping systems, and chemical processing plants.",
    paragraph2:
      "Our 316L stainless steel pipes are available in seamless and welded configurations with exceptional resistance to pitting and crevice corrosion. Each pipe undergoes rigorous testing including intergranular corrosion testing, PMI verification, hydrostatic testing, and dimensional inspection to ensure compliance with stringent international standards and reliable performance in critical applications.",
    specifications: [
      {
        label: "Composition",
        value:
          "16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum, Low Carbon (<0.03%) - Extra Low Carbon for better weldability",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 24", Schedule 5S to XXS, Length up to 12 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM A312 TP316L, ASTM A358 TP316L, ASME B36.19, DIN 1.4404, EN 10217-7",
      },
      {
        label: "Applications",
        value:
          "Pharmaceuticals, Food Processing, Marine Piping, Chemical Plants, Surgical Instruments",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted SS 316L Pipe Supplier",
    description:
      "Starlight Tubes supplies premium 316L stainless steel pipes for pharmaceutical and marine applications. We provide IGC tested products with excellent weldability.",
    features: [
      "Low Carbon Grade",
      "IGC Tested",
      "Pharmaceutical Grade",
      "Enhanced Weldability",
      "Marine Approved",
      "ASTM A312 Certified",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="SS 316L Pipes"
            subtitle="Low carbon stainless steel for superior weldability"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* 316L Stainless Steel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            316L Stainless Steel Pipe
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality 316L stainless steel pipes manufactured to meet
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
              Explore More SS 316L Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              View our SS 316L low-carbon products for superior weldability
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

export default StainlessSteel316LPipe;
