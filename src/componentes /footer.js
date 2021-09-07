import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
const footer = () => {
  return (
    <Container className="contenedor-footer">
      <Row className="justify-content-center">
        <Col sm={3}>LOGO</Col>
        <Col sm={3}>MENÚ</Col>
        <Col sm={3}>Pertenecemos a</Col>
        <Col sm={3}>Nuestras Empresas</Col>
      </Row>
    </Container>
  );
};

export default footer;
