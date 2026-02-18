import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from "react-router-dom";

const Ux = () => {
    const navigate = useNavigate();
  return (
      <section className="ux" id="ux">
           <Container>
       <div>Soy Ux</div>
      <Row>
        <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate("/ux-ui/nutribite")}>NutriBite</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
      </section>  
      );
};

export default Ux;