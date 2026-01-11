import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

const Inconel = () => {
  useSEO({
    title:
      "Inconel Pipe Manufacturer & Exporter | Inconel 625, 600, 718 Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading Inconel pipe manufacturer and exporter in India. We manufacture Inconel 625 pipes, Inconel 600 tubes, Inconel 718 pipes, Inconel plates, round bars, tubing. Premium quality superalloy products for aerospace, oil gas, chemical processing industries. Export to USA, Europe, Middle East.",
    keywords:
      "Inconel pipe manufacturer, Inconel tube manufacturer, Inconel pipe exporter, Inconel 625 manufacturer, Inconel 600 manufacturer, Inconel 718 manufacturer, Inconel 800 manufacturer, Inconel 825 manufacturer, Inconel seamless pipe manufacturer, Inconel welded pipe manufacturer, Inconel plate manufacturer, Inconel round bar manufacturer, Inconel tubing manufacturer, Inconel bolts manufacturer, superalloy pipe manufacturer, Inconel pipe factory, Inconel pipe supplier India",
    url: "https://www.starlighttubes.com/inconel",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Inconel", url: "https://www.starlighttubes.com/inconel" },
    ],
    productSchema: {
      name: "Inconel Pipes and Tubes - 625, 600, 718",
      description:
        "Premium Inconel pipes including Inconel 625, Inconel 600, Monel pipes for high-temperature and corrosive environments. Manufactured by Starlight Tubes.",
      category: "Inconel Pipes",
      material: "Inconel Superalloy",
      offers: {
        priceCurrency: "USD",
        lowPrice: "100",
        highPrice: "10000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Inconel Pipes & Tubes - 625, 600, 718 Superalloys",
      summary:
        "Starlight Tubes manufactures premium Inconel superalloy pipes and tubes including Inconel 625, 600, 718, 800 for extreme high-temperature and corrosive aerospace and industrial applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Inconel 625 pipes",
      "Inconel 600 tubes",
      "Inconel 718 alloy",
      "superalloy products",
      "high temperature alloys",
      "aerospace materials",
      "gas turbine materials",
    ],
    faqSchema: [
      {
        question: "What Inconel grades does Starlight Tubes offer?",
        answer:
          "We offer Inconel 600, 601, 625, 718, 725, 800, 800H, 800HT, 825, and X-750 in pipes, tubes, tubing, plates, sheets, round bars, bolts, and fasteners.",
      },
      {
        question: "What makes Inconel superior to other alloys?",
        answer:
          "Inconel superalloys maintain strength at extreme temperatures (up to 1000°C), resist oxidation and corrosion, and perform exceptionally in aerospace, gas turbines, nuclear reactors, and chemical processing environments.",
      },
      {
        question: "What standards do Inconel products meet?",
        answer:
          "Our Inconel products meet ASTM B167, B168, B407, B408, B409, B423, B444, B446, B564 standards, with compliance to AMS and NACE MR0175 specifications.",
      },
    ],
  });
  const ctaData = {
    title: "Inconel Products",
    paragraph1:
      "Starlight Tubes is India's leading exporter and stockist of premium Inconel superalloy products. We supply high-temperature resistant Inconel pipes, tubes, plates, sheets, round bars, bolts, and tubing designed to perform in the most demanding environments where extreme heat and corrosion resistance are critical.",
    paragraph2:
      "Our Inconel products are ideal for aerospace, gas turbines, nuclear reactors, chemical processing, and offshore oil & gas applications. We source from world-class mills and provide complete documentation including mill test certificates, PMI reports, and compliance with ASTM, ASME, AMS, and NACE MR0175 standards.",
    specifications: [
      {
        label: "Grades Available",
        value: "Inconel 600, 601, 625, 718, 725, 800, 800H, 800HT, 825, X-750",
      },
      {
        label: "Products",
        value:
          "Seamless & Welded Pipes, Tubes, Tubing, Plates, Sheets, Round Bars, Bolts, Fasteners",
      },
      {
        label: "Size Range",
        value:
          'Pipes: 1/8" to 12" NB | Plates: 1mm to 100mm | Round Bars: 5mm to 350mm',
      },
      {
        label: "Standards",
        value: "ASTM B167, B168, B407, B408, B409, B423, B444, B446, B564",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Inconel Products"
          subtitle="Inconel 600, 625, 718, 800 superalloys for extreme environments"
          image="/MainScrollableImage/Home3.webp"
        />

        <div>
          {/* Inconel Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-red-500/10 border border-red-500/20">
              <span className="text-red-600 dark:text-red-400 text-sm font-semibold">
                Inconel Superalloys
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Inconel Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              High-temperature superalloy pipes, tubes, plates, round bars, and
              fasteners for extreme applications
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
        </div>

        <div>
          <InfiniteMovingCardsDemo />
        </div>

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

export default Inconel;
