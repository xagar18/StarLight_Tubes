import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { NavbarDemo } from "../main components/Navbar";
import { PageHero } from "../main components/PageHero";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const StainlessSteelPipe = () => {
  const projects = [
    {
      title: "Stainless Steel Pipe",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier1.jpg",
    },
    {
      title: "SS ERW Pipe",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier2.jpg",
    },
    {
      title: "Stainless Steel Seamless Pipe",
      img: "/stainless-steel-pipe/stainless-steel-pipe-tube-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Stainless Steel Pipes",
    paragraph1:
      "Starlight Tubes is a leading  supplier of high-quality stainless steel pipes designed for critical applications across diverse industries. Our pipes offer exceptional resistance to corrosion, oxidation, and high temperatures, making them ideal for oil & gas pipelines, chemical processing plants, water treatment facilities, and food processing industries.",
    paragraph2:
      "Our comprehensive range includes seamless and welded stainless steel pipes manufactured to stringent quality standards. Each pipe undergoes thorough testing including hydrostatic testing, ultrasonic inspection, and dimensional verification to ensure superior quality and reliability for your industrial projects.",
    specifications: [
      {
        label: "Grades",
        value: "304, 304L, 316, 316L, 321, 347, 310S, 904L, 2205, 2507 Duplex",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 24", Schedule 5S to XXS, Length up to 6 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM A312, ASTM A358, ASTM A790, ASME B36.19, DIN 17457, EN 10217",
      },
      {
        label: "Types",
        value: "Seamless, ERW, EFW, LSAW, DSAW with polished or pickled finish",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Stainless Steel Pipe Supplier",
    description:
      "Starlight Tubes is a leading manufacturer and exporter of stainless steel pipes. We provide certified products with competitive pricing and reliable delivery for your industrial projects.",
    features: [
      "ASTM A312 Certified",
      "Seamless & Welded Types",
      "Multiple Grades Stock",
      "Competitive Pricing",
      "IBR Approved",
      "Worldwide Export",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <PageHero
            title="Stainless Steel Pipes"
            subtitle="High-grade SS pipes for industrial applications"
            image="/MainScrollableImage/Home.webp"
          />
        </div>

        {/* Stainless Steel Pipes Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Stainless Steel Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality stainless steel pipes manufactured to meet
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

export default StainlessSteelPipe;
