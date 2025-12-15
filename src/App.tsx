import { Route, Routes } from "react-router";
import About from "./pages/About";
import Coating from "./pages/Coating";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Material from "./pages/Material";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/materials" element={<Material />} />
        <Route path="/coating" element={<Coating />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
