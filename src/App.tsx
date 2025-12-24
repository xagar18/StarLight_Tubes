import { Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import A671Pipe from "./components/sub pages/A671Pipe";
import A672Pipe from "./components/sub pages/A672Pipe";
import Aluminium5052 from "./components/sub pages/Aluminium5052";
import Aluminium6061 from "./components/sub pages/Aluminium6061";
import Aluminium6063 from "./components/sub pages/Aluminium6063";
import Aluminium7075 from "./components/sub pages/Aluminium7075";
import AluminiumCoil from "./components/sub pages/AluminiumCoil";
import AluminiumPipe from "./components/sub pages/AluminiumPipe";
import AluminiumRoundBar from "./components/sub pages/AluminiumRoundBar";
import AluminiumSheet from "./components/sub pages/AluminiumSheet";
import API5LGradeBPipe from "./components/sub pages/API5LGradeBPipe";
import API5LX42Pipe from "./components/sub pages/API5LX42Pipe";
import API5LX52Pipe from "./components/sub pages/API5LX52Pipe";
import API5LX65Pipe from "./components/sub pages/API5LX65Pipe";
import ASTMA106Pipe from "./components/sub pages/ASTMA106Pipe";
import ASTMA333Pipe from "./components/sub pages/ASTMA333Pipe";
import ASTMA53Pipe from "./components/sub pages/ASTMA53Pipe";
import ButtWeldFittings from "./components/sub pages/ButtWeldFittings";
import CapFittings from "./components/sub pages/CapFittings";
import CarbonSteelPipe from "./components/sub pages/CarbonSteelPipe";
import CopperFittings from "./components/sub pages/CopperFittings";
import CopperNickelPipe from "./components/sub pages/CopperNickelPipe";
import CopperNickelTube from "./components/sub pages/CopperNickelTube";
import CopperPipe from "./components/sub pages/CopperPipe";
import CopperRoundBar from "./components/sub pages/CopperRoundBar";
import CopperSheet from "./components/sub pages/CopperSheet";
import CopperTube from "./components/sub pages/CopperTube";
import CouplingFittings from "./components/sub pages/CouplingFittings";
import CuproNickel7030 from "./components/sub pages/CuproNickel7030";
import CuproNickel9010 from "./components/sub pages/CuproNickel9010";
import ElbowFittings from "./components/sub pages/ElbowFittings";
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
import ReducerFittings from "./components/sub pages/ReducerFittings";
import SocketWeldFittings from "./components/sub pages/SocketWeldFittings";
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
import TeeFittings from "./components/sub pages/TeeFittings";
import ThreadedFittings from "./components/sub pages/ThreadedFittings";
import UnionFittings from "./components/sub pages/UnionFittings";
import WeldedSteelPipe from "./components/sub pages/WeldedSteelPipe";
import About from "./pages/About";
import Aluminium from "./pages/Aluminium";
import CarbonSteelPage from "./pages/CarbonSteel";
import Certificates from "./pages/Certificates";
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
import TechnicalInfo from "./pages/TechnicalInfo";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/technical-info" element={<TechnicalInfo />} />
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
        <Route path="/socket-weld-fittings" element={<SocketWeldFittings />} />
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
    </>
  );
}

export default App;
