import React from 'react'
import UsePosts from "../../hooks/usePosts";
import { Container, Row, Col } from "react-bootstrap";
const sectionAnaliticaPerformance = (props) => {
    const response = UsePosts();
    const sectionNombre =
      response.allStrapiHome.nodes[0].Section[3].Titulo_seccion;
    const contenido = response.allStrapiHome.nodes[0].Section[3].Texto;
    const subtitulo = response.allStrapiHome.nodes[0].Section[3].subtitulo;
    const imagenes = response.allStrapiHome.nodes[0].Section[3].imagenes;
    return (
        <div style={{ backgroundColor: props.color_fondo, padding: "50px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
             <Col sm={6}>
            <h2
              className="titulo_h2"
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#280077",
              }}
            >
              {sectionNombre}
            </h2>
            <p
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {subtitulo}
            </p>
            <p
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {contenido}
            </p>
            <a
              href=""
              style={{ color: "#280077", fontSize: "25px", fontWeight: "700" }}
            >
              Descubre más aquí
            </a>
          </Col>
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
        </Row>
      </Container>
      </div>
    )
}

export default sectionAnaliticaPerformance
