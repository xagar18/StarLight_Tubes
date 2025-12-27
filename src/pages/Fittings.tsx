import { useSEO } from "@/hooks/use-seo";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { CommonCTA } from "../components/sub components/CommonCTA";

// Extra data component for more information (styled like CommonCTA)
const FittingsApplicationsCTA = () => {
  const data = {
    title: "Types of Pipe Fittings",
    paragraph1:
      "Pipe fittings are essential for connecting, terminating, controlling flow, and changing the direction of piping in various industries.",
    paragraph2:
      "We offer a wide range of fittings including elbows, tees, reducers, couplings, and flanges, manufactured to international standards for reliability and safety.",
    specifications: [
      {
        label: "Key Types",
        value: "Elbows, Tees, Reducers, Couplings, Caps, Stub Ends, Flanges",
      },
      {
        label: "Advantages",
        value: "Leak-proof, Durable, Corrosion-resistant, Versatile",
      },
      {
        label: "Industries Served",
        value: "Oil & Gas, Chemical, Power, Water Treatment, Construction",
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

const Fittings = () => {
  useSEO({
    title:
      "Pipe Fittings & Flanges - Starlight Tubes | Elbows, Tees, Reducers | Middle East Suppliers",
    description:
      "Premium pipe fittings and flanges manufacturer. Stainless steel, carbon steel elbows, tees, reducers, caps, couplings, unions. Butt weld, socket weld, threaded fittings. Supply to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain.",
    keywords:
      "pipe fittings UAE, flanges Saudi Arabia, steel elbows Qatar, pipe tees Oman, reducers Kuwait, butt weld fittings Bahrain, socket weld fittings Middle East, threaded fittings GCC, pipe flanges UAE, steel couplings Saudi Arabia, pipe caps Qatar",
    url: "https://www.starlighttubes.com/fittings",
  });
  const ctaData = {
    title: "Pipe Fittings & Flanges",
    paragraph1:
      "Starlight Tubes supplies a comprehensive range of pipe fittings and flanges in stainless steel, carbon steel, alloy steel, and other materials. Our fittings are designed for high performance, leak-proof connections, and durability in demanding industrial environments.",
    paragraph2:
      "All fittings and flanges are manufactured to international standards such as ASTM, ASME, DIN, and EN. Applications include oil & gas, chemical, power, water treatment, and construction. Products are supplied with test certificates and full traceability.",
    specifications: [
      {
        label: "Types Available",
        value: "Elbows, Tees, Reducers, Couplings, Caps, Stub Ends, Flanges",
      },
      {
        label: "Materials",
        value:
          "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys, Copper Alloys",
      },
      {
        label: "Size Range",
        value: '1/2" NB to 48" NB',
      },
      {
        label: "Standards",
        value:
          "ASTM A403, A234, A105, A182, EN 10253, DIN 2605, ASME B16.9, B16.5",
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Pipe Fittings & Flanges"
          subtitle="High-quality fittings and flanges for industrial piping systems"
          image="/MainScrollableImage/Home.webp"
        />

        <div>
          {/* Fittings Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-20 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Pipe Fittings
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Pipe Fittings & Flanges
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Leak-proof, durable fittings and flanges for all industrial needs
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
          <FittingsApplicationsCTA />
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

export default Fittings;
