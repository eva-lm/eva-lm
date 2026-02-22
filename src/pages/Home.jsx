import "../Styles/Layout/Home.scss";
import { Row, Col } from "react-bootstrap";
import imgHeader from "../img/img-header.svg";

const Home = () => {
  return (
           <div className="landing__bg-dibujo m-0 d-flex align-items-center justify-content-center">
        <Row className="intro">
          <Col xs={12} className="text-end d-flex align-items-center">
          <div className="m-1">
            <h1 className="fs-1 text-secondary">UX/UI Digital Product Designer</h1>
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
  );
};

export default Home;
