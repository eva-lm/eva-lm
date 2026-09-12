import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsBoxArrowUpRight } from 'react-icons/bs'

import imgHeaderMoveon from "../../img/ux-projects/moveon/header-moveon.png";

import "../../Styles/Layout/Ux.scss";


const MoveOn = () => {
  return (
      <section className="mt-4 moveon">
      <Row>
        <Col>
<div>
  <Row className="d-md-flex align-items-center">

     <Col sm={12} md={6} className="mt-2 bg-decoration position-relative">
     <p className="fs-6 font-mono position-absolute">
      Case Study nº.1
     </p>
     <div className="h-100 d-flex align-items-center justify-content-center">
      <img className="img-header-moveon" src={imgHeaderMoveon} alt="mockups de iphone mostrando la pantalla de inicio de la app" width="1500"/>
     </div>
     </Col>

     <Col sm={12} md={6} className="mt-4 mt-md-2 px-4">
           <h1 className="fs-3">MOVE ON</h1>
           <p className="fs-4 fw-light">“Move your way”</p>
             <p><b>Desafío: </b>Diseñar una web-app que permita a los usuarios comprar ropa deportiva en línea</p>

  <p><b>Estado inicial: </b>El proyecto se encuentra en una fase inicial (idea). Marca, colores corporativos y diseño, sin definir. Su mercado se desarrolla en la Península Ibérica.</p>
<p><b>Tipo de proyecto: </b></p>
<ul>
  <li>UX/UI, Branding</li>
  <li>Individual</li>
  <li>Reto de diseño</li>
</ul>
<p><b>Duración:</b> 5 semanas</p>
<p><b>Rol: </b>Diseñadora de producto </p>
<p><b>Herramientas: </b>Investigación, bocetos, Figma</p>
     </Col>
  </Row>
  <Row className="bg-moveon-color-light mt-4">
<Col className="d-md-flex flex-column align-items-center justify-content-center py-3">
<h2 className="fs-4 text-center">ENLACES RÁPIDOS</h2>
<div className='mt-3 enlaces-rapidos'>
<a href="https://ejemplo.com" 
      target="_blank" 
      rel="noopener noreferrer" variant="outline-moveon-color-dark" className="d-inline-flex align-items-center gap-2 fs-6 fw-bold text-moveon-color-dark">
    <BsBoxArrowUpRight size={16} aria-hidden="true" />  FLUJOS DE NAV.
</a>
<a href="https://ejemplo.com" 
      target="_blank" 
      rel="noopener noreferrer" variant="outline-moveon-color-dark" className="d-inline-flex align-items-center gap-2 fs-6 fw-bold text-moveon-color-dark mx-4">
    <BsBoxArrowUpRight size={16} aria-hidden="true" /> 

  WIREFRAMES
</a>
<a href="https://ejemplo.com" 
      target="_blank" 
      rel="noopener noreferrer" variant="outline-moveon-color-dark" className="d-inline-flex align-items-center gap-2 fs-6 fw-bold text-moveon-color-dark">
    <BsBoxArrowUpRight size={16} aria-hidden="true" /> 
  PROTIPO FINAL
</a>
</div>
</Col>
  </Row>
  {/* botones indice */}

    <Row className="mt-4 design-thinking-container">
<Col className="d-md-flex flex-column align-items-center justify-content-center py-3">
<h2 className="fs-4 text-uppercase text-center">design thinking process</h2>
<div className='mt-3'>
  <ul className='d-flex flex-wrap justify-content-center gap-3'>
    <li className='d-flex flex-column align-items-center p-3'>
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-2 fs-5 text-white text-decoration-none'>
1- Empatizar
  </a>
  <ul className='text-center mt-2'>
        <li>
      <a href="#">1.1 Análisis Competitivo</a>
    </li>
    <li><a href="#">1.2 Cuestionarios de Usuario</a></li>
    <li><a href="#">1.3 User Persona</a></li>
  </ul>
    </li>
    <li className='d-flex flex-column align-items-center p-3'>
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-2 fs-5 text-white text-decoration-none'>
2- Definir
  </a>
  <ul className='text-center mt-2'>
        <li>
      <a href="#">2.1  Definición del problema</a>
    </li>
    <li><a href="#">2.2 ¿Cómo podríamos...?</a></li>
    <li><a href="#">2.3 Objetivos del proyecto</a></li>
        <li><a href="#">2.4 Hoja de ruta de características</a></li>
  </ul>
    </li>
        <li className='d-flex flex-column align-items-center p-3'>
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-2 fs-5 text-white text-decoration-none'>
3- Idear
  </a>
  <ul className='text-center mt-2'>
        <li>
      <a href="#">3.1 Card sorting</a>
    </li>
    <li><a href="#">3.2 Sitemap</a></li>
    <li><a href="#">3.3 Diagrama de flujo</a></li>
        <li><a href="#">3.4 Wireframes de baja fidelidad</a></li>
  </ul>
    </li>
      <div class="w-100"></div>
            <li className='d-flex flex-column align-items-center p-3'>
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-2 fs-5 text-white text-decoration-none'>
4- Diseñar
  </a>
  <ul className='text-center mt-2'>
        <li>
      <a href="#">4.1 Branding</a>
    </li>
    <li><a href="#">4.2 Wireframes de alta fidelidad</a></li>
    <li><a href="#">4.3 Flujo interactivo</a></li>

  </ul>
    </li>

                <li className='d-flex flex-column align-items-center p-3'>
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-2 fs-5 text-white text-decoration-none'>
5- Test
  </a>
  <ul className='text-center mt-2'>
        <li>
      <a href="#">5.1 Definición de la muestra</a>
    </li>
    <li><a href="#">5.2 Tareas del test</a></li>
    <li><a href="#">5.3  Resultados obtenidos</a></li>

  </ul>
    </li>
  </ul>
  </div>
  </Col>
  </Row>
  </div>
  </Col>

  </Row>
      </section>  
      );
};

export default MoveOn;