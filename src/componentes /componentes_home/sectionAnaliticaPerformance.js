import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionAnaliticaPerformance = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion4[0];
  const descripcion = data.descripcion;
  const titulo = data.titulo;
  const imaganes_iconos = data.imagen_iconos;

  return (
    <div style={{ backgroundColor: "#FFFD02", padding: "50px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6}>
            <h2
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#280077",
                fontSize: "60px",
              }}
            >
              {titulo}
            </h2>
            <p
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "17px",
              }}
            >
              {descripcion}
            </p>

            <a
              href=""
              style={{ color: "#280077", fontSize: "25px", fontWeight: "700",textDecoration:"none" }}
            >
              Descubre más aquí <i className="bi bi-arrow-right"  style={{ marginTop: "5px", paddingLeft: "10px" }}></i>
             
            </a>
          </Col>
          <Col sm={6}>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imaganes_iconos.map((item, i) => (
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
        </Row>
      </Container>
    </div>
  );
};

export default sectionAnaliticaPerformance;
