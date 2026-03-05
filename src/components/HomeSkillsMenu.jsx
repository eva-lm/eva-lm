import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import imgCardUx from "../img/img-skills/ux.svg";


const HomeSkillsMenu = () => {
  return (
    <div className="mt-5">
          <Row className="landing__bg-dibujo m-0 d-flex flex-column flex-md-row align-items-center justify-content-center">
      <Col sm={6} md={3} className="h-100 py-3">
        <Link to="/ux-ui" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-secondary p-4 h-100">
         <h3 className="fw-bolder text-center text-secondary">
          UX / UI
          </h3> 
          <p className="fs-6 fw-lighter text-center">Proyectos de diseño de interfaces y experiencia de usuario</p>
                    <div className="">
                      <img src={imgCardUx} class="" alt="icono de una bombilla encendida con un corazon dentro" width="80" />
                    </div>
        </Link>
      </Col>

      <Col sm={6} md={3} className="h-100 py-3">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-info p-4 h-100">
         <h3 className="fw-bolder text-center text-info">
         Front-end
          </h3> 
          <p className="fs-6 fw-lighter text-center">Proyectos de desarrollo web</p>
                    <div className="">
                      <img src={imgCardUx} class="" alt="icono de una bombilla encendida con un corazon dentro" width="80" />
                    </div>
        </Link>
      </Col>

            <Col sm={6} md={3} className="h-100 py-3">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-warning p-4 h-100">
         <h3 className="fw-bolder text-center text-info">
         Sobre mí
          </h3> 
          <p className="fs-6 fw-lighter text-center">Accede aquí para conocerme mejor</p>
                    <div className="">
                      <img src={imgCardUx} class="" alt="icono de una bombilla encendida con un corazon dentro" width="80" />
                    </div>
        </Link>
      </Col>

            <Col sm={6} md={3} className="h-100 py-3">
        <Link to="/front-end" className="home-card card d-flex flex-column align-items-center text-decoration-none bg-tertiary p-4 h-100">
         <h3 className="fw-bolder text-center text-info">
         Contacto
          </h3> 
          <p className="fs-6 fw-lighter text-center">Si quieres contactar conmigo, no dudes en escribirme! Estaré encantada de responderte</p>
                    <div className="">
                      <img src={imgCardUx} class="" alt="icono de una bombilla encendida con un corazon dentro" width="80" />
                    </div>
        </Link>
      </Col>
    </Row>
    </div>
  );
};

export default HomeSkillsMenu;
