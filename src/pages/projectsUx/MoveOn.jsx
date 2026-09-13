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
  <article id="presentacion-moveon">
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
  </article>

  <article id="enlaces-rapidos">
  <Row className="bg-moveon-color-light mt-5">
<Col className="d-md-flex flex-column align-items-center justify-content-center py-3">
<h2 className="fs-4 text-center">ENLACES RÁPIDOS</h2>
<div className='mt-3 enlaces-rapidos text-center'>
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
    </article>

<article id="design-thingking-steps">
    <Row className="mt-5 design-thinking-container">
<Col className="d-md-flex flex-column align-items-center justify-content-center py-3">
<h2 className="fs-4 text-uppercase text-center">design thinking process</h2>
<div className='mt-3'>
  <ul className='d-flex flex-wrap justify-content-center gap-3'>
    <li className='d-flex flex-column align-items-center p-3'>
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none'>
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
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none'>
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
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none'>
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
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none'>
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
  <a href="#" className='text-moveon-color-dark text-uppercase px-3 py-1 fs-5 text-white text-decoration-none'>
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
  </article>

<article id="vision-general">
    <Row className="mt-5">
<Col className="py-3">
<h2 className="fs-4 text-uppercase text-center mb-4">Visión general del proyecto</h2>
<div className='mt-3 vision-general-container p-4'>
  <h3 className='fs-5'>PROBLEMA</h3>
  <p>Un cliente del sector retail especializado en ropa y equipamiento deportivo, que tras analizar las tendencias actuales de consumo digital y el crecimiento del eCommerce en el sector deportivo considera que existe una clara oportunidad de mercado para el desarrollo de una aplicación
que permita a los usuarios comprar ropa deportiva online de forma ágil, intuitiva y personalizada.</p>
</div>
<div className='mt-3 vision-general-container p-4'>
  <h3 className='fs-5'>OBJETIVO</h3>
  <p>El objetivo es diseñar una Progressive Web App (una web que, al ser visualizada
desde un móvil o tablet, se verá de forma similar a una app nativa), que ofrezca una
experiencia de compra intuitiva y optimizada para dispositivos móviles, manteniendo la
coherencia y escalabilidad en otros dispositivo.</p>
</div>
<div className='mt-3 vision-general-container p-4'>
  <h3 className='fs-5'>SOLUCIÓN</h3>
  <p>Para lograr esto, se llevará a cabo un análisis de la competencia, se harán entrevistas a
entrevistas con los usuarios para obtener información sobre el comportamiento y las
preferencias de los usuarios. Esta retroalimentación informará a nuestra investigación de
mercado, en la que analizaremos las tendencias y las estrategias de la competencia para
identificar oportunidades de diferenciación.</p>
</div>
</Col>
</Row>
</article>


<article id="empatizar">
    <Row className="mt-5">
<Col className="py-3">
<div className='d-flex flex-column align-items-center justify-content-center'>

  <div className='position-relative my-3'>
<h2 className="fs-1 fw-light text-uppercase text-center">01. EMPATIZAR</h2>
<div className='text-title-decoration position-absolute'></div>
  </div>

<p className='fs-6 fw-light mt-3 w-75 text-center'><em>“Sin entender, no puedo ver más allá del problema al otro lado que potencialmente contiene la
solución. Busque la comprensión haciendo preguntas.”</em></p>
<div className='d-flex align-items-center gap-5 mt-3'>
  <p className='text-uppercase fs-5 fw-semibold'>En esta sección</p>
   <ul className=''>
    <li><a href="#">1.1 Análisis Competitivo</a></li>
    <li><a href="#">1.2 Cuestionarios de Usuario</a></li>
    <li><a href="#">1.3 User Persona</a></li>
  </ul>
</div>
  </div>
  <div className='border-bottom-moveon-color my-3'></div>
  </Col>
  </Row>
  <Row>
    <Col>
    <h3 className='fs-4 mb-3'>1.1- Análisis Competitivo</h3>
    <p>Para comenzar, se elabora un estudio previo de otras marcas y se llevan a cabo técnicas de investigación para conocer bien a nuestro público objetivo.</p>
    <p>Para evaluar cómo son los productos de las marcas competidoras, desde un punto de vista de usuario final, se elabora un análisis donde se explora cómo son sus características, fortalezas y debilidades, diseño y flujo de navegación. El objetivo es identificar patrones de comportamiento, detectar oportunidades de mejora y extraer insights que nos ayuden a diferenciarnos para poder ofrecer una experiencia más eficiente y centrada en el usuario.</p>
    <p>Tras analizar las diferentes aplicaciones y webs de la competencia, se han identificado una serie de patrones comunes y oportunidades de mejora relevantes para el desarrollo de nuestra aplicación.</p>
    </Col>
  </Row>
  </article>
  </div>
  </Col>

  </Row>
      </section>  
      );
};

export default MoveOn;