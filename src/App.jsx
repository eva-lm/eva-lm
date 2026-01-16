import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Styles/App.scss';
import "./Styles/Layout/Home.scss";
import "./Styles/Layout/Header.scss";
import "./Styles/Components/_buttons.scss";
import { Container, Row, Col, Image } from 'react-bootstrap';


import Menu from "./Menu";
import Home from "./Home";
import Ux from "./Ux";


import Illustrations from "./Illustrations";

import Contact from "./Contact";
import Front from "./Front";



function App() {
  return (
    // <div className="App">
      <Container fluid className="landing vh-100 m-0 p-0">
      <div className='landing__bg-dibujo vh-100 m-0'>
{/* 
      <header className="d-flex align-items-center justify-content-between p-3">
          <div className="logo">LOGO</div>
             <div className="rrss">RRSS</div>
      </header> */}
<Menu />
      <main>
          <Router>
            {/* <Route 
            exact path="/" 
            render={() => {
              return (
                <Home showComponentSkills={this.showComponentSkills} renderSkills={this.state.renderSkills} />
              )
            }} /> */}
<Routes>
<Route path="/ux-ui" element={<Ux />} />
<Route path="/illustrations" element={<Illustrations />} />
<Route path="/front-end" element={<Front />} />
<Route path="/contact" element={<Contact />} />
</Routes>

          </Router>
      </main>

      <Row className="intro text-center">
        <Col xs={12}>
          <h1 className='fs-6'>Jane Lo</h1>
          <h2>Product Designer</h2>
          <p>
            Hey there! I'm a creative graphic and web designer based in sunny
            San Francisco, CA.
          </p>
        </Col>
      </Row>
      <Container className="mt-md-5 text-center">

      <Row>
        <Col md={6} className="grid-item bg-primary">
          {/* Contenido o imagen */}aaaaa
        </Col>
        <Col md={6} className="grid-item bg-secondary">
          {/* Contenido o imagen */}eeeeee
        </Col>
      </Row>
      <Row>
        <Col md={4} className="grid-item bg-info">
          {/* Contenido o imagen */}iiii
        </Col>
        <Col md={4} className="grid-item bg-warning">
          {/* Contenido o imagen */}oooo
        </Col>
        <Col md={4} className="grid-item bg-primary">
          {/* Contenido o imagen */}uuu
        </Col>
      </Row>
    </Container>

    </div>
    </Container>
    
    // </div>
  );
}

export default App;
