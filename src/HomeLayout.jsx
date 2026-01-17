import { Outlet, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const HomeLayout = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-md-5 text-center">
      <Row>
        <Col
          md={6}
          className="grid-item bg-primary"
          onClick={() => navigate("/ux-ui")}
          style={{ cursor: "pointer" }}
        >
          Ux
        </Col>

        <Col
          md={6}
          className="grid-item bg-secondary"
          onClick={() => navigate("/front-end")}
          style={{ cursor: "pointer" }}
        >
          Front
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          className="grid-item bg-info"
          onClick={() => navigate("/illustrations")}
          style={{ cursor: "pointer" }}
        >
          Illustrations
        </Col>

        <Col
          md={6}
          className="grid-item bg-warning"
          onClick={() => navigate("/contact")}
          style={{ cursor: "pointer" }}
        >
          Contact
        </Col>
      </Row>

      {/* AQUÍ se renderiza la página */}
      <Outlet />
    </Container>
  );
};

export default HomeLayout;
