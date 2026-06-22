import { useSEO } from "@/hooks/use-seo";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Page Not Found - 404 | Starlight Tubes",
    description:
      "The page you are looking for could not be found. Return to Starlight Tubes homepage to browse our steel pipes, tubes, and fittings.",
    keywords: "404, page not found, Starlight Tubes",
    url: "https://www.starlighttubes.com/404",
    noIndex: true,
  });

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-6">
      {/* Blueprint grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #16a34a 1px, transparent 1px), linear-gradient(to bottom, #16a34a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/*
        Single fixed-width column. Every child below is mx-auto'd against
        THIS SAME max-w-sm box, so the diagram, the "404", the copy, and
        the button all share one true center line instead of each
        centering independently inside a wider parent.
      */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* Pipe-break diagram */}
        <svg
          viewBox="0 0 480 140"
          className="w-full h-auto mb-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="50" width="160" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <rect x="4" y="40" width="10" height="60" rx="2" fill="#15803d" />
          <rect x="60" y="45" width="8" height="50" rx="2" fill="#16a34a" />
          <rect x="120" y="45" width="8" height="50" rx="2" fill="#16a34a" />

          <path
            d="M170 50 L195 50 L185 90 L170 90 Z"
            fill="#bbf7d0"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M310 50 L285 50 L295 90 L310 90 Z"
            fill="#bbf7d0"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <rect x="310" y="50" width="160" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <rect x="466" y="40" width="10" height="60" rx="2" fill="#15803d" />
          <rect x="352" y="45" width="8" height="50" rx="2" fill="#16a34a" />
          <rect x="412" y="45" width="8" height="50" rx="2" fill="#16a34a" />
        </svg>

        {/* Headline — width-matched to the column above it, no stray margin/padding */}
        <h1 className="w-full text-[6rem] sm:text-[8rem] font-black leading-none text-transparent bg-clip-text bg-linear-to-r from-green-600 via-emerald-600 to-lime-600 drop-shadow-[0_0_22px_rgba(34,197,94,0.25)]">
          404
        </h1>

        <p className="w-full mt-4 text-lg sm:text-xl text-gray-800 font-medium">
          This page got disconnected.
        </p>

        <p className="w-full mt-2 text-sm sm:text-base text-gray-500">
          The link may be broken or the page no longer exists.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-10 px-8 py-3 rounded-xl bg-green-600 text-white border border-green-700
                     hover:bg-green-700 transition-all duration-300 cursor-pointer"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;