import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './Styles/App.scss';
import "./Styles/Layout/Home.scss";
import "./Styles/Layout/Header.scss";
import "./Styles/Components/_buttons.scss";
import { Container, Row, Col, Image } from 'react-bootstrap';


import Menu from "./Menu";
import HomeLayout from "./HomeLayout";
import Ux from "./Ux";
import Illustrations from "./Illustrations";
import Contact from "./Contact";
import Front from "./Front";



function App() {
  return (
      <Container fluid className="landing vh-100 m-0 p-0">
      <div className='landing__bg-dibujo vh-100 m-0'>
      <main>

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


      

    <BrowserRouter>
      <Menu />

<Routes>
  <Route path="/" element={<HomeLayout />} />

     <Route path="/ux-ui" element={<Ux />} />
    <Route path="/illustrations" element={<Illustrations />} />
    <Route path="/front-end" element={<Front />} />
    <Route path="/contact" element={<Contact />} />
</Routes>
    </BrowserRouter>

      </main>
    </div>
    </Container>
    
  );
}

export default App;
