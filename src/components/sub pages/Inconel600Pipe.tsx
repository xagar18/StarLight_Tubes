import { CardHoverEffectDemo } from "../main components/CoatingImgCard";
import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";
import { CommonCTA } from "../sub components/ StainlessSteelTubeCTA";

const Inconel600Pipe = () => {
  const projects = [
    {
      title: "Inconel 600 Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier1.jpg",
    },
    {
      title: "Alloy 600 Welded Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier2.jpg",
    },
    {
      title: "Inconel 600 Seamless Pipe",
      img: "/inconel-pipe/inconel-pipe-supplier3.jpg",
    },
  ];

  const ctaData = {
    title: "Premium Inconel 600 Pipes",
    paragraph1:
      "Starlight Tubes supplies high-quality Inconel 600 pipes (UNS N06600) designed for exceptional performance in high-temperature corrosive environments. Inconel 600 pipes offer outstanding resistance to oxidation, carburization, chloride-ion stress-corrosion cracking, and sulfur attack at temperatures up to 2150°F, making them essential for heat treating fixtures, chemical processing plants, nuclear reactor components, and high-temperature furnace applications.",
    paragraph2:
      "We produce Inconel 600 pipes in seamless and welded configurations with hot finished and cold drawn options. Each pipe is manufactured under stringent quality protocols including solution annealing at 1900-2000°F, ultrasonic inspection, PMI verification, hydrostatic testing, and mechanical property validation to ensure dimensional accuracy and metallurgical integrity for critical high-temperature service.",
    specifications: [
      {
        label: "Grade",
        value: "Inconel 600 (UNS N06600, WERKSTOFF NR. 2.4816)",
      },
      {
        label: "Size Range",
        value: 'NB 1/8" to 24", Schedule 5S to XXS, Length up to 12 meters',
      },
      {
        label: "Standards",
        value:
          "ASTM B167, ASTM B516, ASME SB167, AMS 5540, DIN 17458, EN 10216-5",
      },
      {
        label: "Applications",
        value:
          "Thermal Processing, Nuclear Steam Generators, Chemical Plants, Heat Exchangers",
      },
    ],
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Inconel 600 Pipe Section Header */}
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
              Product Overview
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Inconel 600 Pipes
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Premium quality Inconel 600 pipes manufactured to meet international
            standards for diverse industrial applications
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
              Explore More Inconel 600 Products
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Explore Inconel 600 products with excellent oxidation resistance
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

export default Inconel600Pipe;
