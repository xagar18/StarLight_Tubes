import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const StainlessSteelFasteners = () => {
  const projects = [
    {
      title: "Stainless Steel Bolts",
      img: "/stainless-steel-fasteners/bolts-stud-bolts-manufacturers.jpg",
    },
    {
      title: "Stainless Steel Fasteners",
      img: "/stainless-steel-fasteners/fasteners-nuts-bolts-manufacturer-india.jpg",
    },
    {
      title: "Stainless Steel Nuts",
      img: "/stainless-steel-fasteners/nut-nuts-manufacturers-india.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Stainless Steel Fasteners",
    paragraph1:
      "Starlight Tubes supplies a comprehensive range of high-quality stainless steel fasteners including bolts, nuts, screws, washers, and anchors for critical industrial applications. Our fasteners are engineered to provide exceptional strength, corrosion resistance, and durability in demanding environments such as marine, chemical processing, oil & gas, and construction industries.",
    paragraph2:
      "Manufactured to international standards, our stainless steel fasteners undergo rigorous quality testing including tensile strength, hardness, and dimensional checks. Available in various head styles, thread types, and finishes, we offer custom manufacturing and special coatings to meet your specific application requirements.",
    specifications: [
      {
        label: "Grades",
        value: "304, 304L, 316, 316L, 321, 310S, 410, 430, A2-70, A4-80",
      },
      {
        label: "Types",
        value:
          "Hex Bolts, Socket Cap Screws, Studs, Nuts, Washers, U-Bolts, Eye Bolts, Anchor Fasteners",
      },
      {
        label: "Standards",
        value:
          "ASTM A193, ASTM A194, ASTM F593, DIN 931, DIN 933, ISO 4017, BS 3692",
      },
      {
        label: "Size Range",
        value: 'M3 to M100, 1/4" to 4", Length up to 1000mm',
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Stainless Steel Fastener Supplier",
    description:
      "Starlight Tubes offers a comprehensive range of stainless steel fasteners for critical applications. We provide certified products with full traceability and competitive pricing.",
    features: [
      "ASTM & DIN Certified",
      "Full Batch Traceability",
      "Custom Manufacturing",
      "Corrosion Resistant",
      "Bulk Order Capability",
      "Quick Delivery Service",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Stainless Steel Fasteners Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Stainless Steel Fasteners
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality stainless steel fasteners manufactured to meet
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

export default StainlessSteelFasteners;
