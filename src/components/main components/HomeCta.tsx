export default function CtaSection1() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-16 lg:px-24 lg:pt-16 lg:pb-20">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 mix-blend-overlay" />

          {/* Animated background circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative mx-auto max-w-6xl">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
              StarLight Tubes — India's Leading Steel Pipe Exporter
            </h1>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Our Expertise
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Established in 2020, we are India's premier manufacturer &
                    exporter of ERW and Seamless pipes. Our size range includes
                    ERW Pipe from 21.3mm to 508mm OD and Seamless Pipe from 10mm
                    to 508mm OD.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Welded Steel Pipe
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Premium ERW steel tubes (electric resistance welded) -
                    round, square and rectangular tubes & ERW box sections
                    sourced from reputed EU & Indian steel mills, ready for
                    processing and distribution.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Global Reach
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Leading supplier of Seamless Steel Tube, Line Pipe, OCTG &
                    Coated Pipes to Oil & Gas industries across UAE, Qatar,
                    Bahrain, Oman, Saudi Arabia, Kuwait, Malaysia, Singapore,
                    Indonesia and 60+ countries.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Boiler Division
                  </h3>
                    <p className="text-gray-300 leading-relaxed">
                    Our new boiler division offers a complete range of boiler
                    steel materials for industrial applications. Visit{" "}
                    <a
                      href="https://www.starlighttubes.com"
                      className="underline text-green-400 hover:text-green-300 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.starlighttubes.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105 mb-10"
              >
                Get in Touch
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
