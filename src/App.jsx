import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, useLocation } from "react-router-dom";

import MenuRRSS from "./MenuRRSS";
import HomeSkillsMenu from "./components/HomeSkillsMenu";
import MenuSkills from "./components/MenuSkills";

import Home from "./pages/Home";
import Ux from "./pages/Ux";
import Illustrations from "./pages/Illustrations";
import Contact from "./pages/Contact";
import Front from "./pages/Front";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <>
      <MenuRRSS />
      {isHome ? <HomeSkillsMenu /> : <MenuSkills />}
      <Outlet />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PÁGINAS INTERNAS */}
        <Route path="/ux-ui" element={<Ux />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/front-end" element={<Front />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
