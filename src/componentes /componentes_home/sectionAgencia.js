import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionAgencia() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion2[0];
  const titulo = data.titulo;
  const ImagenSection = data.imagen_titulo[0].url;
  const ImgenesAds = data.imagen_ads;
  const ImagenPartners = data.imagen_partners;

  return (
    <div style={{ paddingBottom: "40px", paddingTop: "40px" }}>
      <div style={{ textAlign: "center" }}>
        <img className="img-fluid" src={ImagenSection}></img>
        <Container>
          <Row >
            {ImgenesAds.map((item, i) => (
              <Col sm={2}>
                <img
                  key={i}
                  className="img-fluid"
                  style={{ width: "95%" }}
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>

        </Container>

        <h1 style={{fontWeight:"700", fontSize:"50px"}}>{titulo}</h1>
        <Container>
          <Row style={{display:"flex", justifyContent:"center"}}>
          <Col sm={1}></Col>
            {ImagenPartners.map((item, i) => (
              <Col sm={2}>
                <img
                  key={i}
                  className="img-fluid"
                  style={{ width: "75%" }}
                  src={item.url}
                ></img>
              </Col>
            ))}
            <Col sm={1}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default sectionAgencia;
