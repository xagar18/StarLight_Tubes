import { Meteors } from "../ui/meteors";

export function CommonCTA() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="relative w-full max-w-400">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-8 py-10 shadow-xl">
          <h1 className="relative z-50 mb-6 text-3xl font-bold text-white">
            Premium Stainless Steel Tubes
          </h1>

          <p className="relative z-50 mb-4 text-base leading-relaxed text-slate-300">
            Steel Tubes India manufactures and supplies high-quality stainless
            steel tubes that meet international standards. Our tubes are
            engineered for superior corrosion resistance, durability, and
            performance in demanding industrial applications including oil &
            gas, petrochemical, power generation, and marine industries.
          </p>

          <p className="relative z-50 mb-6 text-base leading-relaxed text-slate-300">
            Available in seamless and welded configurations, our stainless steel
            tubes are manufactured using premium grade raw materials and undergo
            rigorous quality testing to ensure compliance with ASTM, ASME, and
            international specifications. We offer customized solutions to meet
            your specific project requirements.
          </p>

          <hr className="relative z-50 border-gray-700 my-6 w-full" />

          <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            Product Specifications
          </h2>
          <ul className="relative z-50 mb-4 text-base font-normal text-slate-400 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
              <span>
                <strong className="text-slate-300">Grades:</strong> 304, 304L,
                316, 316L, 321, 310S, 347, 904L, Duplex & Super Duplex
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
              <span>
                <strong className="text-slate-300">Size Range:</strong> OD 6mm
                to 660mm, Wall Thickness 0.5mm to 50mm, Length up to 12 meters
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
              <span>
                <strong className="text-slate-300">Standards:</strong> ASTM
                A213, ASTM A269, ASTM A312, ASME SA213, DIN 17458, EN 10216
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
              <span>
                <strong className="text-slate-300">Types:</strong> Seamless,
                Welded, ERW, EFW with various finishes available
              </span>
            </li>
          </ul>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}
