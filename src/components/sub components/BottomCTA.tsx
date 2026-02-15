import { Meteors } from "../ui/meteors";

interface BottomCTAProps {
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
}

export function BottomCTA({
  title,
  description,
  features,
  ctaText = "Contact Us Today",
  ctaLink = "/contact",
}: BottomCTAProps) {
  return (
    <div className="flex w-full items-center justify-center p-4 mt-16 mb-8">
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 blur-3xl opacity-50" />
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-8 py-12 shadow-xl">
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-orange-400 text-sm font-semibold">
              Why Choose Us
            </span>
          </div>

          <h2 className="relative z-50 mb-4 text-3xl md:text-4xl font-bold text-white text-center">
            {title}
          </h2>

          <p className="relative z-50 mb-8 text-base md:text-lg leading-relaxed text-slate-300 text-center max-w-3xl">
            {description}
          </p>

          {/* Features Grid */}
          <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={ctaLink}
            className="relative z-50 inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            {ctaText}
            <svg
              className="w-5 h-5"
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

          {/* Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
