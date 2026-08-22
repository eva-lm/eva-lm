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

import Button from "react-bootstrap/Button";
import imgHeader from "../img/img-header.svg";
import imgPortfolio from "../img/portfolio.svg";

import imgHeader2 from "../img/laptop.svg";

import lineAnimation from "../animation/line.json";
import { useRef, useEffect } from "react";

const Bento = () => {
  const [hoverUx, setHoverUx] = useState(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.8);
    }
  }, []);
  return (
    <nav aria-label="Navegación principal en bloques">
      <ul class="row">
        <Col sm={12} md={4}>
          <li class="m-0 p-0 h-100">
            <div className="d-flex align-items-center center justify-content-center landing__bg-dibujo h-100 py-4">
              <div className="p-4">
                <div className="d-flex flex-column align-items-end justify-content-around">
                  <div className="d-flex align-items-center justify-content-center w-100">
                    <img
                      src={imgHeader}
                      class="img-header"
                      alt="dibujo de un post-it"
                      width="230"
                    />
                  </div>

                  <div>
                    {/* <p class="text-lightGray text-center text-md-end ms-1">Eva - Portfolio</p> */}
                    <h1 className="fs-title text-text text-center text-md-end font-mono mt-5">
                      UX/UI Digital Product Designer
                    </h1>
                    {/* <div className="underline-animation w-100 d-flex align-items-center">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={lineAnimation}
                  loop={2}
                  autoplay={true}
                  className="lottie-line"
                />
            </div> */}
                    <p className="fs-5 mt-3 lh-base text-gray text-center text-md-end">
                      Hola! Soy Eva, <b>diseñadora</b> de producto digital y
                      desarrolladora <b>front-end</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </Col>
        <Col sm={12} md={8}>
          <Row className="h-md-65 mt-2 mt-md-0">
            <Col sm={12} className="container-word">
              <img
                src={imgPortfolio}
                class="container-word__img"
                alt="palabra Porfolio"
                height="140"
              />
            </Col>
            <Col sm={12} md={6} className="mt-2">
              <li class="m-0 p-0 h-100">
                <Link
                  to="/ux-ui"
                  className="home-card d-flex flex-column flex-lg-row align-items-center text-decoration-none bg-primary-light p-4 h-100"
                >
                  <div className="me-lg-3">
                    <img
                      class="img-card"
                      src={imgCardUx}
                      alt="icono de una bombilla encendida con un corazón dentro"
                      height="96"
                    />
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bolder text-center text-lg-start text-primary">
                      UX / UI
                    </h2>
                    <p className="fs-5 text-black text-center text-lg-start m-0">
                      Proyectos de diseño de interfaces y experiencia de usuario
                    </p>{" "}
                    <span className="home-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            </Col>
            <Col sm={12} md={6} className="mt-2">
              <li class="m-0 p-0 h-100">
                <Link
                  to="/front-end"
                  className="home-card d-flex flex-column flex-lg-row align-items-center text-decoration-none bg-secondary-light p-4 h-100"
                >
                  <div className="me-lg-3">
                    <img
                      src={imgCardFront}
                      class=""
                      alt="icono de un cohete despegando"
                      height="96"
                    />
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bolder text-center text-lg-start text-secondary">
                      Front-end
                    </h2>
                    <p className="fs-5 text-black text-center text-lg-start m-0">
                      Proyectos de desarrollo web en HTML, CSS y JS
                    </p>{" "}
                    <span className="home-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            </Col>
          </Row>
          <Row className="h-md-35">
            <Col sm={12} md={6} className="mt-2">
              <li class="m-0 p-0 h-100">
                <Link
                  to="/sobre-mi"
                  className="home-card d-flex flex-column flex-lg-row align-items-center  text-decoration-none bg-tertiary-light p-4 h-100"
                >
                  <div className="me-lg-3">
                    <img
                      src={imgCardAboutMe}
                      class=""
                      alt="icono de una chica con un portátil"
                      height="96"
                    />
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bolder text-center text-lg-start text-tertiary">
                      Sobre mí
                    </h2>
                    <p className="fs-5 text-black text-center text-lg-start m-0">
                      Accede aquí si quieres conocerme mejor
                    </p>{" "}
                    <span className="home-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            </Col>

            <Col sm={12} md={6} className="mt-2">
              <li class="m-0 p-0 h-100">
                <Link
                  to="/contact"
                  className="home-card d-flex flex-column flex-lg-row align-items-center text-decoration-none bg-accent-light p-4 h-100"
                >
                  <div className="me-lg-3">
                    <img
                      src={imgCardContact}
                      class=""
                      alt="icono de una agenda de contacto"
                      height="96"
                    />
                  </div>
                  <div>
                    <h2 className="fs-4 fw-bolder text-center text-lg-start text-accent">
                      Contacto
                    </h2>
                    <p className="fs-5 text-black text-center text-lg-start m-0">
                      Si quieres contactar conmigo, no dudes en escribirme!
                    </p>{" "}
                    <span className="home-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            </Col>
          </Row>
        </Col>
      </ul>
    </nav>
  );
};

export default Bento;

//     <nav aria-label="Navegación principal en bloques">
//       <ul class="m-0 p-0">
//         <Row>
//           <Col sm={6} md={7} className="pt-3">
//             <li class="m-0 p-0">
//               <Link
//                 to="/ux-ui"
//                 className="home-card d-flex flex-column flex-lg-row align-items-center  text-decoration-none bg-primary-medium p-4 h-100"
//               >
//                 <div className="me-lg-3">
//                   <img
//                     class="img-card"
//                     src={imgCardUx}
//                     alt="icono de una bombilla encendida con un corazón dentro"
//                     height="96"
//                   />
//                 </div>
//                                 <div>
//                   <h2 className="fs-4 fw-bolder text-center text-lg-start text-primary">
//                     UX / UI
//                   </h2>
//                   <p className="fs-5 text-black text-center text-lg-start m-0">
//                     Proyectos de diseño de interfaces y experiencia de usuario
//                   </p>  <span className="home-card__arrow" aria-hidden="true">→</span>
//                 </div>
//                 {/* <div
//   onMouseEnter={() => setHoverUx(true)}
//   onMouseLeave={() => setHoverUx(false)}
//   style={{ width: 106 }}
// >
//   {!hoverUx ? (
//     <img
//     class="img-card"
//       src={imgCardUx}
//       alt="icono de una bombilla encendida con un corazón dentro"
//       height="106"
//     />
//   ) : (
//     <Lottie
//       animationData={bombillaAnimation}
//       loop={false}
//       autoplay={true}
//       style={{ height: 106 }}
//     />
//   )}
// </div> */}
//               </Link>
//             </li>
//           </Col>
//           <Col sm={6} md={5} className="pt-3">
//             <li class="m-0 p-0">
//               <Link
//                 to="/front-end"
//                 className="home-card d-flex flex-column flex-lg-row align-items-center text-decoration-none bg-secondary p-4 h-100"
//               >
//                                 <div className="me-lg-3">
//                   <img
//                     src={imgCardFront}
//                     class=""
//                     alt="icono de un cohete despegando"
//                     height="96"
//                   />
//                 </div>
//                 <div>
//                   <h2 className="fs-4 fw-bolder text-center text-lg-start text-secondary">
//                     Front-end
//                   </h2>
//                   <p className="fs-5 text-black text-center text-lg-start m-0">
//                     Proyectos de desarrollo web en HTML, CSS y JS
//                   </p> <span className="home-card__arrow" aria-hidden="true">→</span>
//                 </div>
//               </Link>
//             </li>
//           </Col>
//         </Row>
//         <Row>
//           <Col sm={6} md={5} className="pt-3">
//             <li class="m-0 p-0">
//               <Link
//                 to="/sobre-mi"
//                 className="home-card d-flex flex-column flex-lg-row align-items-center  text-decoration-none bg-tertiary-light p-4 h-100"
//               >
//                 <div className="me-lg-3">
//                   <img
//                     src={imgCardAboutMe}
//                     class=""
//                     alt="icono de una chica con un portátil"
//                     height="96"
//                   />
//                 </div>
//                 <div>
//                   <h2 className="fs-4 fw-bolder text-center text-lg-start text-tertiary">
//                     Sobre mí
//                   </h2>
//                   <p className="fs-5 text-black text-center text-lg-start m-0">
//                     Accede aquí si quieres conocerme mejor
//                   </p> <span className="home-card__arrow" aria-hidden="true">→</span>
//                 </div>
//               </Link>
//             </li>
//           </Col>

//           <Col sm={6} md={7} className="pt-3">
//             <li class="m-0 p-0">
//               <Link
//                 to="/front-end"
//                 className="home-card d-flex flex-column flex-lg-row align-items-center text-decoration-none bg-accent-light p-4 h-100"
//               >
//                 <div className="me-lg-3">
//                   <img
//                     src={imgCardContact}
//                     class=""
//                     alt="icono de una agenda de contacto"
//                     height="96"
//                   />
//                 </div>
//         <div>
//                   <h2 className="fs-4 fw-bolder text-center text-lg-start text-accent">
//                     Contacto
//                   </h2>
//                   <p className="fs-5 text-black text-center text-lg-start m-0">
//                     Si quieres contactar conmigo, no dudes en escribirme!
//                   </p> <span className="home-card__arrow" aria-hidden="true">→</span>
//                 </div>
//               </Link>
//             </li>
//           </Col>
//         </Row>
//       </ul>
//     </nav>
