import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionSaberMas = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion11[0];

  return (
    <div style={{ backgroundColor: "#fff", padding: "50px 0" ,textAlign:"center"}}>
      <img  alt="" src={data.imagen_titulo[0].url} style={{paddingBottom:"40px",paddingTop:"40px",}} className="img-fluid" ></img>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center",paddingLeft:"80px",paddingRight:"80px", }}
        >
          <Col sm={3}><a href="https://www.fbadschile.cl/"><img src={data.img_nosotros[0].url}  alt="" className="img-fluid"></img></a></Col>
          <Col sm={3}><a href="https://www.matiasvillanueva.com/"><img src={data.img_nosotros[1].url} alt="" className="img-fluid"></img></a></Col>
          <Col sm={3}><a href="https://www.academiametrics.com/"><img src={data.img_nosotros[2].url}  alt=""className="img-fluid"></img></a></Col>
          <Col sm={3}><a href="https://www.autodidactasdigitales.com/"><img src={data.img_nosotros[3].url} alt="" className="img-fluid"></img></a></Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionSaberMas;
