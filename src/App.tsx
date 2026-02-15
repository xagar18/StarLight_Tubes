import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import QuickButtons from "./components/WhatsAppButton";

// Direct imports for main pages (no lazy loading for fast access)
import About from "./pages/About";
import Coating from "./pages/Coating";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import TechnicalInfo from "./pages/TechnicalInfo";

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Lazy load secondary pages
const Certificates = lazy(() => import("./pages/Certificates"));
const Material = lazy(() => import("./pages/Material"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// Lazy load material category pages
const StainlessSteelPage = lazy(() => import("./pages/StainlessSteel"));
const Aluminium = lazy(() => import("./pages/Aluminium"));
const Copper = lazy(() => import("./pages/Copper"));
const Fittings = lazy(() => import("./pages/Fittings"));
const CarbonSteelPage = lazy(() => import("./pages/CarbonSteel"));
const NickelAlloysPage = lazy(() => import("./pages/NickelAlloys"));
const InconelPage = lazy(() => import("./pages/Inconel"));

// Lazy load the dynamic sub page handler (replaces all individual sub pages)
const DynamicSubPage = lazy(() => import("./pages/DynamicSubPage"));

function App() {
  return (
    <>
      <ScrollToTop />
      <QuickButtons />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main pages - no lazy loading for instant access */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/technical-info" element={<TechnicalInfo />} />
          <Route path="/coating" element={<Coating />} />
          <Route path="/contact" element={<Contact />} />

          {/* Secondary pages */}
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/materials" element={<Material />} />

          {/* Material Category Pages */}
          <Route path="/stainless-steel" element={<StainlessSteelPage />} />
          <Route path="/aluminium" element={<Aluminium />} />
          <Route path="/copper" element={<Copper />} />
          <Route path="/fittings" element={<Fittings />} />
          <Route path="/carbon-steel" element={<CarbonSteelPage />} />
          <Route path="/nickel-alloys" element={<NickelAlloysPage />} />
          <Route path="/inconel" element={<InconelPage />} />

          {/* Dynamic sub pages - single route handles all product sub pages */}
          <Route path="/:slug" element={<DynamicSubPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
