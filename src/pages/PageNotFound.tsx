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
      {/* Soft green glow accents */}
      <div className="absolute -top-32 -left-32 w-[26rem] h-[26rem] bg-green-200/40 rounded-full blur-[180px]" />
      <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] bg-lime-200/35 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-emerald-200/30 rounded-full blur-[200px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-5 px-6 py-2 text-xs tracking-widest uppercase rounded-full bg-green-100 text-green-700 border border-green-300">
          Error
        </span>

        {/* Headline */}
        <h1 className="text-[6rem] sm:text-[8rem] font-black leading-none text-transparent bg-clip-text bg-linear-to-r from-green-600 via-emerald-600 to-lime-600 drop-shadow-[0_0_22px_rgba(34,197,94,0.25)]">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg sm:text-xl text-gray-800 font-medium">
          This page vanished into the void.
        </p>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          The link may be broken or the page no longer exists.
        </p>

        {/* Button at bottom */}
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
