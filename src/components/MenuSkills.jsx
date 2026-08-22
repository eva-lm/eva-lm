import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Layout/MenuSkills.scss";


const MenuSkills = () => {
  const navigate = useNavigate();

const { pathname } = useLocation();
const tabActiva = pathname.replace("/", ""); 
console.log("pathname:", pathname, "tabActiva:", tabActiva);

  return (
    <div>
      <nav>
        <ul className="nav">
          <li
            className="nav-item"
            onClick={() => navigate("/ux-ui")}
          >
            <a className={`nav-link px-5 mt-2 bg-change-first ${tabActiva === "ux-ui" ? "active" : ""}`}>
              UX/UI
            </a>
          </li>
         <li
            className="nav-item mx-2"
            onClick={() => navigate("/front-end")}
          >
            <a className={`nav-link px-5 mt-2 bg-change-second ${tabActiva === "front-end" ? "active" : ""}`}>
              Front-end
            </a>
          </li>
          <li
            className="nav-item me-2"
            onClick={() => navigate("/sobre-mi")}
          >
            <a className={`nav-link px-5 mt-2 bg-change-third ${tabActiva === "sobre-mi" ? "active" : ""}`}>
              Sobre mí
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() =>  navigate("/contact")}
          >
            <a className={`nav-link px-5 mt-2 bg-change-fourth ${tabActiva === "contact" ? "active" : ""}`}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuSkills;

{
  /* <nav className="">
      <ul>
      <li className="bg-primary-medium" onClick={() => navigate("/ux-ui")}>
        UX / UI 
      </li>

      <li className="bg-secondary" onClick={() => navigate("/front-end")}>
        Front-end
      </li>

      <li className="bg-tertiary-light" onClick={() => navigate("/illustrations")}>
        Illustrations 
      </li>

      <li className="bg-tertiary-light" onClick={() => navigate("/sobre-mi")}>
        Sobre mí
      </li>

      <li className="bg-accent-light" onClick={() => navigate("/contact")}>
        Contacto
      </li>
            </ul>
    </nav> */
}
