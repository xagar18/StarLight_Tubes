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

// Lazy load stainless steel sub-pages
const StainlessSteelTube = lazy(
  () => import("./components/sub pages/StainlessSteelTube")
);
const StainlessSteelPipe = lazy(
  () => import("./components/sub pages/StainlessSteelPipe")
);
const StainlessSteelSheet = lazy(
  () => import("./components/sub pages/StainlessSteelSheet")
);
const StainlessSteelRoundBar = lazy(
  () => import("./components/sub pages/StainlessSteelRoundBar")
);
const StainlessSteelFasteners = lazy(
  () => import("./components/sub pages/StainlessSteelFasteners")
);
const StainlessSteelWire = lazy(
  () => import("./components/sub pages/StainlessSteelWire")
);
const StainlessSteel304Pipe = lazy(
  () => import("./components/sub pages/StainlessSteel304Pipe")
);
const StainlessSteel304Plate = lazy(
  () => import("./components/sub pages/StainlessSteel304Plate")
);
const StainlessSteel316Tube = lazy(
  () => import("./components/sub pages/StainlessSteel316Tube")
);
const StainlessSteel316Plate = lazy(
  () => import("./components/sub pages/StainlessSteel316Plate")
);
const StainlessSteel316LPipe = lazy(
  () => import("./components/sub pages/StainlessSteel316LPipe")
);

// Lazy load nickel & inconel sub-pages
const NickelPipe = lazy(() => import("./components/sub pages/NickelPipe"));
const NickelSheet = lazy(() => import("./components/sub pages/NickelSheet"));
const InconelPipe = lazy(() => import("./components/sub pages/InconelPipe"));
const InconelPlate = lazy(() => import("./components/sub pages/InconelPlate"));
const InconelRoundBar = lazy(
  () => import("./components/sub pages/InconelRoundBar")
);
const InconelBolts = lazy(() => import("./components/sub pages/InconelBolts"));
const Inconel600Plate = lazy(
  () => import("./components/sub pages/Inconel600Plate")
);
const Inconel600Pipe = lazy(
  () => import("./components/sub pages/Inconel600Pipe")
);
const Inconel625Tubing = lazy(
  () => import("./components/sub pages/Inconel625Tubing")
);
const Inconel625Pipe = lazy(
  () => import("./components/sub pages/Inconel625Pipe")
);
const Inconel625Plate = lazy(
  () => import("./components/sub pages/Inconel625Plate")
);

// Lazy load carbon steel sub-pages
const CarbonSteelPipe = lazy(
  () => import("./components/sub pages/CarbonSteelPipe")
);
const ASTMA106Pipe = lazy(() => import("./components/sub pages/ASTMA106Pipe"));
const ASTMA53Pipe = lazy(() => import("./components/sub pages/ASTMA53Pipe"));
const ASTMA333Pipe = lazy(() => import("./components/sub pages/ASTMA333Pipe"));
const API5LGradeBPipe = lazy(
  () => import("./components/sub pages/API5LGradeBPipe")
);
const API5LX65Pipe = lazy(() => import("./components/sub pages/API5LX65Pipe"));
const API5LX52Pipe = lazy(() => import("./components/sub pages/API5LX52Pipe"));
const API5LX42Pipe = lazy(() => import("./components/sub pages/API5LX42Pipe"));
const A671Pipe = lazy(() => import("./components/sub pages/A671Pipe"));
const A672Pipe = lazy(() => import("./components/sub pages/A672Pipe"));

// Lazy load copper sub-pages
const CopperPipe = lazy(() => import("./components/sub pages/CopperPipe"));
const CopperTube = lazy(() => import("./components/sub pages/CopperTube"));
const CopperSheet = lazy(() => import("./components/sub pages/CopperSheet"));
const CopperRoundBar = lazy(
  () => import("./components/sub pages/CopperRoundBar")
);
const CopperFittings = lazy(
  () => import("./components/sub pages/CopperFittings")
);
const CopperNickelPipe = lazy(
  () => import("./components/sub pages/CopperNickelPipe")
);
const CopperNickelTube = lazy(
  () => import("./components/sub pages/CopperNickelTube")
);
const CuproNickel9010 = lazy(
  () => import("./components/sub pages/CuproNickel9010")
);
const CuproNickel7030 = lazy(
  () => import("./components/sub pages/CuproNickel7030")
);

// Lazy load aluminium sub-pages
const AluminiumPipe = lazy(
  () => import("./components/sub pages/AluminiumPipe")
);
const AluminiumSheet = lazy(
  () => import("./components/sub pages/AluminiumSheet")
);
const AluminiumRoundBar = lazy(
  () => import("./components/sub pages/AluminiumRoundBar")
);
const AluminiumCoil = lazy(
  () => import("./components/sub pages/AluminiumCoil")
);
const Aluminium6061 = lazy(
  () => import("./components/sub pages/Aluminium6061")
);
const Aluminium6063 = lazy(
  () => import("./components/sub pages/Aluminium6063")
);
const Aluminium5052 = lazy(
  () => import("./components/sub pages/Aluminium5052")
);
const Aluminium7075 = lazy(
  () => import("./components/sub pages/Aluminium7075")
);

// Lazy load pipe fittings sub-pages
const PipeFittings = lazy(() => import("./components/sub pages/PipeFittings"));
const ButtWeldFittings = lazy(
  () => import("./components/sub pages/ButtWeldFittings")
);
const SocketWeldFittings = lazy(
  () => import("./components/sub pages/SocketWeldFittings")
);
const ThreadedFittings = lazy(
  () => import("./components/sub pages/ThreadedFittings")
);
const Flanges = lazy(() => import("./components/sub pages/Flanges"));
const ElbowFittings = lazy(
  () => import("./components/sub pages/ElbowFittings")
);
const TeeFittings = lazy(() => import("./components/sub pages/TeeFittings"));
const ReducerFittings = lazy(
  () => import("./components/sub pages/ReducerFittings")
);
const CapFittings = lazy(() => import("./components/sub pages/CapFittings"));
const CouplingFittings = lazy(
  () => import("./components/sub pages/CouplingFittings")
);
const UnionFittings = lazy(
  () => import("./components/sub pages/UnionFittings")
);

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

          {/* Home SubRoutes */}
          <Route
            path="/stainless-steel-tube"
            element={<StainlessSteelTube />}
          />
          <Route
            path="/stainless-steel-pipe"
            element={<StainlessSteelPipe />}
          />
          <Route
            path="/stainless-steel-sheet"
            element={<StainlessSteelSheet />}
          />
          <Route
            path="/stainless-steel-round-bar"
            element={<StainlessSteelRoundBar />}
          />
          <Route
            path="/stainless-steel-fasteners"
            element={<StainlessSteelFasteners />}
          />
          <Route
            path="/stainless-steel-wire"
            element={<StainlessSteelWire />}
          />
          <Route
            path="/stainless-steel-304-pipe"
            element={<StainlessSteel304Pipe />}
          />
          <Route
            path="/stainless-steel-304-plate"
            element={<StainlessSteel304Plate />}
          />
          <Route
            path="/stainless-steel-316-tube"
            element={<StainlessSteel316Tube />}
          />
          <Route
            path="/stainless-steel-316-plate"
            element={<StainlessSteel316Plate />}
          />
          <Route
            path="/stainless-steel-316l-pipe"
            element={<StainlessSteel316LPipe />}
          />

          {/* Nickel & Inconel Alloy Routes */}
          <Route path="/nickel-pipe" element={<NickelPipe />} />
          <Route path="/nickel-sheet" element={<NickelSheet />} />
          <Route path="/inconel-pipe" element={<InconelPipe />} />
          <Route path="/inconel-plate" element={<InconelPlate />} />
          <Route path="/inconel-round-bar" element={<InconelRoundBar />} />
          <Route path="/inconel-bolts" element={<InconelBolts />} />
          <Route path="/inconel-600-plate" element={<Inconel600Plate />} />
          <Route path="/inconel-600-pipe" element={<Inconel600Pipe />} />
          <Route path="/inconel-625-tubing" element={<Inconel625Tubing />} />
          <Route path="/inconel-625-pipe" element={<Inconel625Pipe />} />
          <Route path="/inconel-625-plate" element={<Inconel625Plate />} />

          {/* Carbon Steel Routes */}
          <Route path="/carbon-steel-pipe" element={<CarbonSteelPipe />} />
          <Route path="/astm-a106-pipe" element={<ASTMA106Pipe />} />
          <Route path="/astm-a53-pipe" element={<ASTMA53Pipe />} />
          <Route path="/astm-a333-pipe" element={<ASTMA333Pipe />} />
          <Route path="/api-5l-grade-b-pipe" element={<API5LGradeBPipe />} />
          <Route path="/api-5l-x65-pipe" element={<API5LX65Pipe />} />
          <Route path="/api-5l-x52-pipe" element={<API5LX52Pipe />} />
          <Route path="/api-5l-x42-pipe" element={<API5LX42Pipe />} />
          <Route path="/a671-pipe" element={<A671Pipe />} />
          <Route path="/a672-pipe" element={<A672Pipe />} />

          {/* Copper Routes */}
          <Route path="/copper-pipe" element={<CopperPipe />} />
          <Route path="/copper-tube" element={<CopperTube />} />
          <Route path="/copper-sheet" element={<CopperSheet />} />
          <Route path="/copper-plate" element={<CopperSheet />} />
          <Route path="/copper-round-bar" element={<CopperRoundBar />} />
          <Route path="/copper-fittings" element={<CopperFittings />} />
          <Route path="/copper-nickel-pipe" element={<CopperNickelPipe />} />
          <Route path="/copper-nickel-tube" element={<CopperNickelTube />} />
          <Route path="/cupro-nickel-90-10" element={<CuproNickel9010 />} />
          <Route path="/cupro-nickel-70-30" element={<CuproNickel7030 />} />

          {/* Aluminium Routes */}
          <Route path="/aluminium-pipe" element={<AluminiumPipe />} />
          <Route path="/aluminium-tube" element={<AluminiumPipe />} />
          <Route path="/aluminium-sheet" element={<AluminiumSheet />} />
          <Route path="/aluminium-plate" element={<AluminiumSheet />} />
          <Route path="/aluminium-round-bar" element={<AluminiumRoundBar />} />
          <Route path="/aluminium-coil" element={<AluminiumCoil />} />
          <Route path="/aluminium-6061" element={<Aluminium6061 />} />
          <Route path="/aluminium-6063" element={<Aluminium6063 />} />
          <Route path="/aluminium-5052" element={<Aluminium5052 />} />
          <Route path="/aluminium-7075" element={<Aluminium7075 />} />

          {/* Pipe Fittings Routes */}
          <Route path="/pipe-fittings" element={<PipeFittings />} />
          <Route path="/butt-weld-fittings" element={<ButtWeldFittings />} />
          <Route
            path="/socket-weld-fittings"
            element={<SocketWeldFittings />}
          />
          <Route path="/threaded-fittings" element={<ThreadedFittings />} />
          <Route path="/flanges" element={<Flanges />} />
          <Route path="/elbow-fittings" element={<ElbowFittings />} />
          <Route path="/tee-fittings" element={<TeeFittings />} />
          <Route path="/reducer-fittings" element={<ReducerFittings />} />
          <Route path="/cap-fittings" element={<CapFittings />} />
          <Route path="/coupling-fittings" element={<CouplingFittings />} />
          <Route path="/union-fittings" element={<UnionFittings />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
