import React from "react";
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function seccionTri3() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion11;
  

  return (
    <div>
      <Container>
        <Col>
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            {data.map((item, i) => (
              <Col
                style={{ marginBottom: "20px" }}
                className="div-imagen"
                lg={3}
                key={i}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  key={i}
                  className="desvanecer"
                  src={item.imagen.url}
                  width={300}
                  alt=""
                ></img>
                <Container
                  style={{ marginTop: "100px" }}
                  className="contain"
                  style={{ height: "100%", width: "91%" }}
                >
                  <p style={{ marginTop: "100px" }} className="nombreEquipo">
                    {item.nombre}
                  </p>
                  <p className="descripcionEquipo">{item.ocupacion}</p>
                  <h1 style={{ letterSpacing: "10px" }}>
                    <Link className="links" to={item.link_insta}>
                      <i id="iconos" className="bi bi-instagram"></i>
                    </Link>
                    <Link to={item.linkenid}>
                      <i id="iconos" className="bi bi-linkedin"></i>
                    </Link>
                  </h1>
                  <p
                    className="descripcionEquipo"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    {item.descripcion}
                  </p>
                </Container>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default seccionTri3;
