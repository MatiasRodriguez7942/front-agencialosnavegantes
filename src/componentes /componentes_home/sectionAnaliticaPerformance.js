import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionAnaliticaPerformance = (props) => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0];
  console.log(data)
    return (
        <div style={{ backgroundColor: "#FFFD02", padding: "50px 0" }}>
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
            </h2>
            <p
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
            </p>
            <p
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
            </p>
            <a
              href=""
              style={{ color: "#280077", fontSize: "25px", fontWeight: "700" }}
            >
              Descubre más aquí
            </a>
          </Col>
          <Col sm={6}>
            {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
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
            </Row> */}
          </Col>
        </Row>
      </Container>
      </div>
    )
}

export default sectionAnaliticaPerformance
