import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./global-styles/layout";
const estiloImagen = {
  textAlign: "center",
};

const titulo = {
  fontFamily: "Brandon, Brandon",
  fontSize: "75px",
  lineHeight: "1.1em",
  fontWeight: "700",
};
const section = (props) => {
  return (
    <div style={{ backgroundColor: props.color }}>
      <Container className="contenedor-body">
        <Row className="justify-content-center">
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
              {props.contenido}
            </p>
            <h2 style={{ color: props.color_texto ,fontSize: "30px",}}>{props.textoSubtitulo}</h2>
            <a href="#agencia" style={{ color: props.color_texto ,fontSize:"25px",fontWeight: "700",}}>
              {props.textoBtn}
            </a>
          </Col>
          <Col sm={6} style={estiloImagen}>
            <img className="img-fluid" src={props.imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default section;
