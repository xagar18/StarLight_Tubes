import { Route, Routes } from "react-router";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
