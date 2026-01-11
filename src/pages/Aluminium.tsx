import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

// Extra data component for more information (styled like CommonCTA)
const AluminiumApplicationsCTA = () => {
  const data = {
    title: "Why Choose Aluminium?",
    paragraph1:
      "Aluminium is lightweight, corrosion-resistant, and highly versatile, making it ideal for transportation, construction, packaging, and electrical applications.",
    paragraph2:
      "Our aluminium products are sourced from top mills and meet international standards for quality and performance, ensuring reliability in every application.",
    specifications: [
      {
        label: "Key Uses",
        value: "Aerospace, Automotive, Construction, Packaging, Electrical",
      },
      {
        label: "Advantages",
        value:
          "Lightweight, Corrosion resistance, High strength-to-weight, Recyclability",
      },
      {
        label: "Industries Served",
        value: "Aerospace, Transportation, Building, Power, Consumer goods",
      },
    ],
  };
  return (
    <div className="w-full h-fit flex justify-center mb-16">
      <CommonCTA
        title={data.title}
        paragraph1={data.paragraph1}
        paragraph2={data.paragraph2}
        specifications={data.specifications}
      />
    </div>
  );
};

const Aluminium = () => {
  useSEO({
    title:
      "Aluminium Pipe Manufacturer & Exporter | 6061, 6063, 5052, 7075 Aluminium Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading aluminium pipe manufacturer and exporter in India. We manufacture aluminium 6061 pipes, aluminium 6063 tubes, aluminium 5052 sheets, aluminium 7075 plates. Premium quality aluminium products for aerospace, automotive, construction industries. Export to USA, Europe, Middle East.",
    keywords:
      "aluminium pipe manufacturer, aluminium tube manufacturer, aluminium pipe exporter, aluminium sheet manufacturer, aluminium plate manufacturer, aluminium 6061 manufacturer, aluminium 6063 manufacturer, aluminium 5052 manufacturer, aluminium 7075 manufacturer, aluminium round bar manufacturer, aluminium coil manufacturer, aluminium pipe factory, aluminium tube factory, aluminium pipe supplier India, aerospace aluminium manufacturer, automotive aluminium manufacturer",
    url: "https://www.starlighttubes.com/aluminium",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Aluminium", url: "https://www.starlighttubes.com/aluminium" },
    ],
    productSchema: {
      name: "Aluminium Pipes and Sheets - 6061, 6063, 5052, 7075",
      description:
        "High-quality aluminium pipes, tubes, sheets, and plates in various grades for aerospace, automotive, and construction industries.",
      category: "Aluminium Products",
      material: "Aluminium Alloy",
      offers: {
        priceCurrency: "USD",
        lowPrice: "10",
        highPrice: "3000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Aluminium Pipes & Sheets - 6061, 6063, 5052, 7075 Grades",
      summary:
        "Starlight Tubes manufactures premium aluminium pipes, tubes, sheets, and plates in grades 6061, 6063, 5052, and 7075 for aerospace, automotive, and construction applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "aluminium 6061",
      "aluminium 6063",
      "aluminium 5052",
      "aluminium 7075",
      "aerospace aluminium",
      "automotive aluminium",
      "construction aluminium",
    ],
    faqSchema: [
      {
        question: "What aluminium grades does Starlight Tubes offer?",
        answer:
          "We offer aluminium grades 1100, 2014, 2024, 3003, 5052, 5083, 6061, 6063, 6082, and 7075 in pipes, tubes, sheets, plates, coils, rods, and bars.",
      },
      {
        question: "What is the difference between aluminium 6061 and 7075?",
        answer:
          "Aluminium 6061 offers excellent weldability and corrosion resistance for general applications. Aluminium 7075 provides higher strength for aerospace applications but is less weldable.",
      },
      {
        question: "What sizes of aluminium pipes are available?",
        answer:
          "We supply aluminium pipes from 1/4 inch to 12 inch NB, sheets from 0.5mm to 100mm thickness, and rods from 3mm to 300mm diameter, meeting ASTM B221, B209, B241, EN 573, EN 485, JIS H4000 standards.",
      },
    ],
  });
  const ctaData = {
    title: "Aluminium Products",
    paragraph1:
      "Starlight Tubes supplies a wide range of high-quality aluminium products including pipes, tubes, sheets, and plates. Our aluminium offerings are known for their excellent strength-to-weight ratio, corrosion resistance, and workability, suitable for diverse industrial and commercial uses.",
    paragraph2:
      "We provide aluminium products that conform to international standards such as ASTM, EN, and JIS. Applications include aerospace, automotive, marine, construction, and electrical industries. All products are supplied with test certificates and full traceability.",
    specifications: [
      {
        label: "Grades Available",
        value: "1100, 2014, 2024, 3003, 5052, 5083, 6061, 6063, 6082, 7075",
      },
      {
        label: "Products",
        value: "Pipes, Tubes, Sheets, Plates, Coils, Rods, Bars",
      },
      {
        label: "Size Range",
        value:
          'Pipes: 1/4" to 12" NB | Sheets: 0.5mm to 100mm | Rods: 3mm to 300mm',
      },
      {
        label: "Standards",
        value: "ASTM B221, B209, B241, EN 573, EN 485, JIS H4000",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Aluminium Products"
          subtitle="High-quality aluminium pipes, tubes, sheets, and plates"
          image="/MainScrollableImage/Home.webp"
        />

        <div>
          {/* Aluminium Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Aluminium
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Aluminium Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Lightweight, corrosion-resistant aluminium for industrial and
              commercial applications
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

          {/* More Data Section (Applications CTA) */}
          <AluminiumApplicationsCTA />
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

export default Aluminium;
