import { Meteors } from "../ui/meteors";

export function CoatingCtaParent() {
  return (
    <div className="flex w-full items-center justify-center px-4 ">
      <div className="relative w-full max-w-[100rem]">
        {/* Background Gradient */}
        <div className="absolute inset-0 h-full w-full scale-[0.85] transform rounded-full bg-linear-to-r from-blue-500 to-teal-500 blur-3xl opacity-30" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
          {/* Header Section */}
          <div className="px-10 pt-12 pb-8 border-b border-gray-700/50">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-teal-500/10 border border-teal-500/20">
              <span className="text-teal-400 text-sm font-semibold">
                Technical Comparison
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Understanding Pipe Coating Technologies
            </h1>
            <p className="mt-3 text-gray-400 max-w-4xl text-lg">
              Compare different epoxy coating methods, their applications, and
              performance characteristics
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 p-10">
            {/* Card 1 - Liquid vs FBE */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-white">
                  Liquid Epoxy vs FBE Coating
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400 shrink-0"></span>
                  <div>
                    <span className="text-teal-400 font-medium">
                      Liquid Epoxy:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Applied as wet resin by brush, roll, or spray. Requires
                      multiple coats with dry time between applications. Forms
                      flexible, adherent film that fills minor surface defects.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shrink-0"></span>
                  <div>
                    <span className="text-blue-400 font-medium">
                      FBE Coating:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Applied as dry powder and fused with heat. Single-pass
                      application with rapid cure on heated surfaces. Hard,
                      abrasion-resistant, and tightly adhered coating.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - High vs Low Build */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-white">
                  High Build vs Low Build Epoxy
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400 shrink-0"></span>
                  <div>
                    <span className="text-teal-400 font-medium">
                      High Build:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Thicker application creates robust barrier with improved
                      chemical and mechanical resistance. Bridges surface
                      imperfections and increases service life.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shrink-0"></span>
                  <div>
                    <span className="text-blue-400 font-medium">
                      Low Build:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Thinner, economical application with faster cure. Ideal
                      for rapid turnaround. Works well with excellent surface
                      preparation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Surface Preparation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-white">
                  Surface Preparation & Adhesion
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400 shrink-0"></span>
                  <div>
                    <span className="text-teal-400 font-medium">
                      Preparation:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Abrasive blast cleaning to specified Sa grade removes
                      rust, mill scale, and contaminants. Proper surface profile
                      promotes mechanical interlocking.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shrink-0"></span>
                  <div>
                    <span className="text-blue-400 font-medium">Adhesion:</span>
                    <span className="text-gray-400 ml-1">
                      Influenced by substrate chemistry, profile, and
                      environmental conditions. Pull-off testing confirms proper
                      bonding.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Corrosion Resistance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-white">
                  Corrosion Resistance & Service Life
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400 shrink-0"></span>
                  <div>
                    <span className="text-teal-400 font-medium">
                      High-Build Systems:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Thicker barrier reduces permeation of corrosive species.
                      Improved mechanical robustness for handling and
                      operational damage.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shrink-0"></span>
                  <div>
                    <span className="text-blue-400 font-medium">
                      Best Practices:
                    </span>
                    <span className="text-gray-400 ml-1">
                      Regular inspections and timely repairs extend service
                      life. Combine with cathodic protection for maximum
                      corrosion prevention.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meteor effect */}
          <Meteors number={15} />
        </div>
      </div>
    </div>
  );
}
