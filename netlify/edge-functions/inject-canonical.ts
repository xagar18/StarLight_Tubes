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
    title: "Starlight Tubes | Steel Pipe Manufacturer & Exporter",
    description:
      "Leading steel pipe manufacturer & exporter in India. SS, carbon steel, nickel alloy pipes, fittings & flanges. ISO 9001 certified. Export to 60+ countries.",
  },
  "/product": {
    title: "Steel Pipes & Tubes Products | Starlight Tubes",
    description:
      "SS, carbon steel, nickel alloy, inconel, copper pipes, fittings & flanges. Seamless & welded. ASTM, API, ASME standards. Export to 60+ countries.",
  },
  "/about": {
    title: "About Starlight Tubes | Steel Pipe Manufacturer",
    description:
      "ISO 9001 certified steel pipe manufacturer & exporter in India since 2020. Exporting SS, carbon steel, nickel alloy pipes to 60+ countries worldwide.",
  },
  "/contact": {
    title: "Contact Us | Get a Quote | Starlight Tubes",
    description:
      "Contact Starlight Tubes for steel pipe enquiries & quotes. Call +91-8591470791 or email sales@starlighttubes.com. Mumbai, India.",
  },
  "/stainless-steel": {
    title: "Stainless Steel Pipe Manufacturer | Starlight Tubes",
    description:
      "SS 304, 316, 316L, duplex, super duplex pipe manufacturer & exporter. Seamless & welded SS pipes, tubes, sheets, bars. ISO certified.",
  },
  "/carbon-steel": {
    title: "Carbon Steel Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A106, API 5L, ASTM A53 carbon steel pipe manufacturer & exporter. Seamless & ERW pipes for oil & gas, petrochemical industries.",
  },
  "/nickel-alloys": {
    title: "Nickel Alloy Pipe Manufacturer | Starlight Tubes",
    description:
      "Nickel 200, Monel 400, Hastelloy C276, Alloy 20 pipe manufacturer & exporter. High-temperature & corrosion resistant alloy pipes.",
  },
  "/inconel": {
    title: "Inconel Pipe Manufacturer | Starlight Tubes",
    description:
      "Inconel 625, 600, 718 pipe manufacturer & exporter. Superalloy pipes for aerospace, oil & gas, chemical processing. ASTM B444 certified.",
  },
  "/copper": {
    title: "Copper Pipe & Tube Manufacturer | Starlight Tubes",
    description:
      "Copper pipes, tubes, sheets, bars & cupro nickel 90/10, 70/30 manufacturer. For marine, HVAC, plumbing & industrial applications.",
  },
  "/aluminium": {
    title: "Aluminium Pipe Manufacturer | Starlight Tubes",
    description:
      "6061, 6063, 5052, 7075 aluminium pipe, sheet & bar manufacturer & exporter. For aerospace, automotive, marine & construction.",
  },
  "/fittings": {
    title: "Pipe Fittings Manufacturer | Starlight Tubes",
    description:
      "SS, carbon steel elbows, tees, reducers, caps, unions, flanges manufacturer. Butt weld, socket weld & threaded fittings. ASME certified.",
  },
  "/coating": {
    title: "FBE & Epoxy Coated Pipes | Starlight Tubes",
    description:
      "FBE, 3LPE, 3LPP coated pipe manufacturer. Corrosion protection coatings for oil & gas, water pipelines. ISO certified.",
  },
  "/certificates": {
    title: "Quality Certifications | Starlight Tubes",
    description:
      "ISO 9001:2015, PED, mill test certificates & third party inspection reports. Quality-assured steel pipe manufacturer.",
  },
  "/technical-info": {
    title: "Steel Pipe Technical Specifications | Starlight Tubes",
    description:
      "Chemical composition, mechanical properties & dimensional data for SS, carbon steel, nickel alloy pipes & tubes. ASTM, API standards.",
  },
  "/materials": {
    title: "Industrial Materials Guide | Starlight Tubes",
    description:
      "SS, carbon steel, nickel alloys, inconel, copper & aluminium material grades, properties & applications guide.",
  },

  // === Dynamic Sub-Pages (60 product pages) ===
  "/a671-pipe": {
    title: "ASTM A671 EFW Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A671 electric fusion welded pipe manufacturer & exporter. EFW pipes for power plants & pressure vessels. ISO certified.",
  },
  "/a672-pipe": {
    title: "ASTM A672 EFW Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A672 high-pressure EFW pipe manufacturer & exporter. Pipes for power generation & petrochemical applications. ISO certified.",
  },
  "/api-5l-grade-b-pipe": {
    title: "API 5L Grade B Pipe Manufacturer | Starlight Tubes",
    description:
      "API 5L Grade B carbon steel pipe manufacturer. PSL1 & PSL2 line pipes for oil & gas pipelines. Seamless & welded. ISO certified.",
  },
  "/api-5l-x42-pipe": {
    title: "API 5L X42 Pipe Manufacturer | Starlight Tubes",
    description:
      "API 5L X42 line pipe manufacturer & exporter. PSL1 & PSL2 certified pipes for oil & gas pipelines. Export to 60+ countries.",
  },
  "/api-5l-x52-pipe": {
    title: "API 5L X52 Pipe Manufacturer | Starlight Tubes",
    description:
      "API 5L X52 high-yield line pipe manufacturer. PSL1 & PSL2 certified for oil & gas transmission. Export to 60+ countries.",
  },
  "/api-5l-x65-pipe": {
    title: "API 5L X65 Pipe Manufacturer | Starlight Tubes",
    description:
      "API 5L X65 high-strength line pipe manufacturer. PSL2 certified for offshore & deepwater pipelines. Export to 60+ countries.",
  },
  "/astm-a106-pipe": {
    title: "ASTM A106 Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A106 Grade A, B, C seamless carbon steel pipe manufacturer. For high-temperature boiler & heat exchanger service.",
  },
  "/astm-a333-pipe": {
    title: "ASTM A333 Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A333 low-temperature pipe manufacturer. Grade 6 & 9 cryogenic pipes for LNG & refrigeration. ISO certified.",
  },
  "/astm-a53-pipe": {
    title: "ASTM A53 Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A53 black & galvanized steel pipe manufacturer. ERW, seamless & welded pipes. ISO certified. Export to 60+ countries.",
  },
  "/aluminium-5052": {
    title: "Aluminium 5052 Manufacturer | Starlight Tubes",
    description:
      "Aluminium 5052 marine grade sheets, plates & coils manufacturer. Excellent corrosion resistance. ISO certified. Export worldwide.",
  },
  "/aluminium-6061": {
    title: "Aluminium 6061-T6 Manufacturer | Starlight Tubes",
    description:
      "Aluminium 6061-T6 pipes, sheets, bars & plates manufacturer. For aerospace, automotive & structural applications. ISO certified.",
  },
  "/aluminium-6063": {
    title: "Aluminium 6063 Manufacturer | Starlight Tubes",
    description:
      "Aluminium 6063 architectural grade extrusions & pipes manufacturer. For construction & decorative applications. ISO certified.",
  },
  "/aluminium-7075": {
    title: "Aluminium 7075 Manufacturer | Starlight Tubes",
    description:
      "Aluminium 7075 aerospace & defense grade plates, bars & sheets manufacturer. High-strength alloy. ISO certified. Export worldwide.",
  },
  "/aluminium-coil": {
    title: "Aluminium Coil Manufacturer | Starlight Tubes",
    description:
      "ASTM B209 aluminium coil manufacturer. Roofing, cladding & automotive coils in custom widths. ISO certified. Export to 60+ countries.",
  },
  "/aluminium-pipe": {
    title: "Aluminium Pipe Manufacturer | Starlight Tubes",
    description:
      "6061, 6063, 5052, 7075 aluminium pipe manufacturer. For HVAC, construction, aerospace & automotive. ISO certified. Export worldwide.",
  },
  "/aluminium-bar": {
    title: "Aluminium Round Bar Manufacturer | Starlight Tubes",
    description:
      "ASTM B211 aluminium round bar manufacturer. 6061, 7075, 2024 aerospace grade bars. ISO certified. Export to 60+ countries.",
  },
  "/aluminium-sheet": {
    title: "Aluminium Sheet Manufacturer | Starlight Tubes",
    description:
      "Aerospace & marine grade aluminium sheet manufacturer. 6061, 5052, 7075, 3003 alloys. ISO certified. Export to 60+ countries.",
  },
  "/butt-weld-fittings": {
    title: "Butt Weld Fittings Manufacturer | Starlight Tubes",
    description:
      "Butt weld fittings manufacturer. Elbows, tees, reducers in SS, carbon & alloy steel. ASME B16.9 certified. Export to 60+ countries.",
  },
  "/cap-fittings": {
    title: "Cap Fittings Manufacturer | Starlight Tubes",
    description:
      "Pipe end cap fittings manufacturer. Butt weld & threaded caps in SS, carbon & alloy steel. ASME B16.9/B16.11. Export worldwide.",
  },
  "/carbon-steel-pipe": {
    title: "Carbon Steel Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A106, A53, API 5L carbon steel pipe manufacturer. Seamless, ERW & welded pipes for oil & gas, petrochemical applications.",
  },
  "/copper-fittings": {
    title: "Copper Fittings Manufacturer | Starlight Tubes",
    description:
      "Copper elbows, tees, couplings & adapters manufacturer. For plumbing, HVAC & refrigeration. ISO certified. Export worldwide.",
  },
  "/copper-nickel-pipe": {
    title: "Copper Nickel Pipe Manufacturer | Starlight Tubes",
    description:
      "C70600 (90/10) & C71500 (70/30) CuNi pipe manufacturer. For marine, offshore & desalination. ISO certified. Export worldwide.",
  },
  "/copper-nickel-tube": {
    title: "Copper Nickel Tube Manufacturer | Starlight Tubes",
    description:
      "ASTM B111 CuNi 90/10 & 70/30 tube manufacturer. For heat exchangers & marine applications. ISO certified. Export worldwide.",
  },
  "/copper-pipe": {
    title: "Copper Pipe Manufacturer | Starlight Tubes",
    description:
      "Type K, L, M copper pipe manufacturer. For plumbing, HVAC, refrigeration & medical gas systems. ISO certified. Export worldwide.",
  },
  "/copper-bar": {
    title: "Copper Round Bar Manufacturer | Starlight Tubes",
    description:
      "High-conductivity copper round bar manufacturer. For electrical, machining & industrial applications. ISO certified. Export worldwide.",
  },
  "/copper-sheet": {
    title: "Copper Sheet Manufacturer | Starlight Tubes",
    description:
      "ETP, DHP, OFHC copper sheet manufacturer. For electrical, roofing & decorative applications. ISO certified. Export to 60+ countries.",
  },
  "/copper-tube": {
    title: "Copper Tube Manufacturer | Starlight Tubes",
    description:
      "Type K, L, M copper tube manufacturer. For plumbing, HVAC & refrigeration systems. ISO certified. Export to 60+ countries.",
  },
  "/coupling-fittings": {
    title: "Coupling Fittings Manufacturer | Starlight Tubes",
    description:
      "Full, half & reducing coupling manufacturer. Socket weld & threaded types. ASME B16.11 certified. Export to 60+ countries.",
  },
  "/cupro-nickel-70-30": {
    title: "Cupro Nickel 70/30 Manufacturer | Starlight Tubes",
    description:
      "C71500 CuNi 70/30 pipes, tubes & fittings manufacturer. For marine & offshore applications. ISO certified. Export worldwide.",
  },
  "/cupro-nickel-90-10": {
    title: "CuNi 90/10 Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM B466 C70600 copper nickel pipe manufacturer. For marine, desalination & offshore. ISO certified. Export to 60+ countries.",
  },
  "/elbow-fittings": {
    title: "Elbow Fittings Manufacturer | Starlight Tubes",
    description:
      "90° & 45° pipe elbow manufacturer. Butt weld, socket weld & threaded types in SS, CS & alloy steel. ASME B16.9 certified.",
  },
  "/flanges": {
    title: "Flange Manufacturer | Starlight Tubes",
    description:
      "Weld neck, slip on, blind & socket weld flange manufacturer. ANSI, DIN, JIS standards. SS, CS & alloy steel. ISO certified.",
  },
  "/inconel-600-pipe": {
    title: "Inconel 600 Pipe Manufacturer | Starlight Tubes",
    description:
      "UNS N06600 Inconel 600 seamless & welded pipe manufacturer. ASTM B167/B516 certified. Export to 60+ countries worldwide.",
  },
  "/inconel-600-plate": {
    title: "Inconel 600 Plate Manufacturer | Starlight Tubes",
    description:
      "UNS N06600 Inconel 600 plate & sheet manufacturer. For furnaces, nuclear reactors & chemical processing. ASTM B168 certified.",
  },
  "/inconel-625-pipe": {
    title: "Inconel 625 Pipe Manufacturer | Starlight Tubes",
    description:
      "UNS N06625 superalloy pipe manufacturer. For aerospace, marine & chemical processing. ASTM B444/B705 certified. Export worldwide.",
  },
  "/inconel-625-plate": {
    title: "Inconel 625 Plate Manufacturer | Starlight Tubes",
    description:
      "UNS N06625 Inconel 625 plate & sheet manufacturer. For marine, aerospace & chemical processing. ASTM B443 certified. Export worldwide.",
  },
  "/inconel-625-tubing": {
    title: "Inconel 625 Tubing Manufacturer | Starlight Tubes",
    description:
      "UNS N06625 seamless & welded tube manufacturer. ASTM B444, NACE MR0175 compliant. For aerospace & marine. Export worldwide.",
  },
  "/inconel-bolts": {
    title: "Inconel Bolts & Fasteners | Starlight Tubes",
    description:
      "Inconel 600, 625, 718 bolts, studs & nuts manufacturer. For aerospace & high-temperature use. ASTM F468 certified.",
  },
  "/inconel-pipe": {
    title: "Inconel Pipe Manufacturer | Starlight Tubes",
    description:
      "Inconel 600, 625, 718 pipe manufacturer. For aerospace, chemical & marine applications. ISO certified. Export to 60+ countries.",
  },
  "/inconel-plate": {
    title: "Inconel Plate Manufacturer | Starlight Tubes",
    description:
      "Inconel 600, 625, 718 plate manufacturer. ASTM B168/B443 certified. For extreme temperature & corrosive environments.",
  },
  "/inconel-bar": {
    title: "Inconel Round Bar Manufacturer | Starlight Tubes",
    description:
      "Inconel 600, 625, 718 round bar manufacturer. For aerospace, marine & gas turbines. ASTM B166 certified. Export worldwide.",
  },
  "/nickel-pipe": {
    title: "Nickel Pipe Manufacturer | Starlight Tubes",
    description:
      "Nickel 200 & 201 alloy pipe manufacturer. For chemical processing & high-temperature applications. ISO certified. Export worldwide.",
  },
  "/nickel-sheet": {
    title: "Nickel Sheet & Plate Manufacturer | Starlight Tubes",
    description:
      "Nickel 200 & 201 sheet, plate & coil manufacturer. ASTM B162 certified. For chemical processing & electronics. Export worldwide.",
  },
  "/pipe-fittings": {
    title: "Pipe Fittings Manufacturer | Starlight Tubes",
    description:
      "Steel elbows, tees, reducers, couplings & caps manufacturer. Butt weld, socket weld & threaded types. ASME certified. Export worldwide.",
  },
  "/reducer-fittings": {
    title: "Reducer Fittings Manufacturer | Starlight Tubes",
    description:
      "Concentric & eccentric reducer manufacturer. Butt weld & socket weld. ASME B16.9 certified. SS, CS & alloy steel. Export worldwide.",
  },
  "/socket-weld-fittings": {
    title: "Socket Weld Fittings Manufacturer | Starlight Tubes",
    description:
      "High-pressure socket weld fittings manufacturer. Elbows, tees, couplings in SS & CS. ASME B16.11 Class 3000/6000/9000.",
  },
  "/stainless-steel-304-pipe": {
    title: "SS 304 Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A312 TP304 seamless & welded stainless steel pipe manufacturer. Austenitic grade. ISO certified. Export to 60+ countries.",
  },
  "/stainless-steel-304-plate": {
    title: "SS 304 Plate Manufacturer | Starlight Tubes",
    description:
      "ASTM A240 SS 304 plate & sheet manufacturer. Multiple surface finishes. ISO certified. Export to 60+ countries worldwide.",
  },
  "/stainless-steel-316l-pipe": {
    title: "SS 316L Pipe Manufacturer | Starlight Tubes",
    description:
      "ASTM A312 TP316L low carbon seamless & welded pipe manufacturer. IGC tested, pharmaceutical grade. ISO certified.",
  },
  "/stainless-steel-316-plate": {
    title: "SS 316 Plate Manufacturer | Starlight Tubes",
    description:
      "ASTM A240 marine grade SS 316 plate & sheet manufacturer. Superior chloride resistance. ISO certified. Export worldwide.",
  },
  "/stainless-steel-316-tube": {
    title: "SS 316 Tube Manufacturer | Starlight Tubes",
    description:
      "ASTM A213/A269 TP316 seamless & welded tube manufacturer. Marine grade with molybdenum. ISO certified. Export worldwide.",
  },
  "/stainless-steel-fasteners": {
    title: "SS Fasteners Manufacturer | Starlight Tubes",
    description:
      "SS 304, 316 bolts, nuts, screws & washers manufacturer. A2-70, A4-80 grades. ASTM A193/A194 certified. Export to 60+ countries.",
  },
  "/stainless-steel-pipe": {
    title: "Stainless Steel Pipe Manufacturer | Starlight Tubes",
    description:
      "SS 304, 316, 316L seamless & ERW pipe manufacturer. ASTM A312, A213 standards. ISO certified. Export to 60+ countries.",
  },
  "/stainless-steel-bar": {
    title: "SS Round Bar Manufacturer | Starlight Tubes",
    description:
      "SS 304, 316, 321, 410 round bar manufacturer. Hot rolled & cold drawn. ASTM A276/A479 certified. Export to 60+ countries.",
  },
  "/stainless-steel-sheet": {
    title: "SS Sheet Manufacturer | Starlight Tubes",
    description:
      "SS 304, 316, 321 hot & cold rolled sheet manufacturer. 2B, BA, mirror finish. ASTM A240 certified. Export to 60+ countries.",
  },
  "/stainless-steel-tube": {
    title: "Stainless Steel Tube Manufacturer | Starlight Tubes",
    description:
      "SS 304, 316, 316L seamless & welded tube manufacturer. ASTM A269, A270, A213 standards. ISO certified. Export worldwide.",
  },
  "/stainless-steel-wire": {
    title: "SS Wire Manufacturer | Starlight Tubes",
    description:
      "SS spring wire, welding wire & cold drawn wire manufacturer. Multiple tempers. ISO certified. Export to 60+ countries.",
  },
  "/tee-fittings": {
    title: "Tee Fittings Manufacturer | Starlight Tubes",
    description:
      "Equal & reducing tee manufacturer. Butt weld, socket weld & threaded types. ASME B16.9/B16.11. SS, CS & alloy steel.",
  },
  "/threaded-fittings": {
    title: "Threaded Fittings Manufacturer | Starlight Tubes",
    description:
      "NPT, BSP, BSPT threaded pipe fittings manufacturer. SS & carbon steel. ASME B16.11 certified. Export to 60+ countries.",
  },
  "/union-fittings": {
    title: "Union Fittings Manufacturer | Starlight Tubes",
    description:
      "Threaded, socket weld & butt weld pipe union manufacturer. ASME B16.11 certified. SS & carbon steel. Export worldwide.",
  },
};

// GEO/AEO: Server-side FAQ data for AI crawlers (critical pages)
// AI engines like ChatGPT, Perplexity, Google SGE parse these without executing JS
const PAGE_FAQ: Record<string, Array<{ q: string; a: string }>> = {
  "/": [
    {
      q: "What does Starlight Tubes manufacture?",
      a: "Starlight Tubes manufactures stainless steel pipes (304, 316, 316L), carbon steel pipes (ASTM A106, API 5L), nickel alloy pipes (Inconel 625, 600, Monel 400), copper pipes & tubes, aluminium sheets & pipes, pipe fittings (elbows, tees, reducers), and flanges (weld neck, slip on, blind).",
    },
    {
      q: "Where is Starlight Tubes located?",
      a: "Starlight Tubes is headquartered in Mumbai, Maharashtra, India. We export steel pipes and tubes to over 60 countries worldwide including USA, UK, Germany, UAE, Saudi Arabia, Singapore, Australia, and Canada.",
    },
    {
      q: "Is Starlight Tubes ISO certified?",
      a: "Yes, Starlight Tubes is ISO 9001:2015 certified. We also comply with PED 2014/68/EU, OHSAS 18001, and ISO 14001 standards. All products come with Mill Test Certificates (EN 10204 3.1).",
    },
  ],
  "/product": [
    {
      q: "What products does Starlight Tubes offer?",
      a: "Starlight Tubes offers stainless steel pipes & tubes, carbon steel pipes, nickel alloy pipes, inconel pipes & tubes, copper pipes & tubes, aluminium pipes & sheets, pipe fittings (elbows, tees, reducers, caps, unions, couplings), and flanges in various specifications and sizes.",
    },
    {
      q: "What pipe sizes are available?",
      a: "Starlight Tubes manufactures pipes from 1/8 inch NPS to 48 inch NPS in various schedules (SCH 5 to SCH XXS), wall thicknesses, and lengths (standard 6m or custom). Both seamless and welded types available.",
    },
  ],
  "/stainless-steel": [
    {
      q: "What stainless steel grades does Starlight Tubes manufacture?",
      a: "We manufacture SS 304, SS 304L, SS 316, SS 316L, SS 321, SS 347, SS 310, Duplex 2205, Super Duplex 2507, and other austenitic, ferritic, and martensitic stainless steel grades per ASTM A312, A269, A213 standards.",
    },
    {
      q: "What are the applications of stainless steel pipes?",
      a: "Stainless steel pipes are used in chemical processing, oil & gas, food & beverage, pharmaceutical, water treatment, power generation, marine, and architectural applications due to their excellent corrosion resistance and durability.",
    },
  ],
  "/carbon-steel": [
    {
      q: "What carbon steel pipe standards does Starlight Tubes follow?",
      a: "We manufacture carbon steel pipes per ASTM A106 Grade B, ASTM A53 Grade B, API 5L Grade B/X42/X52/X60/X65/X70, ASTM A333 Grade 6, and IS 1239 standards. Both seamless and ERW types available.",
    },
    {
      q: "What is the difference between ASTM A106 and API 5L pipes?",
      a: "ASTM A106 covers seamless carbon steel pipes for high-temperature service (boilers, refineries). API 5L covers line pipes for oil & gas pipeline transportation. API 5L has PSL1 and PSL2 quality levels with stricter chemistry and testing requirements.",
    },
  ],
  "/nickel-alloys": [
    {
      q: "What nickel alloy pipes does Starlight Tubes supply?",
      a: "We supply Monel 400/K500, Hastelloy C276/C22/B2, Nickel 200/201, Inconel 625/600/601/718, Incoloy 800/800H/825, and Alloy 20 pipes & tubes per ASTM B165, B444, B407, B163, B167 standards.",
    },
    {
      q: "Why choose nickel alloy pipes?",
      a: "Nickel alloy pipes offer superior corrosion resistance in extreme environments including high temperatures (up to 1100°C), acidic conditions, and seawater. Used in aerospace, chemical processing, nuclear, oil & gas, and marine applications.",
    },
  ],
  "/inconel": [
    {
      q: "What is the difference between Inconel 625 and Inconel 600?",
      a: "Inconel 625 contains molybdenum and niobium for superior corrosion resistance and higher strength. Inconel 600 is a nickel-chromium alloy with good oxidation resistance at high temperatures. 625 is preferred for marine and chemical applications; 600 for heat treatment and nuclear applications.",
    },
    {
      q: "What Inconel specifications does Starlight Tubes follow?",
      a: 'We manufacture Inconel pipes per ASTM B444 (625), ASTM B167 (600), ASTM B163 (tubes), and ASME SB444/SB167 standards. Available as seamless pipes and tubes in various sizes from 1/8" to 24" NPS.',
    },
  ],
  "/fittings": [
    {
      q: "What types of pipe fittings does Starlight Tubes manufacture?",
      a: "We manufacture butt weld fittings (elbows, tees, reducers, caps, stub ends), forged fittings (socket weld and threaded), and flanges (weld neck, slip on, blind, lap joint, ring type, spectacle blind) per ASME B16.9, B16.11, B16.5 standards.",
    },
    {
      q: "What materials are available for pipe fittings?",
      a: "Pipe fittings are available in stainless steel (304, 316, 321, 347), carbon steel (A234 WPB, A420 WPL6), alloy steel (A234 WP5, WP9, WP11, WP22), nickel alloys (Inconel, Monel, Hastelloy), and duplex/super duplex stainless steel.",
    },
  ],
  "/contact": [
    {
      q: "How to contact Starlight Tubes for a quote?",
      a: "Contact us at sales@starlighttubes.com or call +91-8591470791. You can also fill the enquiry form on our contact page. We respond to all enquiries within 24 hours with competitive pricing and delivery schedules.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "Minimum order quantity varies by product. For standard size pipes, MOQ starts from 100 kg. For custom fabrication and special alloy products, please contact our sales team for specific requirements.",
    },
  ],
  "/about": [
    {
      q: "When was Starlight Tubes established?",
      a: "Starlight Tubes was established in 2020 in Mumbai, India. We have quickly grown to become a trusted steel pipe manufacturer and exporter, serving clients in over 60 countries across 6 continents.",
    },
    {
      q: "What certifications does Starlight Tubes hold?",
      a: "Starlight Tubes holds ISO 9001:2015 (Quality Management), PED 2014/68/EU (Pressure Equipment Directive), OHSAS 18001 (Occupational Health & Safety), and ISO 14001 (Environmental Management) certifications.",
    },
  ],
};

// GEO: NLQ (Natural Language Query) optimized summaries for AI answer engines
const PAGE_NLQ: Record<string, string> = {
  "/": "Starlight Tubes is a steel pipe manufacturer and exporter based in Mumbai, India, founded in 2020. The company manufactures stainless steel pipes (304, 316, 316L), carbon steel pipes (ASTM A106, API 5L), nickel alloy pipes (Inconel 625, 600), copper pipes, aluminium products, pipe fittings, and flanges. ISO 9001:2015 certified, exporting to 60+ countries including USA, UK, Germany, UAE, Saudi Arabia.",
  "/product":
    'Starlight Tubes manufactures a comprehensive range of industrial steel products: stainless steel pipes & tubes (304, 316, 316L, duplex, super duplex), carbon steel pipes (ASTM A106, API 5L, ASTM A53), nickel alloy pipes (Inconel 625/600, Monel 400, Hastelloy), copper pipes & tubes, aluminium products, pipe fittings (elbows, tees, reducers), and flanges. Available in sizes from 1/8" to 48" NPS.',
  "/stainless-steel":
    "Starlight Tubes manufactures stainless steel pipes and tubes in grades 304, 304L, 316, 316L, 321, 347, 310, Duplex 2205, and Super Duplex 2507. Products conform to ASTM A312, A269, A213, A249 standards. Available as seamless and welded pipes for chemical, oil & gas, food processing, pharmaceutical, and marine applications.",
  "/carbon-steel":
    "Starlight Tubes manufactures carbon steel pipes per ASTM A106 Grade B, ASTM A53, API 5L (Grade B to X70), ASTM A333 Grade 6 for low temperature service. Both seamless and ERW pipes available. Used in oil & gas pipelines, power plants, refineries, and structural applications.",
  "/nickel-alloys":
    "Starlight Tubes supplies nickel alloy pipes including Monel 400/K500, Hastelloy C276/C22, Nickel 200/201, Inconel 625/600, Incoloy 800/825, and Alloy 20. Manufactured per ASTM B165, B444, B407, B163 standards for aerospace, chemical processing, nuclear, and marine applications.",
  "/inconel":
    "Starlight Tubes manufactures Inconel pipes and tubes in grades 600, 601, 625, 718, 800, and 825. Products meet ASTM B444, B167, B163 and ASME SB444/SB167 specifications. Used in aerospace jet engines, gas turbines, nuclear reactors, chemical processing, and marine applications due to exceptional high-temperature and corrosion resistance.",
  "/fittings":
    "Starlight Tubes manufactures pipe fittings per ASME B16.9 (butt weld), B16.11 (forged), and B16.5 (flanges). Products include elbows (45°, 90°, 180°), tees, reducers, caps, couplings, unions, and flanges. Available in stainless steel, carbon steel, alloy steel, nickel alloys, and duplex stainless steel.",
  "/copper":
    "Starlight Tubes manufactures copper pipes, tubes, sheets, bars, and fittings. Products include pure copper (C10200, C12200), brass, and cupro-nickel (90/10, 70/30) in accordance with ASTM B42, B88, B280, B111 standards. Used in HVAC, plumbing, marine, electrical, and heat exchanger applications.",
  "/aluminium":
    "Starlight Tubes manufactures aluminium pipes, tubes, sheets, coils, and alloy products in grades 6061, 6063, 5052, 5083, 7075, and 2024. Products meet ASTM B241, B210, B221, B209 standards. Applications include aerospace, automotive, marine, construction, and electrical industries.",
  "/coating":
    "Starlight Tubes offers FBE (Fusion Bonded Epoxy), 3LPE (3-Layer Polyethylene), 3LPP (3-Layer Polypropylene), and internal epoxy coating services for steel pipes. Coatings per AWWA C213, DIN 30670, DIN 30678 standards. Used for corrosion protection in underground pipelines, water transmission, and oil & gas applications.",
  "/about":
    "Starlight Tubes was established in 2020 in Mumbai, India as a steel pipe manufacturer and global exporter. The company holds ISO 9001:2015, PED 2014/68/EU, OHSAS 18001, and ISO 14001 certifications. Exporting to 60+ countries with dedicated teams for sales, quality control, and logistics.",
  "/contact":
    "Contact Starlight Tubes: Email: sales@starlighttubes.com, Phone: +91-8591470791. Located in Mumbai, Maharashtra, India. Operating hours: Monday-Saturday 9:00 AM - 6:00 PM IST. Services available for worldwide enquiries with response within 24 hours.",
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

    // GEO: Replace abstract meta tag with page-specific content for AI answer extraction
    html = html.replace(
      /<meta\s+name="abstract"\s+content="[^"]*"\s*\/?>/,
      `<meta name="abstract" content="${pageMeta.description}" />`,
    );

    // GEO: Replace summary meta tag
    html = html.replace(
      /<meta\s+name="summary"\s+content="[^"]*"\s*\/?>/,
      `<meta name="summary" content="${pageMeta.description}" />`,
    );
  }

  // GEO/AEO: Inject server-side FAQ schema for AI crawlers that don't execute JS
  const faqData = PAGE_FAQ[normalizedPath];
  if (faqData && faqData.length > 0) {
    const faqSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
    // Inject before </head> so it's available to all crawlers
    html = html.replace(
      "</head>",
      `<script type="application/ld+json" id="ssr-faq-schema">${faqSchema}</script>\n  </head>`,
    );
  }

  // GEO: Inject NLQ-optimized WebPage schema with abstract for AI answer engines
  const nlqData = PAGE_NLQ[normalizedPath];
  if (nlqData) {
    const webPageSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#ssr-webpage`,
      name: pageMeta?.title || "Starlight Tubes",
      description: pageMeta?.description || "",
      url: canonicalUrl,
      abstract: nlqData,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      dateModified: new Date().toISOString().split("T")[0],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.starlighttubes.com/#website",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.starlighttubes.com/#organization",
      },
    });
    html = html.replace(
      "</head>",
      `<script type="application/ld+json" id="ssr-webpage-schema">${webPageSchema}</script>\n  </head>`,
    );
  }

  // GEO: Inject WebSite schema with SearchAction for Google Sitelinks Search Box
  const websiteSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Starlight Tubes",
    description:
      "Leading steel pipe manufacturer & exporter in India. SS, carbon steel, nickel alloy pipes, fittings & flanges.",
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/product?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  });

  // Inject SiteNavigationElement for AI/search engines to understand nav structure
  const navSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "@id": `${BASE_URL}/#navigation`,
    name: "Main Navigation",
    hasPart: [
      { "@type": "WebPage", name: "Home", url: `${BASE_URL}/` },
      { "@type": "WebPage", name: "About Us", url: `${BASE_URL}/about` },
      { "@type": "WebPage", name: "Products", url: `${BASE_URL}/product` },
      {
        "@type": "WebPage",
        name: "Technical Info",
        url: `${BASE_URL}/technical-info`,
      },
      { "@type": "WebPage", name: "Coating", url: `${BASE_URL}/coating` },
      { "@type": "WebPage", name: "Contact", url: `${BASE_URL}/contact` },
    ],
  });

  html = html.replace(
    "</head>",
    `<script type="application/ld+json" id="ssr-website-schema">${websiteSchema}</script>\n  <script type="application/ld+json" id="ssr-nav-schema">${navSchema}</script>\n  </head>`,
  );

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
