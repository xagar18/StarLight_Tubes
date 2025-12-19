import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const ASTMA106Pipe = () => {
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
    title: "Premium ASTM A106 Seamless Pipes",
    paragraph1:
      "Starlight Tubes manufactures and supplies premium ASTM A106 seamless carbon steel pipes specifically designed for high-temperature service applications. ASTM A106 pipes are widely used in refineries, power plants, petrochemical facilities, and boiler systems where operating temperatures exceed 750°F. Available in Grade A, B, and C, these pipes provide excellent strength and reliability for critical pressure piping systems.",
    paragraph2:
      "Our ASTM A106 pipes are manufactured through hot finishing process with normalized or quenched and tempered heat treatment options. Each pipe undergoes rigorous testing including tensile testing, flattening tests, hydrostatic testing, and non-destructive examination to ensure compliance with ASME specifications for high-pressure, high-temperature service conditions.",
    specifications: [
      {
        label: "Grades",
        value: "ASTM A106 Grade A, Grade B, Grade C",
      },
      {
        label: "Size Range",
        value: 'NB 1/2" to 26", Schedule 40 to XXS, Length 5.8m to 12m',
      },
      {
        label: "Standards",
        value: "ASTM A106, ASME SA106, API 5L, EN 10216-2, DIN 17175",
      },
      {
        label: "Applications",
        value:
          "High Temperature Service, Refineries, Power Plants, Boiler Systems, Process Piping",
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

        {/* ASTM A106 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            ASTM A106 Seamless Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality ASTM A106 seamless carbon steel pipes for
            high-temperature and high-pressure service applications
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

export default ASTMA106Pipe;
