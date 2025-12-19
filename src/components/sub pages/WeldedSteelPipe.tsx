import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";
import { BottomCTA } from "../sub components/BottomCTA";

const WeldedSteelPipe = () => {
  const projects = [
    {
      title: "Stainless Steel Tube",
      img: "/StainlessSteelTube1.png",
    },
    {
      title: "Stainless Steel Seamless Tubes",
      img: "/StainlessSteelTube2.png",
    },
    {
      title: "Stainless Steel Tubing",
      img: "/StainlessSteelTube3.png",
    },
  ];

  const ctaData = {
    title: "Premium Welded Steel Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality welded steel pipes produced through advanced ERW (Electric Resistance Welding), LSAW (Longitudinal Submerged Arc Welding), and DSAW (Double Submerged Arc Welding) processes. Our welded steel pipes offer excellent dimensional accuracy, uniform wall thickness, and cost-effective solutions for oil & gas transmission, water supply, structural applications, and industrial piping systems requiring reliable performance in diverse operating conditions.",
    paragraph2:
      "We produce welded steel pipes in carbon steel, alloy steel, and stainless steel grades with black, galvanized, and epoxy-coated finishes. Each pipe undergoes stringent quality control including weld seam inspection, hydrostatic testing, ultrasonic examination, dimensional verification, and mechanical property testing to ensure compliance with international standards and superior performance in critical pipeline applications.",
    specifications: [
      {
        label: "Grades",
        value:
          "ASTM A53 Gr.B, API 5L Gr.B to X70, ASTM A106, ASTM A252, IS 3589",
      },
      {
        label: "Size Range",
        value:
          'NB 1/2" to 80", Wall Thickness 1.5mm to 25mm, Length up to 18 meters',
      },
      {
        label: "Standards",
        value: "ASTM A53, API 5L, ASTM A252, ASTM A500, EN 10219, DIN 2458",
      },
      {
        label: "Applications",
        value:
          "Oil & Gas Pipelines, Water Supply, Structural, Industrial Piping, Piling",
      },
    ],
  };

  const bottomCtaData = {
    title: "Your Trusted Welded Steel Pipe Partner",
    description:
      "Starlight Tubes provides high-quality ERW, LSAW, and DSAW welded pipes for pipeline and structural applications. We offer competitive pricing with certified quality assurance.",
    features: [
      "ERW/LSAW/DSAW Available",
      "API 5L Certified",
      "Weld Seam Inspected",
      "Large Diameter Options",
      "Coating Services",
      "Project-Based Pricing",
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Welded Steel Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Welded Steel Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality welded steel pipes manufactured to meet
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
              Explore More Carbon Steel Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Browse our complete range of carbon steel pipes for industrial
              piping systems
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

export default WeldedSteelPipe;
