import { Routes, Route } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import "./Styles/App.scss";
import { Container } from "react-bootstrap";


import MenuRRSS from "./MenuRRSS";
import Bento from "./components/Bento";
import MenuSkills from "./components/MenuSkills";

import Hero from "./pages/Hero";
import Ux from "./pages/Ux";
import Illustrations from "./pages/Illustrations";
import Contact from "./pages/Contact";
import Front from "./pages/Front";
import NutriBite from "./pages/projectsUx/nutriBite";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
           <div className="landing m-0 min-vh-100 d-flex flex-column">
            <div className="d-flex flex-column justify-content-between flex-grow-1">
       <MenuRRSS />
          <Container fluid>

       {!isHome && <MenuSkills />}
          </Container>
       <main>
        <Container fluid>
      <Routes>
                {/* HOME */}
          {/* <Route path="/" element={<Bento />} /> */}
      </Routes>
      {/* {isHome ? <Bento /> : <MenuSkills />} */}
       {isHome && <Bento />}
      <Outlet />

      <Routes>
        {/* PÁGINAS INTERNAS */}
        <Route path="/ux-ui" element={<Ux />} />
        <Route path="/front-end" element={<Front />} />
        {/* <Route path="/illustrations" element={<Illustrations />} /> */}
        <Route path="/sobre-mi" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />

        {/* PROYECTOS UX/UI */}
        <Route path="/ux-ui/nutribite" element={<NutriBite />} />
      </Routes>
              </Container>
              </main>
      <Footer />
       </div>
      </div>
  );
}

export default App;
