import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<div className="text-white">About Page</div>}
        />
      </Routes>
    </>
  );
}

export default App;
