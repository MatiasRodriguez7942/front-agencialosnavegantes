import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./global-styles/layout";
const estiloImagen = {
  textAlign: "center",
};

const titulo2 = {
  fontFamily: "Brandon, Brandon",
  fontSize: "75px",
  lineHeight: "1.1em",
  fontWeight: "700",
};
const section = (props) => {
  return (
    <div style={{ backgroundColor: props.color, paddingBottom: "40px" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          id="columnas"
          style={{ alignItems: "center" }}
        >
          <Col sm={6}>
            <h2
              className="titulo"
              style={{
                color: props.color_texto,
                fontSize: "7Opx",
                lineHeight: "1.1em",
                fontWeight: "700",
              }}
            >
              {props.nombre}
            </h2>
            <h2
              className="titulo2"
              style={{
                color: props.color_texto,
                fontSize: "6Opx",
                lineHeight: "1.1em",
                fontWeight: "700",
              }}
            >
              {props.nombreSection}
            </h2>
            <ul
              style={{
                color: props.color_texto,
                fontSize: "21px",
              }}
            >
              {props.lista}
            </ul>
            <p
              style={{
                color: props.color_texto,
                fontSize: "20px",
              }}
            >
              {props.contenido1}
              <br></br>
              <br></br>
              {props.contenido2}
              {props.contenido}
            </p>
            
            <h2 style={{ color: props.color_texto, fontSize: "30px" }}>
              {props.textoSubtitulo}
            </h2>
            <a
              href="#agencia"
              style={{
                color: props.color_texto,
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              {props.iconos}
              {props.textoBtn}
            </a>
          </Col>
          <Col sm={6} style={estiloImagen}>
            <img className="img-fluid" src={props.imagen}></img>
            <br></br>
            <a href="https://www.google.com/partners/agency?id=4329839845">{props.textoBoton}</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default section;
