import { Routes, Route } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import "./Styles/App.scss";

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
           <div className="landing m-0 vh-100">
      <MenuRRSS />
      <Routes>
                {/* HOME */}
          <Route path="/" element={<Home />} />
      </Routes>
      {isHome ? <HomeSkillsMenu /> : <MenuSkills />}
      <Outlet />

      <Routes>
        {/* PÁGINAS INTERNAS */}
        <Route path="/ux-ui" element={<Ux />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/front-end" element={<Front />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
  );
}

export default App;
