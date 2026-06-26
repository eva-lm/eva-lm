import Lottie from "lottie-react";
import bombillaAnimation from "../animation/bombilla.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import imgCardUx from "../img/img-skills/ux.svg";
import imgCardFront from "../img/img-skills/front.svg";
import imgCardAboutMe from "../img/img-skills/aboutMe.svg";
import imgCardContact from "../img/img-skills/contact.svg"

const Bento = () => {
  const [hoverUx, setHoverUx] = useState(false);
  return (
     <nav aria-label="Navegación principal en bloques">
      <ul class="m-0 p-0">
            <Row>
        <Col sm={6} md={7} className="pt-3">
<li class="m-0 p-0">
        <Link to="/ux-ui" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-primary-medium p-4 h-100">
         <h2 className="fs-3 fw-bolder text-center text-primary">
          UX / UI
          </h2> 
          <p className="fs-5 fw-lighter text-center">Proyectos de diseño de interfaces y experiencia de usuario</p>
<div
  onMouseEnter={() => setHoverUx(true)}
  onMouseLeave={() => setHoverUx(false)}
  style={{ width: 50 }}
>
  {!hoverUx ? (
    <img
      src={imgCardUx}
      alt="icono de una bombilla encendida con un corazón dentro"
      width="50"
    />
  ) : (
    <Lottie
      animationData={bombillaAnimation}
      loop={false}
      autoplay={true}
      style={{ width: 80}}
    />
  )}
</div>


                    
        </Link>
              </li>
      </Col>
      <Col sm={6} md={5} className="pt-3">
<li class="m-0 p-0">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-secondary-light p-4 h-100">
         <h2 className="fs-3 fw-bolder text-center text-secondary">
         Front-end
          </h2> 
          <p className="fs-5 fw-lighter text-center">Proyectos de desarrollo web en HTML, CSS y JS</p>
                    <div className="">
                      <img src={imgCardFront} class="" alt="icono de un cohete despegando" width="50" />
                    </div>
        </Link>
      </li>
      </Col>
</Row>
    <Row>

  
            <Col sm={6} md={5} className="pt-3">
            <li class="m-0 p-0">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-tertiary-light p-4 h-100">
         <h2 className="fs-3 fw-bolder text-center text-tertiary">
         Sobre mí
          </h2> 
          <p className="fs-5 fw-lighter text-center">Accede aquí para conocerme mejor y ver mi experiencia</p>
                    <div className="">
                      <img src={imgCardAboutMe} class="" alt="icono de una chica con un portátil" width="50" />
                    </div>
        </Link>
        </li>
      </Col>

            <Col sm={6} md={7} className="pt-3">
                        <li class="m-0 p-0">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-accent-light p-4 h-100">
         <h2 className="fs-3 fw-bolder text-center text-accent">
         Contacto
          </h2> 
          <p className="fs-5 fw-lighter text-center">Si quieres contactar conmigo, no dudes en escribirme! </p>
                    <div className="">
                      <img src={imgCardContact} class="" alt="icono de una agenda de contacto" width="50" />
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
