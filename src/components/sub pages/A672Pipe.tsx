import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const A672Pipe = () => {
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
    title: "Premium ASTM A672 EFW Pipes",
    paragraph1:
      "Starlight Tubes supplies premium ASTM A672 Electric Fusion Welded (EFW) steel pipes designed for high-pressure service at moderate temperatures. ASTM A672 pipes are fabricated from carbon and alloy steel plates with double submerged arc welding and are essential for steam systems, high-pressure process piping, hydrocracker units, and critical pressure applications in power generation and petrochemical industries.",
    paragraph2:
      "Our ASTM A672 pipes are available in multiple grades including B60, B65, B70, C60, C65, C70, D70, E60, E65, and E70 with various class designations for different pressure ratings. Each pipe undergoes 100% radiographic inspection of weld seams, stress relief heat treatment, hydrostatic testing, and mechanical property verification to ensure superior performance in demanding high-pressure service conditions.",
    specifications: [
      {
        label: "Grades",
        value:
          "ASTM A672 B60, B65, B70, C60, C65, C70, D70, E60, E65, E70, H75, J80",
      },
      {
        label: "Size Range",
        value: 'NB 16" to 80", Wall Thickness 8mm to 80mm, Length up to 12m',
      },
      {
        label: "Standards",
        value: "ASTM A672, ASME SA672, EN 10217-2, EN 10217-5",
      },
      {
        label: "Applications",
        value:
          "High-Pressure Steam, Hydrocrackers, Power Plants, Process Piping, Pressure Vessels",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center">
          <ImagesSliderDemo />
        </div>

        {/* A672 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            ASTM A672 EFW Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality ASTM A672 Electric Fusion Welded pipes for
            high-pressure service at moderate temperatures
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
              Premium Epoxy Coating Solutions
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Industry-leading FBE and epoxy coating applications for superior
              corrosion protection and extended service life
            </p>
          </div>
          <CardHoverEffectDemo projects={projects} />
        </div>

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

export default A672Pipe;
