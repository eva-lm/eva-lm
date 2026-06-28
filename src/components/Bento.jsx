import "../Styles/Layout/Bento.scss";
import Lottie from "lottie-react";
import bombillaAnimation from "../animation/bombilla.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import imgCardUx from "../img/img-skills/ux.svg";
import imgCardFront from "../img/img-skills/front.svg";
import imgCardAboutMe from "../img/img-skills/aboutMe.svg";
import imgCardContact from "../img/img-skills/contact.svg";

const Bento = () => {
  const [hoverUx, setHoverUx] = useState(false);
  return (
    <nav aria-label="Navegación principal en bloques">
      <ul class="m-0 p-0">
        <Row>
          <Col sm={6} md={7} className="pt-3">
            <li class="m-0 p-0">
              <Link
                to="/ux-ui"
                className="home-card d-flex flex-column flex-lg-row align-items-center justify-content-center text-decoration-none bg-primary-medium p-4 h-100"
              >
                <div>
                  <h2 className="fs-4 fw-bolder text-center text-lg-start text-primary text-uppercase">
                    UX / UI
                  </h2>
                  <p className="fs-5 text-black text-center text-lg-start">
                    Proyectos de diseño de interfaces y experiencia de usuario
                  </p>
                </div>
                <div className="">
                  <img
                    class="img-card"
                    src={imgCardUx}
                    alt="icono de una bombilla encendida con un corazón dentro"
                    height="106"
                  />
                </div>
                {/* <div
  onMouseEnter={() => setHoverUx(true)}
  onMouseLeave={() => setHoverUx(false)}
  style={{ width: 106 }}
>
  {!hoverUx ? (
    <img
    class="img-card"
      src={imgCardUx}
      alt="icono de una bombilla encendida con un corazón dentro"
      height="106"
    />
  ) : (
    <Lottie
      animationData={bombillaAnimation}
      loop={false}
      autoplay={true}
      style={{ height: 106 }}
    />
  )}
</div> */}
              </Link>
            </li>
          </Col>
          <Col sm={6} md={5} className="pt-3">
            <li class="m-0 p-0">
              <Link
                to="/front-end"
                className="home-card d-flex flex-column flex-lg-row align-items-center justify-content-center text-decoration-none bg-secondary p-4 h-100"
              >
                <div>
                  <h2 className="fs-4 fw-bolder text-center text-lg-start text-secondary text-uppercase">
                    Front-end
                  </h2>
                  <p className="fs-5 text-black text-center text-lg-start">
                    Proyectos de desarrollo web en HTML, CSS y JS
                  </p>
                </div>
                <div className="">
                  <img
                    src={imgCardFront}
                    class=""
                    alt="icono de un cohete despegando"
                    height="106"
                  />
                </div>
              </Link>
            </li>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={5} className="pt-3">
            <li class="m-0 p-0">
              <Link
                to="/front-end"
                className="home-card d-flex flex-column flex-lg-row align-items-center justify-content-center text-decoration-none  bg-tertiary-light p-4 h-100"
              >
                <div>
                  <h2 className="fs-4 fw-bolder text-center text-lg-start text-tertiary text-uppercase">
                    Sobre mí
                  </h2>
                  <p className="fs-5 text-black text-center text-lg-start">
                    Accede aquí si quieres conocerme mejor
                  </p>
                </div>
                <div className="">
                  <img
                    src={imgCardAboutMe}
                    class=""
                    alt="icono de una chica con un portátil"
                    height="106"
                  />
                </div>
              </Link>
            </li>
          </Col>

          <Col sm={6} md={7} className="pt-3">
            <li class="m-0 p-0">
              <Link
                to="/front-end"
                className="home-card d-flex flex-column flex-lg-row align-items-center justify-content-center text-decoration-none bg-accent-light p-4 h-100"
              >
                <div>
                  <h2 className="fs-4 fw-bolder text-center text-lg-start text-accent text-uppercase">
                    Contacto
                  </h2>
                  <p className="fs-5 text-black text-center text-lg-start">
                    Si quieres contactar conmigo, no dudes en escribirme!{" "}
                  </p>
                </div>
                <div className="">
                  <img
                    src={imgCardContact}
                    class=""
                    alt="icono de una agenda de contacto"
                    height="106"
                  />
                </div>
              </Link>
            </li>
          </Col>
        </Row>
      </ul>
    </nav>
  );
};

export default Bento;
