import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks//useTripulacion";
import "../global-styles/layout";
function seccionTri2() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion2[0];
  const titulo = data.titulo_unete;
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const descripcion3 = data.descripcion3;

  return (
    <div>
      <Container style={{ paddingBottom: "100px" }} className="contenedor-body">
        <Row>
          <Col style={{ paddingTop: "100px", textAlign: "center" }}>
            <h4 className="descripTriSec2">{descripcion}</h4>
            <h4 className="descripTriSec2">{descripcion2}</h4>
            <h4 className="descripTriSec2">{descripcion3}</h4>

            <h1 className="uneteTriSec2">{titulo}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default seccionTri2;
