import React from "react";
import UsePosts from "../../hooks/usePosts";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
const sectionNosotros = () => {
  return (
    <div style={{ background: "#FA5983" }}>
      <Container style={{ padding: "40px" }}>
        <Row style={{ alignItems: "center" }}>
          <Col sm={6}>
            <h2>{sectionNombre1}</h2>
            <br></br>
            <h2>{sectionNombre2}</h2>
            <br></br>
            <p>{sectionDescripcion1}</p>
            <br></br>
            <p>{sectionDescripcion2}</p>
            <br></br>
            <p>{sectionDescripcion3}</p>
            <Link className="navbar-brand" to="/tripulacion">
              Conoce la Tripulación
            </Link>
          </Col>
          <Col sm={6}>
            <img src={Imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionNosotros;
