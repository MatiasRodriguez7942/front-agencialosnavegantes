import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import "../../componentes /global-styles/layout"
function sectionBannerMkt() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion1[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const gift = data.git_capitan[0].url;
 
  return (
    <div className="inicioo">
      <Container className="contenedor-body">
        <Row>
          <Col
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "60px",
              textAlign: "center",
            }}
          >
            <h1 className="letrasBanner">{titulo}</h1>
            <h4 className="descripcionBanner">{descripcion}</h4>
          </Col>
          <Col>
            <img src={gift}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionBannerMkt;
