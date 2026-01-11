import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const StainlessSteelWire = () => {
  useSEO({
    title:
      "SS Wire Manufacturer - Stainless Steel Spring & Welding Wire | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel wire manufacturer & global exporter. Premium spring wire, welding wire, cold drawn wire. Multiple tempers available. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "SS wire manufacturer, stainless steel wire exporter, spring wire manufacturer, welding wire supplier, cold drawn wire manufacturer, ASTM A580 wire, SS wire UAE, stainless steel wire Saudi Arabia, spring wire India, corrosion resistant wire manufacturer",
    url: "https://www.starlighttubes.com/stainless-steel-wire",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Stainless Steel",
        url: "https://www.starlighttubes.com/stainless-steel",
      },
      {
        name: "SS Wire",
        url: "https://www.starlighttubes.com/stainless-steel-wire",
      },
    ],
    productSchema: {
      name: "Stainless Steel Wire",
      description:
        "Premium stainless steel wire available in spring wire, welding wire, and cold drawn configurations. ASTM A580/A313 certified with multiple temper options for diverse industrial applications.",
      category: "Stainless Steel Wire",
      material: "Stainless Steel (304, 304L, 316, 316L, 321, 310S, 410, 430)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Stainless Steel Wire - Spring Wire & Welding Wire",
      summary:
        "Starlight Tubes manufactures premium stainless steel wire including spring wire, welding wire, and cold drawn wire in 304, 316 grades with multiple temper options for industrial applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Stainless Steel",
      "ASTM A580",
      "Spring Wire",
      "Welding Wire",
      "Cold Drawn Wire",
      "Wire Mesh",
      "Corrosion Resistant Wire",
    ],
    faqSchema: [
      {
        question: "What diameter range is available for SS wire?",
        answer:
          "We offer stainless steel wire from 0.05mm to 20mm diameter, available in coils or cut to length as per your requirements.",
      },
      {
        question: "What temper options are available for stainless steel wire?",
        answer:
          "Our SS wire is available in soft annealed, quarter hard, half hard, full hard, and spring temper to meet your specific application needs.",
      },
    ],
  });
  const projects = [
    {
      title: "Stainless Steel Wire",
      img: "/stainless-steel-wire/wire-manufacturer-supplier-1.jpg",
    },
    {
      title: "Stainless Steel Welding Wire",
      img: "/stainless-steel-wire/wire-manufacturer-supplier-2.jpg",
    },
    {
      title: "Stainless Steel Wire Mesh",
      img: "/stainless-steel-wire/wire-manufacturer-supplier-3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Stainless Steel Wire",
    paragraph1:
      "Starlight Tubes supplies high-quality stainless steel wire for diverse applications including weaving, spring manufacturing, wire mesh production, fastener manufacturing, and cable construction. Our wires offer excellent tensile strength, corrosion resistance, and formability, making them ideal for automotive, aerospace, medical devices, and industrial applications.",
    paragraph2:
      "Available in bright, soft annealed, and cold drawn conditions, our stainless steel wires are manufactured to precise tolerances with consistent quality. We offer custom wire drawing, straightening, and cutting services. Each coil is tested for mechanical properties and surface quality to ensure reliable performance in your applications.",
    specifications: [
      {
        label: "Grades",
        value: "304, 304L, 316, 316L, 321, 310S, 410, 430, 302HQ Spring Wire",
      },
      {
        label: "Diameter Range",
        value: "0.05mm to 20mm, Available in coils or cut to length",
      },
      {
        label: "Standards",
        value: "ASTM A313, ASTM A580, DIN 17223, EN 10270, JIS G4314",
      },
      {
        label: "Temper",
        value:
          "Soft Annealed, Quarter Hard, Half Hard, Full Hard, Spring Temper",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted SS Wire Supplier",
    description:
      "Starlight Tubes supplies precision stainless steel wire for diverse applications. We offer custom wire drawing and straightening services with consistent quality.",
    features: [
      "ASTM A580 Certified",
      "Multiple Tempers Available",
      "Custom Diameters",
      "Spring Wire Grade",
      "Coil & Cut Lengths",
      "Consistent Quality",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Stainless Steel Wire"
            subtitle="High-quality wire for industrial use"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Stainless Steel Wire Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Stainless Steel Wire
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality stainless steel wire manufactured to meet
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
              Explore More Stainless Steel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of high-quality stainless steel products
              for your industrial applications
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

export default StainlessSteelWire;
