import { Routes, Route } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import "./Styles/App.scss";
import { Container } from "react-bootstrap";


import MenuRRSS from "./MenuRRSS";
import HomeSkillsMenu from "./components/HomeSkillsMenu";
import MenuSkills from "./components/MenuSkills";

import Home from "./pages/Home";
import Ux from "./pages/Ux";
import Illustrations from "./pages/Illustrations";
import Contact from "./pages/Contact";
import Front from "./pages/Front";
import NutriBite from "./pages/projectsUx/nutriBite";

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
            <Container>
      {isHome ? <HomeSkillsMenu /> : <MenuSkills />}
      <Outlet />

      <Routes>
        {/* PÁGINAS INTERNAS */}
        <Route path="/ux-ui" element={<Ux />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/front-end" element={<Front />} />
        <Route path="/contact" element={<Contact />} />

        {/* PROYECTOS UX/UI */}
        <Route path="/ux-ui/nutribite" element={<NutriBite />} />
      </Routes>
       </Container>
      </div>
  );
}

export default App;
