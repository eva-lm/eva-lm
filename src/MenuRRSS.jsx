import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo/logo-eva.svg"; 
import { Container, Row, Col } from "react-bootstrap";

const MenuRRSS = () => {
  return (
    <header className="d-flex align-items-center justify-content-between p-3">
      <nav>
        {/* <Link to="/">
          <div className="logo">
            <img
              src="./img/logo/logo-eva.svg"
              alt="logo web"
              className="header__logo-img"
            />
          </div>
        </Link> */}

<Link to="/">
          <div className="logo">
                      <img
              src={logo}
              alt="logo web"
              className="header__logo-img"
              height="60"
            />
                     </div>
        </Link>
        <div className="rrss">RRSS</div>
      </nav>
    </header>
  );
};

export default MenuRRSS;
