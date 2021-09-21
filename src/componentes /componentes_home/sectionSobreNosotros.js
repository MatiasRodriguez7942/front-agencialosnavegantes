import React from "react";
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSobreNosotros() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion9[0];

    return (
        <div style={{background:"#ED5582" ,padding: "40px 0px" }}>
            <Container className="contenedor-body">
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Col sm={6}><h1 style={{color:"#fff",}}>{data.titulo}</h1><br></br><h2 style={{color:"#fffe00",}}>{data.titulo2}</h2><p>{data.descripcion}</p><p>{data.descripcion1}</p><p>{data.descripcion2}</p><p>{data.descripcion3}</p></Col>
                    <Col sm={6} style={{textAlign:"center"}}><img src={data.imagen[0].url} className="img-fluid"></img></Col>
                </Row>
            </Container>
        </div>
    )
}

export default sectionSobreNosotros
