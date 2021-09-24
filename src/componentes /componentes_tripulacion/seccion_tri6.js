import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function SeccionTri6() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion7[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;

  return (
    <div style={{ paddingBottom: "50px" }} className="contenedor-body7">
      <Container>
        <Row>
          <Col
            style={{
              alignContent: "center",
              alignItems: "center",
              paddingTop: "100px",
              textAlign: "center",
            }}
          >
            <h4 className="seccion7Titulo">{titulo}</h4>
            <h4 className="seccion7descripcion">{descripcion}</h4>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              style={{ paddingTop: "40px", width: "40%" }}
              src={imagen}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeccionTri6;
