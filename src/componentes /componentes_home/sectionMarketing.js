import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";

const sectionMarketing = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion3[0];
  const descripcion = data.descripcion;
  const imagen_iconos = data.imagen_iconos;
  const Titulo = data.titulo;

  return (
    <div style={{ backgroundColor: "#2B1E77", padding: "50px 0" }}>
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
            <h2
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "60px",
              }}
            >
              {Titulo}
            </h2>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "17px",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <a
              href=""
              style={{
                color: "#fffe00",
                fontSize: "25px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Descubre más aquí <i class="bi bi-arrow-right"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionMarketing;
