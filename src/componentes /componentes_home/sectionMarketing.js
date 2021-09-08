import React from "react";
import UsePosts from "../../hooks/usePosts";
import { Container, Row, Col } from "react-bootstrap";
const sectionMarketing = (props) => {
  const response = UsePosts();
  const sectionNombre =
    response.allStrapiHome.nodes[0].Section[2].Titulo_seccion;
  const contenido = response.allStrapiHome.nodes[0].Section[2].Texto;
  const subtitulo = response.allStrapiHome.nodes[0].Section[2].subtitulo;
  const imagenes = response.allStrapiHome.nodes[0].Section[2].imagenes;

  return (
    <div style={{ backgroundColor: props.color_fondo, padding: "50px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6}>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagenes.map((item, i) => (
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
          <Col sm={6}>
            <h2
              className="titulo_h2"
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#ED5682",
              }}
            >
              {sectionNombre}
            </h2>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {subtitulo}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {contenido}
            </p>
            <a
              href=""
              style={{ color: "#fffe00", fontSize: "25px", fontWeight: "700" }}
            >
              Descubre más aquí
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionMarketing;
