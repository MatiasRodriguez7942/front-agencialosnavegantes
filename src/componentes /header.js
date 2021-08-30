import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Nav }  from 'react-bootstrap';
class header extends Component {
  render() {
    return (
      <div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/">Inicio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tripulacion">Tripulación</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="desarrolloweb">Desarrollo web</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="marketingdigital">Marketing Digital</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="analiticayperformance">Anlítica y Performance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="blog">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacto">Contacto</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default header;
