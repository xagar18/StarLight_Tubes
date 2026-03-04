/**
 * Netlify Edge Function: inject-canonical
 *
 * This edge function runs server-side on EVERY page request.
 * It modifies the HTML response to inject the correct canonical URL,
 * og:url, twitter:url, and hreflang tags based on the actual request URL.
 *
 * WHY: This is an SPA (React). All routes serve the same index.html.
 * The static HTML has canonical pointing to homepage ("/").
 * Googlebot often doesn't execute JavaScript, so it sees the WRONG canonical
 * for every page → "Alternative page with proper canonical tag" error.
 *
 * This edge function fixes that by rewriting the HTML at the CDN edge
 * BEFORE Googlebot receives it.
 */

// Netlify Edge Functions Context type (provided by Netlify runtime)
interface Context {
  next: () => Promise<Response>;
  geo?: {
    city?: string;
    country?: { code?: string; name?: string };
  };
}

const BASE_URL = "https://www.starlighttubes.com";

// SEO metadata per route for proper server-side rendering
const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title:
      "Starlight Tubes - Steel Pipe Manufacturer & Exporter | Stainless Steel, Carbon Steel, Nickel Alloy Pipes & Tubes",
    description:
      "Starlight Tubes is a leading steel pipe manufacturer and exporter in India. We manufacture and export stainless steel pipes, carbon steel tubes, nickel alloy pipes, inconel tubes, copper pipes, aluminium sheets, pipe fittings & flanges to 60+ countries. ISO 9001 certified.",
  },
  "/product": {
    title:
      "Products - Steel Pipe Manufacturer & Exporter | Stainless Steel, Carbon Steel, Nickel Alloy Pipes | Starlight Tubes",
    description:
      "Starlight Tubes - Leading manufacturer and exporter of steel pipes, tubes, fittings, flanges. We manufacture stainless steel pipes (304, 316, 316L), carbon steel pipes (ASTM A106, API 5L), nickel alloy pipes (Inconel 625, 600), copper pipes, aluminium pipes.",
  },
  "/about": {
    title:
      "About Us - Steel Pipe Manufacturer & Exporter India | Starlight Tubes",
    description:
      "Learn about Starlight Tubes - a leading steel pipe manufacturer and exporter in India. ISO 9001 certified, exporting stainless steel, carbon steel, nickel alloy pipes to 60+ countries worldwide.",
  },
  "/contact": {
    title:
      "Contact Steel Pipe Manufacturer & Exporter | Get Quote | Starlight Tubes Mumbai India",
    description:
      "Contact Starlight Tubes for steel pipe enquiries, quotes, and orders. Leading manufacturer and exporter of stainless steel, carbon steel, nickel alloy pipes in Mumbai, India.",
  },
  "/stainless-steel": {
    title:
      "Stainless Steel Pipe Manufacturer & Exporter | 304, 316, 316L Pipes & Tubes | Starlight Tubes",
    description:
      "Leading stainless steel pipe manufacturer and exporter. We manufacture SS 304, 316, 316L, duplex, super duplex stainless steel pipes, tubes, sheets, bars. Export to 60+ countries.",
  },
  "/carbon-steel": {
    title:
      "Carbon Steel Pipe Manufacturer & Exporter | ASTM A106, API 5L, ASTM A53 Pipes | Starlight Tubes",
    description:
      "Carbon steel pipe manufacturer and exporter in India. ASTM A106, API 5L Grade B, X42, X52, X65, ASTM A53 pipes for oil & gas, petrochemical industries. ISO certified.",
  },
  "/nickel-alloys": {
    title:
      "Nickel Alloy Pipe Manufacturer & Exporter | Nickel 200, Monel, Hastelloy Pipes | Starlight Tubes",
    description:
      "Nickel alloy pipe manufacturer and exporter. Nickel 200, Monel 400, Hastelloy C276, Alloy 20 pipes and tubes for high-temperature and corrosive environments.",
  },
  "/inconel": {
    title:
      "Inconel Pipe Manufacturer & Exporter | Inconel 625, 600, 718 Pipes | Starlight Tubes",
    description:
      "Inconel pipe manufacturer and exporter in India. Inconel 625, 600, 718 pipes, tubes, plates for aerospace, oil & gas, chemical processing. Premium superalloy products.",
  },
  "/copper": {
    title:
      "Copper Pipe Manufacturer & Exporter | Copper Tubes, Sheets, Cupro Nickel Pipes | Starlight Tubes",
    description:
      "Copper pipe manufacturer and exporter. Copper pipes, tubes, sheets, bars, cupro nickel 90/10, 70/30 pipes for marine, HVAC, plumbing, industrial applications.",
  },
  "/aluminium": {
    title:
      "Aluminium Pipe Manufacturer & Exporter | 6061, 6063, 5052, 7075 Aluminium Pipes | Starlight Tubes",
    description:
      "Aluminium pipe manufacturer and exporter in India. 6061, 6063, 5052, 7075 aluminium pipes, sheets, bars, coils for aerospace, construction, marine industries.",
  },
  "/fittings": {
    title:
      "Pipe Fittings Manufacturer & Exporter | Elbows, Tees, Reducers, Flanges | Starlight Tubes",
    description:
      "Pipe fittings manufacturer and exporter. Stainless steel, carbon steel elbows, tees, reducers, caps, couplings, unions, flanges. Butt weld, socket weld, threaded fittings.",
  },
  "/coating": {
    title:
      "FBE Coated Pipe Manufacturer & Exporter | Epoxy Coated Pipes | Starlight Tubes",
    description:
      "FBE coated pipe manufacturer and exporter. Fusion bonded epoxy, 3LPE, 3LPP coated pipes for corrosion protection in oil & gas, water pipeline applications.",
  },
  "/certificates": {
    title:
      "Quality Certificates - ISO 9001, PED, Export Certifications | Starlight Tubes Steel Manufacturer",
    description:
      "Starlight Tubes quality certifications including ISO 9001:2015, PED certification, mill test certificates, third party inspection reports for steel pipe products.",
  },
  "/technical-info": {
    title:
      "Technical Data - Steel Pipe Specifications | Chemical Composition, Mechanical Properties | Starlight Tubes",
    description:
      "Steel pipe technical specifications, chemical composition, mechanical properties, dimensional data for stainless steel, carbon steel, nickel alloy pipes and tubes.",
  },
  "/materials": {
    title:
      "Industrial Materials - Stainless Steel, Carbon Steel, Nickel Alloys, Inconel | Starlight Tubes Manufacturer",
    description:
      "Explore industrial materials including stainless steel, carbon steel, nickel alloys, inconel, copper, aluminium. Material grades, properties, and applications guide.",
  },

  // === Dynamic Sub-Pages (60 product pages) ===
  "/a671-pipe": {
    title:
      "ASTM A671 Pipe Manufacturer & Exporter | EFW Pipes | Starlight Tubes",
    description:
      "Leading ASTM A671 electric fusion welded pipe manufacturer and exporter. Premium EFW pipes for power plants and pressure vessels. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/a672-pipe": {
    title:
      "ASTM A672 Pipe Manufacturer & Exporter | High Pressure EFW Pipes | Starlight Tubes",
    description:
      "Leading ASTM A672 electric fusion welded pipe manufacturer and exporter. Premium high-pressure EFW pipes for power generation and petrochemical applications. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/api-5l-grade-b-pipe": {
    title:
      "API 5L Grade B Pipe Manufacturer - Oil & Gas Pipeline Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading API 5L Grade B carbon steel pipe manufacturer and exporter. PSL1, PSL2 line pipes for oil and gas pipelines. Seamless and welded configurations. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/api-5l-x42-pipe": {
    title:
      "API 5L X42 Pipe Manufacturer & Exporter | Line Pipes | Starlight Tubes",
    description:
      "Leading API 5L X42 line pipe manufacturer and exporter. Premium PSL1 & PSL2 certified pipes for oil and gas pipelines. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/api-5l-x52-pipe": {
    title:
      "API 5L X52 Pipe Manufacturer & Exporter | High Yield Line Pipes | Starlight Tubes",
    description:
      "Leading API 5L X52 line pipe manufacturer and exporter. Premium PSL1 & PSL2 certified high yield pipes for oil and gas transmission. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/api-5l-x65-pipe": {
    title:
      "API 5L X65 Pipe Manufacturer & Exporter | High Strength Line Pipes | Starlight Tubes",
    description:
      "Leading API 5L X65 high-strength line pipe manufacturer and exporter. Premium PSL2 certified pipes for offshore and deepwater applications. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/astm-a106-pipe": {
    title:
      "ASTM A106 Pipe Manufacturer - Grade A, B, C Carbon Steel Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading ASTM A106 carbon steel pipe manufacturer and exporter. Grade A, B, C seamless pipes for high temperature service. Boiler tubes, heat exchanger tubes. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/astm-a333-pipe": {
    title:
      "ASTM A333 Pipe Manufacturer & Exporter | Low Temperature Pipes | Starlight Tubes",
    description:
      "Leading ASTM A333 low temperature pipe manufacturer and exporter. Premium Grade 6 & Grade 9 cryogenic pipes for LNG and refrigeration. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/astm-a53-pipe": {
    title:
      "ASTM A53 Pipe Manufacturer & Exporter | Black Steel Pipes | Starlight Tubes",
    description:
      "Leading ASTM A53 pipe manufacturer and exporter. Premium black and galvanized steel pipes in ERW, seamless & welded configurations. ISO certified manufacturing. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/aluminium-5052": {
    title:
      "Aluminium 5052 Manufacturer - Marine Grade Alloy | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 5052 manufacturer and global exporter. Premium marine grade aluminium sheets, plates, and coils with excellent corrosion resistance. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/aluminium-6061": {
    title:
      "Aluminium 6061 Manufacturer - T6 Temper Alloy | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 6061 manufacturer and global exporter. Premium 6061-T6 aluminium pipes, sheets, bars, and plates for aerospace, automotive, and structural applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/aluminium-6063": {
    title:
      "Aluminium 6063 Manufacturer - Architectural Grade Extrusions | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 6063 manufacturer and global exporter. Premium architectural grade aluminium extrusions, pipes, and profiles for construction and decorative applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/aluminium-7075": {
    title:
      "Aluminium 7075 Manufacturer - Aerospace & Defense Grade | Starlight Tubes Global Exporter",
    description:
      "Leading Aluminium 7075 manufacturer and global exporter. Premium high-strength aerospace and defense grade aluminium plates, bars, and sheets. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/aluminium-coil": {
    title:
      "Aluminium Coil Manufacturer - ASTM B209 Roofing & Cladding Coils | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium coil manufacturer & global exporter. ASTM B209 aluminium coils for roofing, cladding & automotive applications. Custom widths available. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/aluminium-pipe": {
    title:
      "Aluminium Pipe Manufacturer - 6061, 6063, 5052, 7075 Aluminium Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium pipe manufacturer and exporter. Lightweight corrosion resistant pipes in 6061, 6063, 5052, 7075 grades for HVAC, construction, aerospace, automotive applications. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/aluminium-bar": {
    title:
      "Aluminium Round Bar Manufacturer - 6061/7075 Aerospace Grade Bars | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium round bar manufacturer & global exporter. ASTM B211 6061, 7075, 2024 aerospace grade bars. Excellent machinability & strength-to-weight ratio. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/aluminium-sheet": {
    title:
      "Aluminium Sheet Manufacturer - Aerospace & Marine Grade | Starlight Tubes Global Exporter",
    description:
      "Leading aluminium sheet manufacturer and global exporter. Premium aerospace and marine grade aluminium sheets in 6061, 5052, 7075, 3003 alloys. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/butt-weld-fittings": {
    title:
      "Butt Weld Fittings Manufacturer - Industrial Pipe Fittings | Starlight Tubes Global Exporter",
    description:
      "Leading butt weld fittings manufacturer & global exporter. Premium seamless weld fittings, elbows, tees, reducers in SS, carbon steel, alloy steel. ASME B16.9 certified. Export to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/cap-fittings": {
    title:
      "Cap Fittings Manufacturer - Pipe End Caps | Starlight Tubes Global Exporter",
    description:
      "Leading cap fittings manufacturer & global exporter. Premium pipe end caps, threaded caps, butt weld caps in SS, carbon steel, alloy steel. ASME B16.9/B16.11 certified. Export to 60+ countries worldwide.",
  },
  "/carbon-steel-pipe": {
    title:
      "Carbon Steel Pipe Manufacturer - ASTM A106, A53, API 5L Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading carbon steel pipe manufacturer and exporter. ASTM A106 Grade B/C, ASTM A53 Grade B, API 5L Grade B/X42/X52/X65 pipes. Seamless, ERW, welded pipes for oil gas, petrochemical, water pipeline applications. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/copper-fittings": {
    title:
      "Copper Fittings Manufacturer - Elbows, Tees, Couplings | Starlight Tubes Global Exporter",
    description:
      "Leading copper fittings manufacturer and global exporter. Premium copper elbows, tees, couplings, adapters for plumbing, HVAC, and refrigeration systems. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/copper-nickel-pipe": {
    title:
      "Copper Nickel Pipe Manufacturer - 90/10 & 70/30 CuNi | Starlight Tubes Global Exporter",
    description:
      "Leading copper nickel pipe manufacturer and global exporter. Premium C70600 (90/10) and C71500 (70/30) CuNi pipes for marine, offshore, and desalination applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/copper-nickel-tube": {
    title:
      "Copper Nickel Tube Manufacturer - CuNi 90/10 & 70/30 Heat Exchanger Tubes | Starlight Tubes Global Exporter",
    description:
      "Leading copper nickel tube manufacturer & global exporter. ASTM B111 CuNi 90/10 & 70/30 seamless tubes for heat exchangers & marine applications. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/copper-pipe": {
    title:
      "Copper Pipe Manufacturer - Type K, L, M Copper Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading copper pipe manufacturer and exporter. Type K, L, M copper pipes for plumbing, HVAC, and refrigeration applications. Medical gas and fire protection systems. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/copper-bar": {
    title:
      "Copper Round Bar Manufacturer - High Conductivity Bars | Starlight Tubes Global Exporter",
    description:
      "Leading copper round bar manufacturer and global exporter. Premium high conductivity copper bars for electrical, machining, and industrial applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/copper-sheet": {
    title:
      "Copper Sheet Manufacturer - ETP, DHP, OFHC Grades | Starlight Tubes Global Exporter",
    description:
      "Leading copper sheet manufacturer and global exporter. High conductivity ETP, DHP, OFHC copper sheets for electrical, roofing, and decorative applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/copper-tube": {
    title:
      "Copper Tube Manufacturer - Type K, L, M Tubing | Starlight Tubes Global Exporter",
    description:
      "Leading copper tube manufacturer and global exporter. Premium Type K, L, M copper tubing for plumbing, HVAC, and refrigeration systems. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/coupling-fittings": {
    title:
      "Coupling Fittings Manufacturer - Full & Half Couplings | Starlight Tubes Global Exporter",
    description:
      "Leading coupling fittings manufacturer & global exporter. Premium full couplings, half couplings, reducing couplings in socket weld, threaded types. ASME B16.11 certified. Export to 60+ countries worldwide.",
  },
  "/cupro-nickel-70-30": {
    title:
      "Cupro Nickel 70/30 Manufacturer - C71500 Alloy | Starlight Tubes Global Exporter",
    description:
      "Leading Cupro Nickel 70/30 (C71500) manufacturer and global exporter. Premium CuNi 70/30 pipes, tubes, and fittings for demanding marine and offshore applications. ISO certified manufacturer supplying to 60+ countries worldwide.",
  },
  "/cupro-nickel-90-10": {
    title:
      "CuNi 90/10 Pipe Manufacturer - C70600 Copper Nickel Marine Pipe | Starlight Tubes Global Exporter",
    description:
      "Leading CuNi 90/10 pipe manufacturer & global exporter. ASTM B466 C70600 copper nickel pipes for marine, desalination & offshore applications. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/elbow-fittings": {
    title:
      "Elbow Fittings Manufacturer - 90°, 45° Pipe Elbows | Starlight Tubes Global Exporter",
    description:
      "Leading elbow fittings manufacturer and exporter. 90 degree, 45 degree elbows in butt weld, socket weld, and threaded types. Stainless steel, carbon steel, alloy steel elbows. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/flanges": {
    title:
      "Flange Manufacturer - Weld Neck, Slip On, Blind Flanges | Starlight Tubes Global Exporter",
    description:
      "Leading flange fittings manufacturer and exporter. Weld neck, slip on, blind, socket weld flanges in ANSI, DIN, JIS standards. Stainless steel, carbon steel, alloy steel flanges. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/inconel-600-pipe": {
    title:
      "Inconel 600 Pipe Manufacturer - UNS N06600 ASTM B167 | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel 600 pipe manufacturer & global exporter. UNS N06600 seamless & welded pipes. High temperature oxidation resistant nickel-chromium alloy. ASTM B167/B516 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/inconel-600-plate": {
    title:
      "Inconel 600 Plate Manufacturer & Exporter | UNS N06600 Sheets & Coils | Starlight Tubes",
    description:
      "Leading Inconel 600 plate manufacturer and exporter in India. Premium UNS N06600 nickel-chromium alloy plates for furnace components, nuclear reactors & chemical processing. ASTM B168 certified. Global supply to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/inconel-625-pipe": {
    title:
      "Inconel 625 Pipe Manufacturer - UNS N06625 Superalloy Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel 625 pipe manufacturer and exporter. Superior corrosion and oxidation resistant alloy pipes for aerospace, marine, chemical processing applications. ASTM B444, B705 standards. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/inconel-625-plate": {
    title:
      "Inconel 625 Plate Manufacturer & Exporter | UNS N06625 Sheets & Coils | Starlight Tubes",
    description:
      "Leading Inconel 625 plate manufacturer and exporter in India. Premium UNS N06625 corrosion resistant alloy plates for marine, aerospace & chemical processing. ASTM B443 certified. Global supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/inconel-625-tubing": {
    title:
      "Inconel 625 Tubing Manufacturer - UNS N06625 ASTM B444 | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel 625 tubing manufacturer & global exporter. UNS N06625 seamless & welded tubes. High strength corrosion resistant alloy for aerospace & marine. ASTM B444 certified, NACE MR0175 compliant. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/inconel-bolts": {
    title:
      "Inconel Bolts Manufacturer & Exporter | Inconel 600/625/718 Fasteners | Starlight Tubes",
    description:
      "Leading Inconel bolts and fasteners manufacturer and exporter in India. Premium Inconel 600, 625, 718 hex bolts, studs, nuts for aerospace & high-temperature applications. ASTM F468 certified. Global supply to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/inconel-pipe": {
    title:
      "Inconel Pipe Manufacturer - Inconel 600, 625, 718 Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel pipe manufacturer and exporter. High temperature and corrosion resistant alloy pipes for aerospace, chemical, and marine applications. Inconel 600, 625, 718, 825 grades. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/inconel-plate": {
    title:
      "Inconel Plate Manufacturer - 600/625/718 Grades ASTM B168 | Starlight Tubes Global Exporter",
    description:
      "Leading Inconel plate manufacturer & global exporter. Inconel 600, 625, 718, 825 alloy plates for extreme temperature & corrosive applications. ASTM B168/B443 certified, aerospace approved. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/inconel-bar": {
    title:
      "Inconel Round Bar Manufacturer & Exporter | Inconel 600/625/718 Bars | Starlight Tubes",
    description:
      "Leading Inconel round bar manufacturer and exporter in India. Premium Inconel 600, 625, 718 round bars for aerospace, marine & gas turbine applications. ASTM B166 certified. Global supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/nickel-pipe": {
    title:
      "Nickel Pipe Manufacturer - Nickel 200, 201 Alloy Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading nickel alloy pipe manufacturer and exporter. Pure nickel 200, 201 pipes for high temperature and corrosion resistance. Chemical processing, petrochemical applications. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/nickel-sheet": {
    title:
      "Nickel Sheet Manufacturer & Exporter | Nickel 200/201 Plates & Coils | Starlight Tubes",
    description:
      "Leading nickel sheet manufacturer and exporter in India. Premium Nickel 200, Nickel 201 sheets, plates & coils for chemical processing and electronics. ASTM B162 certified. Global supply to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/pipe-fittings": {
    title:
      "Pipe Fittings Manufacturer - Elbows, Tees, Reducers, Couplings | Starlight Tubes Global Exporter",
    description:
      "Leading pipe fittings manufacturer and exporter. Steel elbows, tees, reducers, couplings, caps, stub ends for industrial applications. Butt weld, socket weld, threaded fittings. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE.",
  },
  "/reducer-fittings": {
    title:
      "Reducer Fittings Manufacturer - Concentric & Eccentric Reducers | Starlight Tubes Global Exporter",
    description:
      "Leading reducer fittings manufacturer & global exporter. Premium concentric reducers, eccentric reducers in butt weld, socket weld types. ASME B16.9 certified. SS, carbon steel, alloy steel. Export to 60+ countries.",
  },
  "/socket-weld-fittings": {
    title:
      "Socket Weld Fittings Manufacturer - High Pressure Fittings | Starlight Tubes Global Exporter",
    description:
      "Leading socket weld fittings manufacturer & global exporter. Premium high-pressure socket weld elbows, tees, couplings in SS, carbon steel. ASME B16.11 certified. Class 3000/6000/9000. Export to 60+ countries.",
  },
  "/stainless-steel-304-pipe": {
    title:
      "SS 304 Pipe Manufacturer - ASTM A312 TP304 Seamless/Welded | Starlight Tubes Global Exporter",
    description:
      "Leading SS 304 pipe manufacturer & global exporter. ASTM A312 TP304 seamless & welded stainless steel pipes. Austenitic grade with excellent corrosion resistance. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-304-plate": {
    title:
      "SS 304 Plate Manufacturer - ASTM A240 Stainless Steel Sheet | Starlight Tubes Global Exporter",
    description:
      "Leading SS 304 plate manufacturer & global exporter. ASTM A240 stainless steel plates & sheets. Multiple surface finishes available. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-316l-pipe": {
    title:
      "SS 316L Pipe Manufacturer - ASTM A312 TP316L Seamless/Welded | Starlight Tubes Global Exporter",
    description:
      "Leading SS 316L pipe manufacturer & global exporter. ASTM A312 TP316L low carbon seamless & welded pipes. IGC tested, pharmaceutical grade. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-316-plate": {
    title:
      "SS 316 Plate Manufacturer - ASTM A240 Marine Grade Sheet | Starlight Tubes Global Exporter",
    description:
      "Leading SS 316 plate manufacturer & global exporter. ASTM A240 marine grade stainless steel plates with molybdenum. Superior chloride resistance. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-316-tube": {
    title:
      "SS 316 Tube Manufacturer - ASTM A213/A269 TP316 Marine Grade | Starlight Tubes Global Exporter",
    description:
      "Leading SS 316 tube manufacturer & global exporter. ASTM A213/A269 TP316 seamless & welded stainless steel tubes. Marine grade with molybdenum for superior corrosion resistance. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-fasteners": {
    title:
      "Stainless Steel Fasteners Manufacturer - Bolts, Nuts, Screws | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel fasteners manufacturer & global exporter. SS bolts, nuts, screws, washers, studs in 304, 316, A2-70, A4-80 grades. ASTM A193/A194 certified. Corrosion resistant industrial fasteners. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-pipe": {
    title:
      "Stainless Steel Pipe Manufacturer - 304, 316, 316L SS Pipes | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel pipe manufacturer and exporter. 304, 316, 316L grade pipes in seamless and ERW. ASTM A312, A213 standards. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia, Singapore.",
  },
  "/stainless-steel-bar": {
    title:
      "Stainless Steel Round Bar Manufacturer - 304/316/410 Grades | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel round bar manufacturer & global exporter. Hot rolled & cold drawn SS bars in 304, 316, 321, 410, 420 grades. Bright finish, centerless ground bars. ASTM A276/A479 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-sheet": {
    title:
      "Stainless Steel Sheet Manufacturer - 304/316/321 Grades | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel sheet manufacturer & global exporter. Hot rolled & cold rolled SS sheets in 304, 316, 321, 310S grades. Premium quality plates with 2B, BA, mirror finish. ASTM A240 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-tube": {
    title:
      "Stainless Steel Tube Manufacturer - Seamless & Welded SS Tubes | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel tube manufacturer and exporter. Seamless and welded SS tubes in 304, 316, 316L, duplex, super duplex grades. ASTM A269, A270, A213 standards. ISO certified manufacturer supplying to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/stainless-steel-wire": {
    title:
      "SS Wire Manufacturer - Stainless Steel Spring & Welding Wire | Starlight Tubes Global Exporter",
    description:
      "Leading stainless steel wire manufacturer & global exporter. Premium spring wire, welding wire, cold drawn wire. Multiple tempers available. ISO 9001:2015 certified. Export to 60+ countries - USA, UK, Germany, UAE, Saudi Arabia.",
  },
  "/tee-fittings": {
    title:
      "Tee Fittings Manufacturer - Equal & Reducing Tees | Starlight Tubes Global Exporter",
    description:
      "Leading tee fittings manufacturer & global exporter. Premium equal tees, reducing tees in butt weld, socket weld, threaded types. ASME B16.9/B16.11 certified. SS, carbon steel, alloy steel. Export to 60+ countries.",
  },
  "/threaded-fittings": {
    title:
      "Threaded Fittings Manufacturer - NPT BSP Fittings | Starlight Tubes Global Exporter",
    description:
      "Leading threaded fittings manufacturer & global exporter. Premium NPT, BSP, BSPT threaded pipe fittings in SS, carbon steel. ASME B16.11 certified. Easy assembly fittings. Export to 60+ countries worldwide.",
  },
  "/union-fittings": {
    title:
      "Union Fittings Manufacturer - Pipe Unions | Starlight Tubes Global Exporter",
    description:
      "Leading union fittings manufacturer & global exporter. Premium threaded unions, socket weld unions, butt weld unions for easy disassembly. ASME B16.11 certified. SS, carbon steel. Export to 60+ countries.",
  },
};

export default async function handler(request: Request, context: Context) {
  // Only process HTML page requests (not assets, API calls, etc.)
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Skip static assets
  if (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/_") ||
    pathname.match(
      /\.(js|css|png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2|ttf|xml|txt|json|map)$/,
    )
  ) {
    return;
  }

  // Get the response from the origin (the SPA index.html)
  const response = await context.next();

  // Only modify HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Normalize the pathname: root stays "/", others strip trailing slash
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalUrl =
    normalizedPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${normalizedPath}`;

  // Get page-specific metadata (fallback to defaults for dynamic sub-pages)
  const pageMeta = PAGE_META[normalizedPath];

  let html = await response.text();

  // 1. Fix canonical URL
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );

  // 2. Fix hreflang tags
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en"\s+href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="en" href="${canonicalUrl}" />`,
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`,
  );

  // 3. Fix og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );

  // 4. Fix twitter:url
  html = html.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="twitter:url" content="${canonicalUrl}" />`,
  );

  // 5. Fix title and description if we have page-specific metadata
  if (pageMeta) {
    // Replace <title> tag
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${pageMeta.title}</title>`,
    );

    // Replace meta name="title"
    html = html.replace(
      /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="title" content="${pageMeta.title}" />`,
    );

    // Replace meta name="description"
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${pageMeta.description}" />`,
    );

    // Replace og:title
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${pageMeta.title}" />`,
    );

    // Replace og:description
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${pageMeta.description}" />`,
    );

    // Replace twitter:title
    html = html.replace(
      /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="twitter:title" content="${pageMeta.title}" />`,
    );

    // Replace twitter:description
    html = html.replace(
      /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="twitter:description" content="${pageMeta.description}" />`,
    );
  }

  // Return modified HTML with same headers
  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
}

export const config = {
  // Run on all paths (edge function will skip static assets internally)
  path: "/*",
};
