import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
           <div className="landing__bg-dibujo m-0 d-flex align-items-center justify-content-center">
        <Row className="intro">
          <Col xs={12} className="text-end">
            <h1 className="fs-6">Eva</h1>
            <h2>Product Designer</h2>
            <p>
              Hey there! I'm a creative graphic and web designer based in sunny
              San Francisco, CA.
            </p>
          </Col>
        </Row>
        <Row></Row>
      </div>
  );
};

export default Home;
