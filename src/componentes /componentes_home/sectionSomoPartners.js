import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSomoPartners() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion8[0]
  return (
    <div style={{ background: "#031FFF", paddingBottom: "40px" }}>
      <Container className="contenedor-body">
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col sm={6}>
            <h1 style={{fontSize:"60px",fontWeight:"700",color:"#fff"}} className="encabezado">{data.titulo}</h1>
            <br></br>
            <p style={{ textAlign: "justify" ,color:"#fff",}}>{data.descripcion1}</p>
            <p style={{ textAlign: "justify" ,color:"#fff",}}>{data.descripcion2}</p>

          </Col>
          <Col sm={6} style={{ textAlign: "center" }}>
            <img
              style={{ width: "70%", textAlign: "center" }}
              className="img-fluid"
              src={data.imagen[0].url}
            ></img>
            <br></br>
            <Link to="https://www.google.com/partners/agency?id=4329839845" style={{color:"#fff",fontSize:"20px"}}>Ver Insignia >></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionSomoPartners;
