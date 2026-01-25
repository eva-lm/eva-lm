import { useNavigate } from "react-router-dom";

const MenuSkills = () => {
  const navigate = useNavigate();

  return (
    <div className="home-grid">
      <div className="grid-item bg-primary" onClick={() => navigate("/ux-ui")}>
        UX / UI barrita
      </div>

      <div className="grid-item bg-secondary" onClick={() => navigate("/front-end")}>
        Front-end barrita
      </div>

      <div className="grid-item bg-info" onClick={() => navigate("/illustrations")}>
        Illustrations barrita
      </div>

      <div className="grid-item bg-warning" onClick={() => navigate("/contact")}>
        Contact barrita
      </div>
    </div>
  );
};

export default MenuSkills;
