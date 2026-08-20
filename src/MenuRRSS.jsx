import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo/logo-eva.svg";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/Layout/MenuRRSS.scss";

const MenuRRSS = () => {
  return (
    <header class="menu-top mb-4 border-bottom-white">
      <Container fluid>
      <nav className="d-flex flex-column flex-md-row align-items-center justify-content-between py-2">
        <Link to="/">
          <div>
            <img src={logo} alt="logo web" height="45" />
          </div>
        </Link>
        <ul className="rrss mt-2 mt-md-0">
          <li>
            <a
              class="fs-3 text-primary-light"
              href="https://github.com/eva-lm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              class="fs-3 mx-3 text-primary-light"
              href="https://www.linkedin.com/in/eva-lm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
                    <li>
            <a
              class="fs-3 text-primary-light"
              href="https://www.instagram.com/eva-lm9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
      </Container>
    </header>
  );
};

export default MenuRRSS;
