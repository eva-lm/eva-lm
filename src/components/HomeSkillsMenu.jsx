import Lottie from "lottie-react";
import bombillaAnimation from "../animation/bombilla.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import imgCardUx from "../img/img-skills/ux.svg";
import imgCardFront from "../img/img-skills/front.svg";
import imgCardAboutMe from "../img/img-skills/aboutMe.svg";
import imgCardContact from "../img/img-skills/contact.svg"

const HomeSkillsMenu = () => {
  const [hoverUx, setHoverUx] = useState(false);
  return (
          <Row className="mt-3">
      <Col sm={6} md={3} className="pt-3 pb-4">
        <Link to="/ux-ui" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-secondary p-4 h-100">
         <h3 className="fw-bolder text-center text-secondary">
          UX / UI
          </h3> 
          <p className="fs-6 fw-lighter text-center">Proyectos de diseño de interfaces y experiencia de usuario</p>
<div
  onMouseEnter={() => setHoverUx(true)}
  onMouseLeave={() => setHoverUx(false)}
  style={{ width: 80 }}
>
  {!hoverUx ? (
    <img
      src={imgCardUx}
      alt="icono de una bombilla encendida con un corazón dentro"
      width="80"
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
      </Col>

      <Col sm={6} md={3} className="pt-3 pb-4">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-info p-4 h-100">
         <h3 className="fw-bolder text-center text-darkInfo">
         Front-end
          </h3> 
          <p className="fs-6 fw-lighter text-center">Proyectos de desarrollo web en HTML, CSS y JS</p>
                    <div className="">
                      <img src={imgCardFront} class="" alt="icono de un cohete despegando" width="80" />
                    </div>
        </Link>
      </Col>

            <Col sm={6} md={3} className="pt-3 pb-4">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-warning p-4 h-100">
         <h3 className="fw-bolder text-center text-darkWarning">
         Sobre mí
          </h3> 
          <p className="fs-6 fw-lighter text-center">Accede aquí para conocerme mejor y ver mi experiencia</p>
                    <div className="">
                      <img src={imgCardAboutMe} class="" alt="icono de una chica con un portátil" width="80" />
                    </div>
        </Link>
      </Col>

            <Col sm={6} md={3} className="pt-3 pb-4">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-tertiary p-4 h-100">
         <h3 className="fw-bolder text-center text-primary">
         Contacto
          </h3> 
          <p className="fs-6 fw-lighter text-center">Si quieres contactar conmigo, no dudes en escribirme! </p>
                    <div className="">
                      <img src={imgCardContact} class="" alt="icono de una agenda de contacto" width="80" />
                    </div>
        </Link>
      </Col>
    </Row>
  );
};

export default HomeSkillsMenu;
