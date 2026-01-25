import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const HomeSkillsMenu = () => {
  return (
    <div>
          <Row>
      <Col md={6}>
        <Link to="/ux-ui" className="grid-item bg-primary">
          UX / UI
        </Link>
      </Col>

      <Col md={6}>
        <Link to="/front-end" className="grid-item bg-secondary">
          Front-end
        </Link>
      </Col>
    </Row>
    </div>
  );
};

export default HomeSkillsMenu;
