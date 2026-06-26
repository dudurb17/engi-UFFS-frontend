import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Construction } from "../pages/Construction";
import { Layout } from "../components/Layout/Layout";
import { ConstructionLog } from "../pages/ ConstructionLog";
import { Finance } from "../pages/Finance";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/construcao" element={<Construction />} />
        <Route path="/obra" element={<ConstructionLog />} />
        <Route path="/financeiro" element={<Finance />} />
      </Route>
    </Routes>
  );
};
