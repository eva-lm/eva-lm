import { useNavigate } from "react-router-dom";

const MenuSkills = () => {
  const navigate = useNavigate();

  return (
    <nav className="">
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
    </nav>
  );
};

export default MenuSkills;