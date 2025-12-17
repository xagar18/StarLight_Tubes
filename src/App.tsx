import React from "react";
import { Route, Routes } from "react-router";
import ComingSoon from "./pages/ComingSoon";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<ComingSoon />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default App;
