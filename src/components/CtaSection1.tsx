export default function Cta() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-16 lg:pb-16">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#22c55e" />
                <stop offset={1} stopColor="#16a34a" />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Leading Manufacturer & Exporter of Steel Tubes
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Over 30 years of excellence in ERW and Seamless pipe manufacturing
            </p>

            <div className="mt-10 text-sm text-gray-300 leading-relaxed text-left space-y-4">
              <p>
                Our Company is established in 1992 as a manufacturer of Steel
                Tubes, with over 2 decades of experience as India's leading
                manufacturer & exporter of ERW and Seamless pipe. Size range:
                ERW Pipe 21.3 mm to 508mm OD, Seamless Pipe 10mm to 508mm OD.
                Large dia seamless pipes, tubes and ERW pipe manufacturer in
                India. Govt. recognised export house of High Precision Premium
                threaded casing and tubing. 3LPE coating facility available.
              </p>

              <p>
                Steel Tubes India is the leading supplier of high quality
                Seamless Steel Tube, Line Pipe, OCTG & Coated Pipes to Oil & Gas
                industries and their contractors in more than 60 countries
                including UAE, Qatar, Bahrain, Oman, Saudi Arabia, Kuwait,
                Malaysia, Singapore, Indonesia and many more. Steel Tubes India
                is the only company in India supplying Seamless and ERW Pipes to
                more than 800 organisations in 60 countries, and we are the
                largest stockist of seamless steel tube.
              </p>

              <p>
                <strong className="text-white">Welded Steel Pipe:</strong> Buy
                ERW steel tube (electric resistance welded) - round, square and
                rectangular tube & ERW box sections in a range of sizes from
                stock to suit your specification. Our Steel tubes, boiler tube,
                heat exchanger tube and sections are sourced from reputed steel
                mills from EU & India and arrive at our depot in the centre of
                India ready for processing and distribution.
              </p>

              <p>
                We have recently introduced our new division for boiler
                manufacturers & worldwide companies where boilers are installed.
                Our new website{" "}
                <a
                  href="https://www.stindia.com"
                  className="underline text-green-400 hover:text-green-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.stindia.com
                </a>{" "}
                is focused on a complete range of Boiler steel materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
