import React from "react";
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionSumate = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion10[0];
  return (
    <div style={{ backgroundColor: "#290877", padding: "50px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6}>
            <img src={data.sirena[0].url} className="img-fluid"></img>
          </Col>
          <Col sm={6}>
            <h1
              style={{
                color: "#ff5983",
                fontSize: "60px",
                lineHeight: "1.1em",
              }}
            >
              {data.titulo}
            </h1>
            <br></br>
            <h1
              style={{
                color: "#fffe00",
                fontSize: "41px",
                lineHeight: "1.1em",
              }}
            >
              {data.titulo2}
            </h1>
            <br></br>
            <p style={{color:"#fff",}}>{data.descripcion}</p>
            <Link to="/contacto">Comunicate con Nosotros</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionSumate;
