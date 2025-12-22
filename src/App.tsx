import { Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import A671Pipe from "./components/sub pages/A671Pipe";
import A672Pipe from "./components/sub pages/A672Pipe";
import AluminiumPipe from "./components/sub pages/AluminiumPipe";
import AluminiumSheet from "./components/sub pages/AluminiumSheet";
import API5LGradeBPipe from "./components/sub pages/API5LGradeBPipe";
import API5LX42Pipe from "./components/sub pages/API5LX42Pipe";
import API5LX52Pipe from "./components/sub pages/API5LX52Pipe";
import API5LX65Pipe from "./components/sub pages/API5LX65Pipe";
import ASTMA106Pipe from "./components/sub pages/ASTMA106Pipe";
import ASTMA333Pipe from "./components/sub pages/ASTMA333Pipe";
import ASTMA53Pipe from "./components/sub pages/ASTMA53Pipe";
import CarbonSteelPipe from "./components/sub pages/CarbonSteelPipe";
import CopperPipe from "./components/sub pages/CopperPipe";
import CopperSheet from "./components/sub pages/CopperSheet";
import CopperTube from "./components/sub pages/CopperTube";
import Flanges from "./components/sub pages/Flanges";
import Inconel600Pipe from "./components/sub pages/Inconel600Pipe";
import Inconel600Plate from "./components/sub pages/Inconel600Plate";
import Inconel625Pipe from "./components/sub pages/Inconel625Pipe";
import Inconel625Plate from "./components/sub pages/Inconel625Plate";
import Inconel625Tubing from "./components/sub pages/Inconel625Tubing";
import InconelBolts from "./components/sub pages/InconelBolts";
import InconelPipe from "./components/sub pages/InconelPipe";
import InconelPlate from "./components/sub pages/InconelPlate";
import InconelRoundBar from "./components/sub pages/InconelRoundBar";
import NickelPipe from "./components/sub pages/NickelPipe";
import NickelSheet from "./components/sub pages/NickelSheet";
import PipeFittings from "./components/sub pages/PipeFittings";
import StainlessSteel304Pipe from "./components/sub pages/StainlessSteel304Pipe";
import StainlessSteel304Plate from "./components/sub pages/StainlessSteel304Plate";
import StainlessSteel316LPipe from "./components/sub pages/StainlessSteel316LPipe";
import StainlessSteel316Plate from "./components/sub pages/StainlessSteel316Plate";
import StainlessSteel316Tube from "./components/sub pages/StainlessSteel316Tube";
import StainlessSteelFasteners from "./components/sub pages/StainlessSteelFasteners";
import StainlessSteelPipe from "./components/sub pages/StainlessSteelPipe";
import StainlessSteelRoundBar from "./components/sub pages/StainlessSteelRoundBar";
import StainlessSteelSheet from "./components/sub pages/StainlessSteelSheet";
import StainlessSteelTube from "./components/sub pages/StainlessSteelTube";
import StainlessSteelWire from "./components/sub pages/StainlessSteelWire";
import WeldedSteelPipe from "./components/sub pages/WeldedSteelPipe";
import About from "./pages/About";
import Aluminium from "./pages/Aluminium";
import CarbonSteelPage from "./pages/CarbonSteel";
import Coating from "./pages/Coating";
import Contact from "./pages/Contact";
import Copper from "./pages/Copper";
import Fittings from "./pages/Fittings";
import Home from "./pages/Home";
import InconelPage from "./pages/Inconel";
import Material from "./pages/Material";
import NickelAlloysPage from "./pages/NickelAlloys";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import StainlessSteelPage from "./pages/StainlessSteel";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/materials" element={<Material />} />
        <Route path="/coating" element={<Coating />} />
        <Route path="/contact" element={<Contact />} />

        {/* Material Category Pages */}
        <Route path="/stainless-steel" element={<StainlessSteelPage />} />
        <Route path="/aluminium" element={<Aluminium />} />
        <Route path="/copper" element={<Copper />} />
        <Route path="/fittings" element={<Fittings />} />
        <Route path="/carbon-steel" element={<CarbonSteelPage />} />
        <Route path="/nickel-alloys" element={<NickelAlloysPage />} />
        <Route path="/inconel" element={<InconelPage />} />

        {/* Home SubRoutes */}
        <Route path="/stainless-steel-tube" element={<StainlessSteelTube />} />
        <Route path="/stainless-steel-pipe" element={<StainlessSteelPipe />} />
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
        <Route path="/stainless-steel-wire" element={<StainlessSteelWire />} />
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
        <Route path="/welded-steel-pipe" element={<WeldedSteelPipe />} />

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
        <Route path="/copper-round-bar" element={<CopperPipe />} />
        <Route path="/copper-wire" element={<CopperPipe />} />
        <Route path="/copper-fittings" element={<PipeFittings />} />
        <Route path="/copper-nickel-pipe" element={<CopperPipe />} />
        <Route path="/copper-nickel-tube" element={<CopperTube />} />
        <Route path="/cupro-nickel-90-10" element={<CopperPipe />} />
        <Route path="/cupro-nickel-70-30" element={<CopperPipe />} />

        {/* Aluminium Routes */}
        <Route path="/aluminium-pipe" element={<AluminiumPipe />} />
        <Route path="/aluminium-tube" element={<AluminiumPipe />} />
        <Route path="/aluminium-sheet" element={<AluminiumSheet />} />
        <Route path="/aluminium-plate" element={<AluminiumSheet />} />
        <Route path="/aluminium-round-bar" element={<AluminiumPipe />} />
        <Route path="/aluminium-wire" element={<AluminiumPipe />} />
        <Route path="/aluminium-coil" element={<AluminiumSheet />} />
        <Route path="/aluminium-6061" element={<AluminiumSheet />} />
        <Route path="/aluminium-6063" element={<AluminiumSheet />} />
        <Route path="/aluminium-5052" element={<AluminiumSheet />} />
        <Route path="/aluminium-7075" element={<AluminiumSheet />} />

        {/* Pipe Fittings Routes */}
        <Route path="/pipe-fittings" element={<PipeFittings />} />
        <Route path="/butt-weld-fittings" element={<PipeFittings />} />
        <Route path="/socket-weld-fittings" element={<PipeFittings />} />
        <Route path="/threaded-fittings" element={<PipeFittings />} />
        <Route path="/flanges" element={<Flanges />} />
        <Route path="/elbow-fittings" element={<PipeFittings />} />
        <Route path="/tee-fittings" element={<PipeFittings />} />
        <Route path="/reducer-fittings" element={<PipeFittings />} />
        <Route path="/cap-fittings" element={<PipeFittings />} />
        <Route path="/coupling-fittings" element={<PipeFittings />} />
        <Route path="/union-fittings" element={<PipeFittings />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
