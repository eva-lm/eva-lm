import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo/logo-eva.svg";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/Layout/MenuRRSS.scss";

const MenuRRSS = () => {
  return (
    <header>
      <nav className="d-flex align-items-center justify-content-between py-3 px-4">
        <Link to="/">
          <div>
            <img src={logo} alt="logo web" height="45" />
          </div>
        </Link>
        <div className="menuRSS">
          <a
            class="fs-3 text-secondary"
            href="https://www.instagram.com/eva-lm9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            class="fs-3 mx-3 text-secondary"
            href="https://github.com/eva-lm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            class="fs-3 text-secondary"
            href="https://twitter.com/Eva_lm9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MenuRRSS;
