import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6">
      {/* Softer green glow */}
      <div className="absolute -top-32 -left-32 w-[26rem] h-[26rem] bg-green-500/45 rounded-full blur-[180px]" />
      <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] bg-lime-400/40 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-emerald-500/35 rounded-full blur-[200px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-5 px-6 py-2 text-xs tracking-widest uppercase rounded-full bg-green-500/15 text-green-200 border border-green-400/25">
          Error
        </span>

        {/* Headline */}
        <h1 className="text-[6rem] sm:text-[8rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-lime-200 drop-shadow-[0_0_22px_rgba(34,197,94,0.45)]">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg sm:text-xl text-green-100 font-medium">
          This page vanished into the void.
        </p>

        <p className="mt-2 text-sm sm:text-base text-green-300/70">
          The link may be broken or the page no longer exists.
        </p>

        {/* Button at bottom */}
        <button
          onClick={() => navigate("/")}
          className="mt-10 px-8 py-3 rounded-xl bg-green-500/20 text-green-200 border border-green-400/30
                     hover:bg-green-500/30 hover:text-green-100 transition-all duration-300"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
