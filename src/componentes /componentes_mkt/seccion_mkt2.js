import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";

const seccionMkt2 = () => {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion2[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const imagen_iconos = data.imagen_iconos;
  const titulo = data.titulo;
  const link = data.link_conversemos;

  return (
    <div style={{ backgroundColor: "#ff5983", padding: "50px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                    key={i}
                    className="img-fluid"
                    src={item.url}
                    width={300}
                  ></img>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={6} className="order-xs-1 order-md-2">
            <h1 className="tituloseccion2Mkt">{titulo}</h1>
            <p
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                color: "#000",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{ color: "#000", fontSize: "20px", textAlign: "justify" }}
            >
              {descripcion2}
            </p>
            <a
              href=""
              style={{
                color: "#fffe00",
                fontSize: "25px",
                fontWeight: "700",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <p>
                Conversemos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  style={{ marginTop: "5px", paddingLeft: "10px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default seccionMkt2;
