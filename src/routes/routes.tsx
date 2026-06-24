import { Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Example1 } from "../pages/Example1"
import { Example2 } from "../pages/Example2"
import { Layout } from "../components/Layout/Layout"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/exemplo-1" element={<Example1 />} />
          <Route path="/exemplo-2" element={<Example2 />} />
        </Route>
      </Routes>
  )
}