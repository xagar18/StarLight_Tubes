import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { BottomCTA } from "../sub components/BottomCTA";
import { CommonCTA } from "../sub components/CommonCTA";

const StainlessSteelSheet = () => {
  useSEO({
    title:
      "Stainless Steel Sheet Manufacturer - 304/316/321 Grades | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel sheet manufacturer & global exporter. Hot rolled & cold rolled SS sheets in 304, 316, 321, 310S grades. Premium quality plates with 2B, BA, mirror finish. ASTM A240 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
    keywords:
      "stainless steel sheet manufacturer, SS sheet exporter, stainless steel plate supplier, hot rolled SS sheet, cold rolled stainless steel, 304 SS sheet manufacturer, 316 stainless steel plate, ASTM A240 sheet, mirror finish SS sheet, stainless steel sheet UAE, SS plates Saudi Arabia, steel sheet manufacturer India",
    url: "https://www.starlighttubes.com/stainless-steel-sheet",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com" },
      {
        name: "Stainless Steel",
        url: "https://www.starlighttubes.com/stainless-steel",
      },
      {
        name: "Stainless Steel Sheet",
        url: "https://www.starlighttubes.com/stainless-steel-sheet",
      },
    ],
    productSchema: {
      name: "Stainless Steel Sheet",
      description:
        "Premium stainless steel sheets and plates in multiple grades including 304, 316, 321, 310S with various finishes - 2B, BA, No.4, hairline, and mirror finish. ASTM A240 certified for industrial applications.",
      category: "Stainless Steel Products",
      material:
        "Stainless Steel (304, 304L, 316, 316L, 321, 310S, 410, 430, 904L, Duplex 2205)",
      offers: {
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    speakableContent: {
      headline: "Stainless Steel Sheet - Hot & Cold Rolled SS Sheets",
      summary:
        "Starlight Tubes supplies premium stainless steel sheets and plates in 304, 316, 321, 310S grades with multiple finishes including 2B, BA, mirror, and hairline for industrial and architectural applications.",
    },
    entityType: "Product",
    relatedEntities: [
      "Stainless Steel",
      "ASTM A240",
      "Hot Rolled Sheet",
      "Cold Rolled Sheet",
      "Mirror Finish SS",
      "Corrosion Resistant",
      "SS Plates",
    ],
    faqSchema: [
      {
        question: "What finishes are available for stainless steel sheets?",
        answer:
          "We offer SS sheets in 2B, BA, No.1, No.4, Hairline, Mirror 8K, Embossed, and Perforated finishes to meet your specific requirements.",
      },
      {
        question: "What thickness range do you offer for SS sheets?",
        answer:
          "Our stainless steel sheets are available in thickness from 0.3mm to 6mm, while plates range from 6mm to 100mm with width up to 3000mm.",
      },
    ],
  });
  const projects = [
    {
      title: "Stainless Steel Plate",
      img: "/stainless-steel-sheet/stainless-steel-plate-supplier.jpg",
    },
    {
      title: "ASTM A240 Stainless Steel Sheet",
      img: "/stainless-steel-sheet/stainless-steel-sheet-supplier.jpg",
    },
    {
      title: "Stainless Steel Coil",
      img: "/stainless-steel-sheet/stainless-steel-coil-supplier.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Stainless Steel Sheets & Plates",
    paragraph1:
      "Starlight Tubes is a trusted manufacturer and supplier of high-quality stainless steel sheets and plates for diverse industrial and architectural applications. Our products offer superior corrosion resistance, excellent formability, and aesthetic appeal, making them ideal for kitchen equipment, chemical tanks, architectural cladding, pharmaceutical equipment, and food processing machinery.",
    paragraph2:
      "Available in various finishes including 2B, BA, No.4, hairline, and mirror finish, our stainless steel sheets and plates are manufactured to precise tolerances. We offer comprehensive value-added services including laser cutting, plasma cutting, shearing, bending, and polishing to deliver ready-to-use products for your projects.",
    specifications: [
      {
        label: "Grades",
        value: "304, 304L, 316, 316L, 321, 310S, 410, 430, 904L, Duplex 2205",
      },
      {
        label: "Thickness Range",
        value: "Sheets: 0.3mm to 6mm, Plates: 6mm to 100mm, Width up to 3000mm",
      },
      {
        label: "Standards",
        value:
          "ASTM A240, ASTM A167, ASME SA240, DIN 17460, EN 10088, JIS G4305",
      },
      {
        label: "Finish",
        value: "2B, BA, No.1, No.4, Hairline, Mirror 8K, Embossed, Perforated",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted SS Sheet & Plate Supplier",
    description:
      "Starlight Tubes offers premium stainless steel sheets and plates with multiple finishes. We provide cutting, bending, and polishing services to meet your specifications.",
    features: [
      "ASTM A240 Compliant",
      "Multiple Finish Options",
      "Laser Cutting Service",
      "Custom Sizes Available",
      "Protective Film Coated",
      "Bulk Order Discounts",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Stainless Steel Sheets"
            subtitle="Quality sheets & plates for diverse applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Stainless Steel Sheets Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Stainless Steel Sheets & Plates
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality stainless steel sheets and plates manufactured to
            meet international standards for diverse industrial applications
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

export default StainlessSteelSheet;
