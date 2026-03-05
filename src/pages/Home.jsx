import "../Styles/Layout/Home.scss";
import { Row, Col } from "react-bootstrap";
import imgHeader from "../img/img-header.svg";
import Lottie from "lottie-react";
import lineAnimation from "../animation/line.json";
import { useRef, useEffect } from "react";

const Home = () => {
    const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.8);
    }
  }, []);

  return (
           <div className="landing__bg-dibujo m-0 d-flex align-items-center center justify-content-center">
            <div className="">
        <Row className="intro p-2">
          <Col xs={12} className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="me-md-4">
            <small class="text-lightGray ms-1">Eva - Portfolio</small>
            <h1 className="fs-1 text-text mt-2">UX/UI Digital Product Designer</h1>
             <div className="underline-animation w-100 d-flex align-items-center">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={lineAnimation}
                  loop={2}
                  autoplay={true}
                  className="lottie-line"
                />
            </div>

             <h2 className="fs-6 mt-2 ms-1 text-gray">
              Hola! 👋 Soy Eva,diseñadora de <b>producto digital</b> y desarrolladora <b>front-end</b>
            </h2>

          </div>
          <div className="ms-md-3">
            <img src={imgHeader} class="img-header" alt="dibujo de un ordenador con elementos de diseño y web" width="300" />
          </div>
          </Col>
        </Row>
            </div>
              <div>
                      {/*   
                          Hola! Mi nombre es Eva y  Soy <strong>desarrolladora front-end junior e ilustradora digital</strong>. También tengo algunas nociones de diseño Ux-Ui y estoy estudiando Animación 3D. Me encanta combinar diseño con código, elaborar propuestas a partir de una idea para después darles funcionalidad.

                                      Puedes contactar conmigo a través del apartado contacto o desde mis redes sociales accediendo desde el menú. ¡Estaré encantada de responderte! 🙂 */}
        </div>
      </div>
  );
};

export default Home;
