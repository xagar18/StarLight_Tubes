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
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      {
        name: "Technical Info",
        url: "https://www.starlighttubes.com/technical-info",
      },
    ],
    articleSchema: {
      headline: "Steel Pipe Technical Specifications & Data",
      description:
        "Comprehensive technical data including chemical composition, mechanical properties, and dimensions for stainless steel, carbon steel, and nickel alloy pipes.",
      datePublished: "2024-01-01",
      dateModified: "2025-01-11",
    },
    speakableContent: {
      headline: "Technical Specifications for Steel Pipes & Tubes",
      summary:
        "Access comprehensive technical data including chemical composition, mechanical properties, and pipe dimensions for stainless steel, carbon steel, and nickel alloy pipes meeting ASTM, ASME, and DIN standards.",
    },
    entityType: "Service",
    relatedEntities: [
      "chemical composition",
      "mechanical properties",
      "pipe dimensions",
      "ASTM standards",
      "ASME specifications",
      "steel datasheets",
      "material grades",
    ],
    faqSchema: [
      {
        question: "What technical information does Starlight Tubes provide?",
        answer:
          "We provide comprehensive technical data including chemical composition, mechanical properties (tensile strength, yield strength, elongation), and pipe dimensions for all steel grades including stainless steel, carbon steel, and nickel alloys.",
      },
      {
        question: "What standards do Starlight Tubes products meet?",
        answer:
          "Our products meet international standards including ASTM, ASME, API, DIN, EN, and JIS specifications with complete mill test certificates and third-party inspection reports.",
      },
      {
        question: "How can I get technical support from Starlight Tubes?",
        answer:
          "Contact our technical team for material selection guidance, specification clarification, and custom requirement discussions. We provide 24/7 technical support for all inquiries.",
      },
    ],
    featuredSnippet: {
      type: "list",
      content: "Steel Pipe Technical Data Available at Starlight Tubes",
      listItems: [
        "Chemical Composition - Element Percentages for All Grades",
        "Mechanical Properties - Tensile, Yield Strength, Elongation",
        "Pipe Dimensions - OD, Wall Thickness, Weight per Meter",
        "ASTM/ASME Standards - A312, A106, A53, B407, B444",
        "Pressure Ratings - Working Pressure at Various Temperatures",
        "Equivalent Grades - International Standard Cross-Reference",
      ],
    },
    qaSchema: [
      {
        question: "What is the chemical composition of SS 304 pipe?",
        answer:
          "SS 304 contains 18-20% Chromium, 8-10.5% Nickel, max 0.08% Carbon, max 2% Manganese, max 0.75% Silicon with balance Iron. It meets ASTM A312 TP304 specification.",
        upvoteCount: 150,
      },
      {
        question: "What is the tensile strength of carbon steel pipe?",
        answer:
          "ASTM A106 Grade B carbon steel pipe has minimum tensile strength of 415 MPa (60 ksi), yield strength of 240 MPa (35 ksi), and elongation of 30%. API 5L Grade B has similar properties with 415 MPa tensile strength.",
        upvoteCount: 120,
      },
    ],
  });
  const [view, setView] = useState<"chemical" | "mechanical" | "dimensions">(
    "chemical",
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
