import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import UseAnalitica from "../../hooks/useAnalitica";

function sectionBanner() {
  const response = UseAnalitica();
  const data = response.allStrapiAnalitica.nodes[0].ANALITICA_SECCION1[0];
  const titulo = data.titulo;
  const subtitulo = data.subtitulo;
  const gift = data.gift_capitan[0].url;


  return (
    <div style={{ background: "#fffe00" ,padding: "50px 0"}}>
      <Container className="contenedor-body" >
        <Row  className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}>
          <Col style={{ textAlign: "left" }}>
            <h1
              style={{ color: "#0100ff", fontWeight: "700", fontSize: "75px", lineHeight:"82.5px", }}
            >
              {titulo}
            </h1>
            <h4 style={{ color: "#0100ff" }}>{subtitulo}</h4>
          </Col>
          <Col>
            <img className="img-fluid" style={{textAlign:"center"}}src={gift}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionBanner;
