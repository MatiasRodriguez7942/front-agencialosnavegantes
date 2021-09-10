import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UsePosts from "../../hooks/usePosts";
import { Link } from "gatsby";

const sectionSumate = () => {
  const response = UsePosts();
  const sectionNombre1 = response.allStrapiHome.nodes[0].Section[8].Titulo1;
  const sectionNombre2 = response.allStrapiHome.nodes[0].Section[8].Titulo2;
  const sectionDescripcion1 =
    response.allStrapiHome.nodes[0].Section[8].descripcion1;
  //   const sectionDescripcion2 =
  //     response.allStrapiHome.nodes[0].Section[8].Descripcion2;
  //   const sectionDescripcion3 =
  //     response.allStrapiHome.nodes[0].Section[8].Descripcion3;

  const Imagen = response.allStrapiHome.nodes[0].Section[8].Imagen.url;
  return (
    <div>
      <div style={{ background: "#290877" }}>
        <Container>
          <Row>
            <Col sm={6}>
              <img src={Imagen}></img>
            </Col>
            <Col sm={6}>
              <h2>{sectionNombre1}</h2>
              <br></br>
              <h2>{sectionNombre2}</h2>
              <br></br>
              <p>{sectionDescripcion1}</p>
              <br></br>

              <Link className="navbar-brand" to="/tripulacion">
                Comunicate con Nosotros
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <img src="https://agencialosnavegantes.s3.amazonaws.com/olas_Sumate_df0e645611.png"></img>
      </div>
    </div>
  );
};

export default sectionSumate;
