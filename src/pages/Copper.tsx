import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

// Extra data component for more information (styled like CommonCTA)
const CopperApplicationsCTA = () => {
  const data = {
    title: "Copper Applications",
    paragraph1:
      "Copper is renowned for its excellent electrical and thermal conductivity, making it essential for electrical wiring, plumbing, heat exchangers, and industrial machinery.",
    paragraph2:
      "Our copper products are manufactured to the highest standards for reliability and performance, ensuring long-lasting service in demanding environments.",
    specifications: [
      {
        label: "Key Uses",
        value:
          "Electrical wiring, Plumbing, Heat exchangers, Industrial machinery, HVAC systems",
      },
      {
        label: "Advantages",
        value:
          "Superior conductivity, Corrosion resistance, Malleability, Recyclability",
      },
      {
        label: "Industries Served",
        value:
          "Construction, Power generation, Electronics, Automotive, Manufacturing",
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

const Copper = () => {
  useSEO({
    title:
      "Copper Pipe Manufacturer & Exporter | Copper Tubes, Sheets, Cupro Nickel Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading copper pipe manufacturer and exporter in India. We manufacture copper pipes, copper tubes, copper sheets, copper plates, cupro nickel 90/10, cupro nickel 70/30 pipes. Premium quality copper products for HVAC, plumbing, marine industries. Export to USA, Europe, Middle East.",
    keywords:
      "copper pipe manufacturer, copper tube manufacturer, copper pipe exporter, copper sheet manufacturer, copper plate manufacturer, cupro nickel pipe manufacturer, copper nickel tube manufacturer, CuNi 90/10 manufacturer, CuNi 70/30 manufacturer, copper round bar manufacturer, copper fittings manufacturer, copper pipe factory, copper tube factory, copper pipe supplier India, copper tube distributor, HVAC copper pipe manufacturer",
    url: "https://www.starlighttubes.com/copper",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Copper", url: "https://www.starlighttubes.com/copper" },
    ],
    productSchema: {
      name: "Copper Pipes and Tubes",
      description:
        "High-quality copper pipes, tubes, sheets, and cupro nickel products for HVAC, plumbing, marine, and industrial applications.",
      category: "Copper Products",
      material: "Copper, Cupro Nickel",
      offers: {
        priceCurrency: "USD",
        lowPrice: "20",
        highPrice: "4000",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline:
        "Copper Pipes & Tubes - Premium Copper and Cupro Nickel Products",
      summary:
        "Starlight Tubes manufactures premium copper pipes, tubes, sheets, and cupro nickel 90/10 and 70/30 products for HVAC, plumbing, marine, and industrial applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "copper pipes",
      "copper tubes",
      "copper sheets",
      "cupro nickel 90/10",
      "cupro nickel 70/30",
      "HVAC copper",
      "marine copper",
    ],
    faqSchema: [
      {
        question: "What copper products does Starlight Tubes offer?",
        answer:
          "We offer copper pipes, tubes, sheets, plates, coils, rods, bars, fittings, and cupro nickel 90/10 and 70/30 products in grades C10100, C10200, C11000, C12200, ETP, DHP, and DLP.",
      },
      {
        question: "What are the applications of copper pipes?",
        answer:
          "Copper pipes are used in electrical wiring, plumbing systems, HVAC applications, heat exchangers, industrial machinery, and marine environments due to superior conductivity and corrosion resistance.",
      },
      {
        question: "What sizes of copper pipes are available?",
        answer:
          "We supply copper pipes from 1/4 inch to 8 inch NB, sheets from 0.5mm to 50mm thickness, and rods from 3mm to 200mm diameter, meeting ASTM B42, B75, B88, B152, EN 12449, JIS H3300 standards.",
      },
    ],
  });
  const ctaData = {
    title: "Copper Products",
    paragraph1:
      "Starlight Tubes offers a comprehensive range of copper products including pipes, tubes, sheets, and plates. Our copper is valued for its superior conductivity, corrosion resistance, and malleability, suitable for electrical, plumbing, and industrial applications.",
    paragraph2:
      "We supply copper products that meet international standards such as ASTM, EN, and JIS. Applications include electrical wiring, plumbing, HVAC, and industrial equipment. All products are supplied with test certificates and full traceability.",
    specifications: [
      {
        label: "Grades Available",
        value: "C10100, C10200, C11000, C12200, C12000, ETP, DHP, DLP",
      },
      {
        label: "Products",
        value: "Pipes, Tubes, Sheets, Plates, Coils, Rods, Bars",
      },
      {
        label: "Size Range",
        value:
          'Pipes: 1/4" to 8" NB | Sheets: 0.5mm to 50mm | Rods: 3mm to 200mm',
      },
      {
        label: "Standards",
        value: "ASTM B42, B75, B88, B152, EN 12449, JIS H3300",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Copper Products"
          subtitle="High-conductivity copper pipes, tubes, sheets, and plates"
          image="/MainScrollableImage/Home.webp"
        />

        <div>
          {/* Copper Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">
                Copper
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Copper Products
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Superior electrical and thermal conductivity for industrial and
              commercial use
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
          <CopperApplicationsCTA />
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

export default Copper;
