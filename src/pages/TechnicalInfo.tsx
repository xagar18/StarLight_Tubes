import { useSEO } from "@/hooks/use-seo";
import { useState } from "react";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import ChemicalInfo from "../components/sub components/ChemicalInfo";
import DimensionsInfo from "../components/sub components/DimensionsInfo";
import MechanicalInfo from "../components/sub components/MechanicalInfo";

const TechnicalInfo = () => {
  useSEO({
    title:
      "Technical Data - Steel Pipe Specifications | Chemical Composition, Mechanical Properties | Starlight Tubes",
    description:
      "Steel pipe technical specifications from Starlight Tubes - leading manufacturer and exporter. Chemical composition, mechanical properties, dimensions of stainless steel, carbon steel, nickel alloy pipes. ASTM, ASME, DIN standards. Technical datasheets for 304, 316, ASTM A106, API 5L, Inconel pipes.",
    keywords:
      "steel pipe specifications, steel tube technical data, pipe chemical composition, pipe mechanical properties, pipe dimensions, stainless steel specifications, carbon steel specifications, nickel alloy specifications, ASTM specifications, ASME standards, pipe datasheet, steel pipe manufacturer specifications, steel tube data, 304 stainless steel composition, 316 stainless steel properties, ASTM A106 specifications, API 5L dimensions",
    url: "https://www.starlighttubes.com/technical-info",
  });
  const [view, setView] = useState<"chemical" | "mechanical" | "dimensions">(
    "chemical"
  );

  return (
    <div className="flex min-h-svh  flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Technical Information"
          subtitle="Datasheets, specs and engineering support"
          image="https://res.cloudinary.com/dtdardvqm/image/upload/f_avif,q_auto,w_1200,c_fill/Home_aaq22e"
        />

        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setView("chemical")}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                view === "chemical"
                  ? "bg-sky-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              Chemical Composition
            </button>
            <button
              onClick={() => setView("mechanical")}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                view === "mechanical"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              Mechanical Properties
            </button>
            <button
              onClick={() => setView("dimensions")}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                view === "dimensions"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              Pipe Dimensions
            </button>
          </div>

          {/* Chemical view: show stainless steel composition table first */}
          {view === "chemical" ? (
            <ChemicalInfo />
          ) : view === "mechanical" ? (
            <MechanicalInfo />
          ) : view === "dimensions" ? (
            <DimensionsInfo />
          ) : null}
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

export default TechnicalInfo;
