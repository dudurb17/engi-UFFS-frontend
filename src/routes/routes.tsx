import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Layout } from "../components/Layout/Layout";
import { ConstructionLog } from "../pages/ ConstructionLog";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/obra" element={<ConstructionLog />} />
      </Route>
    </Routes>
  );
};
