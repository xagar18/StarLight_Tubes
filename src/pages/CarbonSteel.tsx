import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

const CarbonSteel = () => {
  useSEO({
    title:
      "Carbon Steel Pipe Manufacturer & Exporter | ASTM A106, API 5L, ASTM A53 Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading carbon steel pipe manufacturer and exporter in India. We manufacture ASTM A106 pipes, API 5L Grade B, X42, X52, X65 pipes, ASTM A53 pipes, ERW pipes, seamless pipes. Premium quality carbon steel tubes for oil gas, petrochemical industries. Export to USA, Europe, Middle East, Asia.",
    keywords:
      "carbon steel pipe manufacturer, carbon steel tube manufacturer, carbon steel pipe exporter, ASTM A106 pipe manufacturer, API 5L pipe manufacturer, ASTM A53 pipe manufacturer, ERW pipe manufacturer, seamless carbon steel manufacturer, welded pipe manufacturer, API 5L Grade B manufacturer, API 5L X42 manufacturer, API 5L X52 manufacturer, API 5L X65 manufacturer, A671 pipe manufacturer, A672 pipe manufacturer, carbon steel pipe factory, carbon steel tube factory, MS pipe manufacturer, mild steel pipe manufacturer, carbon steel pipe supplier India",
    url: "https://www.starlighttubes.com/carbon-steel",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      {
        name: "Carbon Steel",
        url: "https://www.starlighttubes.com/carbon-steel",
      },
    ],
    productSchema: {
      name: "Carbon Steel Pipes - ASTM A106, API 5L",
      description:
        "High-quality carbon steel pipes including ASTM A106, API 5L Grade B, X42, X52, X65 for oil & gas, petrochemical industries. Manufactured by Starlight Tubes.",
      category: "Carbon Steel Pipes",
      material: "Carbon Steel",
      offers: {
        priceCurrency: "USD",
        lowPrice: "15",
        highPrice: "3000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Carbon Steel Pipes - ASTM A106, API 5L, ASTM A53",
      summary:
        "Starlight Tubes manufactures premium carbon steel pipes including ASTM A106, API 5L Grade B, X42, X52, X65, seamless and ERW pipes for oil & gas and industrial applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "ASTM A106 pipes",
      "API 5L pipes",
      "ASTM A53 pipes",
      "ERW carbon steel",
      "seamless carbon steel",
      "oil gas pipelines",
      "boiler tubes",
    ],
    faqSchema: [
      {
        question: "What carbon steel pipe grades does Starlight Tubes offer?",
        answer:
          "We offer ASTM A106 Gr.B/C, A53 Gr.B, A333 Gr.6, API 5L Gr.B/X42/X52/X65, A671, and A672 grades in seamless, ERW, and welded configurations.",
      },
      {
        question: "What is the difference between ASTM A106 and API 5L pipes?",
        answer:
          "ASTM A106 is designed for high-temperature service applications like boilers and refineries. API 5L is specifically for oil and gas transmission pipelines with PSL1 and PSL2 quality levels.",
      },
      {
        question: "What sizes of carbon steel pipes are available?",
        answer:
          "We supply seamless pipes from 1/2 inch to 24 inch NB and welded pipes from 1/2 inch to 72 inch NB, with wall thickness from SCH 10 to XXS, meeting ASTM, API, and IS standards.",
      },
    ],
  });
  const ctaData = {
    title: "Carbon Steel Products",
    paragraph1:
      "Starlight Tubes is India's premier exporter and stockist of high-quality Carbon Steel pipes and tubes. We supply seamless and welded carbon steel pipes conforming to ASTM, API, and other international standards for oil & gas pipelines, structural applications, boilers, and high-pressure systems.",
    paragraph2:
      "Our carbon steel products are sourced from reputed mills worldwide and undergo strict quality checks. We maintain ready stock for urgent deliveries and provide complete documentation including mill test certificates, EN 10204 3.1/3.2 certificates, and third-party inspection reports as per client requirements.",
    specifications: [
      {
        label: "Grades Available",
        value:
          "ASTM A106 Gr.B/C, A53 Gr.B, A333 Gr.6, API 5L Gr.B/X42/X52/X65, A671/A672",
      },
      {
        label: "Products",
        value:
          "Seamless Pipes, ERW Pipes, Welded Pipes, LSAW/DSAW Pipes, Boiler Tubes",
      },
      {
        label: "Size Range",
        value:
          'Seamless: 1/2" to 24" NB | Welded: 1/2" to 72" NB | Wall: SCH 10 to XXS',
      },
      {
        label: "Standards",
        value:
          "ASTM A106, A53, A333, A335, API 5L PSL1/PSL2, A671, A672, IS 1239, IS 3589",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Carbon Steel Products"
          subtitle="ASTM A106, A53, API 5L and other carbon steel pipes & tubes"
          image="/MainScrollableImage/Home1.webp"
        />

        <div>
          {/* Carbon Steel Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">
                Carbon Steel
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Carbon Steel Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              High-quality carbon steel pipes and tubes for oil & gas,
              structural, and industrial applications
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

export default CarbonSteel;
