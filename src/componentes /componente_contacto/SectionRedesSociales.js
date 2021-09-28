import React from "react";
import "../../componentes /global-styles/layout";
import {  Container, Row, Col } from "react-bootstrap";

function SectionRedesSociales() {
    const iconos = {
    fontSize:"45px",
    color:"#fffe00",
    }
  return (
    <div style={{ background: "#290877" }}>
      <Container
        className="contenedor-body"
        style={{
          padding: "40px 0px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <img
              className="img-fluid"
              src="https://agencia-navegantes.s3.amazonaws.com/giphy_14_a3122a0f0e.gif"
              alt=""
            ></img>
          </Col>
          <Col sm={6}>
            <h1 style={{ fontSize: "60px",color:"#fff" ,textAlign: "left"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row>
              <Col sm="4">
                <i  style={iconos}className="bi bi-facebook"></i>
              </Col>
              <Col sm="4">
                <i style={iconos}className="bi bi-linkedin"></i>
              </Col>
              <Col sm="4">
                <i style={iconos}className="bi bi-instagram"></i>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionRedesSociales;
