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
           <div className="landing__bg-dibujo m-0 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
        <Row className="intro">
          <Col xs={12} className="d-flex align-items-center">
          <div className="text-end mt-4">
            <h1 className="fs-1 text-secondary">UX/UI Digital Product Designer</h1>
            <div className="underline-animation w-100 d-flex align-items-center justify-content-center">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={lineAnimation}
                  loop={2}
                  autoplay={true}
                  className="lottie-line"
                />
            </div>
                                  <h2 className="fs-6">
              Hey there! I'm a creative graphic and web designer based in sunny
              San Francisco
            </h2>
          </div>
          <div className="ms-md-3">
            <img src={imgHeader} alt="dibujo de un ordenador con elementos de diseño y web" width="250" />
          </div>
          </Col>
        </Row>
            </div>
              <div>
                      {/* <h2 className="fs-6 mt-3">
              Hey there! I'm a creative graphic and web designer based in sunny
              San Francisco
            </h2> */}
        </div>
      </div>
  );
};

export default Home;
