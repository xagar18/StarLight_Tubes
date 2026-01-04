import { useSEO } from "@/hooks/use-seo";
import { CoatingCtaParent } from "../components/main components/CoatingCta";
import { CardHoverEffectDemo } from "../components/main components/CoatingImgCard";
import Footer from "../components/main components/Fotter";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

const Coating = () => {
  useSEO({
    title:
      "FBE Coated Pipe Manufacturer & Exporter | Epoxy Coated Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading FBE coated pipe manufacturer and exporter in India. We manufacture FBE coated pipes, epoxy coated pipes, 3LPE coated pipes for corrosion protection. Premium quality coated pipes for oil gas, water transmission, pipeline industries. Export to USA, Europe, Middle East.",
    keywords:
      "FBE coated pipe manufacturer, epoxy coated pipe manufacturer, coated pipe exporter, FBE coating manufacturer, 3LPE coated pipe manufacturer, fusion bonded epoxy pipe, coated pipe factory, corrosion resistant pipe manufacturer, pipeline coating manufacturer, FBE pipe supplier India, epoxy coated pipe supplier, coated pipe for oil gas, coated pipe for water pipeline",
    url: "https://www.starlighttubes.com/coating",
  });
  const projects = [
    {
      title: "FBE Coated Pipe",
      img: "./FBE Coated Pipe.png",
    },
    {
      title: "Epoxy Coated Pipe",
      img: "./Epoxy Coated Pipe.png",
    },
    {
      title: "Epoxy Coated Carbon Steel Pipe",
      img: "./Epoxy Coated Carbon Steel Pipe.png",
    },
  ];
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          {/* Image Slider */}
          <PageHero
            title="Epoxy Coating Solutions"
            subtitle="Industry-leading FBE and epoxy coating for superior corrosion protection"
            image="https://res.cloudinary.com/dtdardvqm/image/upload/f_avif,q_auto,w_1200,c_fill/coating_bqrvof"
          />

          {/* Coating Information Section */}
          <div>
            <div className="w-full flex flex-col items-center justify-center mt-32 mb-12 px-4">
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 dark:bg-blue-500/20 dark:border-blue-500/30">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  Technical Guide
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                Complete Guide to Pipe Coating Systems
              </h1>

              <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
                Understanding epoxy coating technologies, surface preparation,
                and corrosion protection for industrial pipelines
              </p>
            </div>
            <CoatingCtaParent />
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
          {/* Infinite Moving Cards Section */}
          <div>
            <div>
              <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
                <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
                  <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                    Since 2020 • 5+ Years of Excellence
                  </span>
                </div>
              </div>
              <InfiniteMovingCardsDemo />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </>
  );
};

export default Coating;
