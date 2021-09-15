import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
const sectionBannerHome = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccionBanner[0];
  const Titulo = data.Titulo;
  const Imagen = data.imagen1[0].url;
  const conocenos_link = data.conocenos_link;
  const descripcion = data.desccription;
  const texto_pregunta = data.texto_pregunta;
  let Lista = [
    <li key="id1">
      <img
        key="id1"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Impulsamos tus ventas en menos de 30 días.
    </li>,
    <li key="id2">
      <img
        key="id2"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Maximizamos tu facturación en menos de 90 días.
    </li>,
    <li key="id3">
      <img
        key="id3"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Escalamos tus resultados en el plazo de 180 días.
    </li>,
    <li key="id4">
      <img
        key="id4"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Convertimos el 2021 en tu mejor año.
    </li>,
  ];
  return (
    <div style={{ backgroundColor: "blue", paddingBottom: "40px" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          id="columnas"
          style={{ alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <h1 style={{ color: "#fff", fontSize: "60px" }}>
              Navegantes de <br></br> Medios Digitales
            </h1>
            <br></br>
            <ul
              style={{
                fontSize: "21px",
                listStyle: "none",
              }}
            >
              {Lista}
            </ul>
            <p>{descripcion}</p>
            <h3>{texto_pregunta}</h3>
            <i className="bi bi-chevron-down"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <Link
              to="#agencia"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {" "}
              {conocenos_link}
            </Link>
          </Col>
          <Col sm={6} style={{ color: "#fff", textAlign: "center" }}>
            <img className="img-fluid" src={Imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionBannerHome;
