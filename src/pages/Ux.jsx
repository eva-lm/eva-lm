import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import "../Styles/Layout/Ux.scss";


import { useNavigate } from "react-router-dom";

const Ux = () => {
    const navigate = useNavigate();
  return (
      <section className="mt-5">
       <h1>Proyectos <span class="text-primary">UX/UI</span></h1>
      <Row>
        <Col>
<div className="project-item border-bottom-primary-light py-3">
  <div className="d-flex flex-column flex-md-row align-items-md-center gap-4">


  <div className="project-img">
    {/* <img className='' src="" alt="" /> */}
  </div>
  <div className="d-flex flex-column justify-content-between align-items-start">
    <div>
  <h3 className='fs-5'>MOVE ON</h3>
<p>Diseño de app móvil que permita a los usuarios comprar ropa deportiva en línea. En este proyecto se desarrolla un eCommerce que permita a los usuarios comprar de forma ágil, intuitiva y personalizada</p>
    </div>
<Button className="mt-3" variant="primary" onClick={() => navigate("/ux-ui/moveon")}>Ver proyecto</Button>
  </div>
    </div>
</div>
<div className="project-item border-bottom-primary-light py-3">
  <div className="d-flex flex-column flex-md-row align-items-md-center gap-4">


  <div className="project-img">
    {/* <img className='' src="" alt="" /> */}
  </div>
  <div className="d-flex flex-column justify-content-between align-items-start">
    <div>
  <h3 className='fs-5'>NutriBite</h3>
<p>Diseño de un webApp de comida saludable a domicilio</p>
    </div>
 <Button variant="primary" onClick={() => navigate("/ux-ui/nutribite")}>Ver proyecto</Button>
  </div>
    </div>
</div>
    </Col>
      </Row>
      </section>  
      );
};

export default Ux;