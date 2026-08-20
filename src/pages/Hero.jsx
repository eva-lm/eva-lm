import "../Styles/Layout/Hero.scss";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import imgHeader from "../img/img-header.svg";
import imgHeader2 from "../img/laptop.svg";

import Lottie from "lottie-react";
import lineAnimation from "../animation/line.json";
import { useRef, useEffect } from "react";

const Hero = () => {
    const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.8);
    }
  }, []);

  return (
      //      <div className="d-flex align-items-center center justify-content-center landing__bg-dibujo">
      //   <Row className="intro p-4">
      //     <Col xs={12} className="d-flex flex-column flex-md-row align-items-center justify-content-between">
      //     <div className="me-md-4">
      //       <p class="text-lightGray text-center text-md-start ms-1">Eva - Portfolio</p>
      //       <h1 className="fs-title text-text text-center text-md-start mt-2">UX/UI Digital Product Designer</h1>
      //        <div className="underline-animation w-100 d-flex align-items-center">
      //           <Lottie
      //             lottieRef={lottieRef}
      //             animationData={lineAnimation}
      //             loop={2}
      //             autoplay={true}
      //             className="lottie-line"
      //           />
      //       </div>

      //    <p className="fs-5 mt-3 ms-1 lh-base text-gray text-center text-md-start">
    
      //         Hola! Soy Eva, diseñadora de producto digital y desarrolladora front-end
      //       </p>
      //       {/* <Button className="mt-2" secondary>Contáctame</Button> */}

      //     </div>
      //      {/* <div className="ms-md-3 d-flex flex-column align-items-center justify-content-center bg-img-header">
      //       <p class="font-caveat fs-3 text-gray">¿Hablamos?</p>
      //     </div>  */}
      //       <div className="ms-md-3">
      //       <img src={imgHeader} class="img-header" alt="dibujo de un post-it" width="280" />
      //       </div> 
      //                  {/* <div className="ms-md-3">
      //       <img src={imgHeader2} class="img-header" alt="dibujo de un post-it" width="340" />
      //       </div>  */}
      //     </Col>
      //   </Row>
      // </div>
      <div></div>
  );
};

export default Hero;
