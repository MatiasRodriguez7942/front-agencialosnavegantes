import React from "react";
import UsePosts from "../hooks/usePosts";
import { Container, Row, Col } from "react-bootstrap";

const section2 = (props) => {
  const response = UsePosts();
  const Nombresection2 =
    response.allStrapiHome.nodes[0].Section[1].Titulo_seccion;
  const section = response.allStrapiHome.nodes[0].Section[0].imagenes;
  const Section2 = response.allStrapiHome.nodes[0].Section[1].imagenes;

  const texto = {
    fontSize: "50px",
    color: "#212529",
    fontWeight: "700",
    padding: "20px",
  };
  const textoContenido = {
    fontSize: "20px",
    color: "#212529",
  };
  const centrarImagenes = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Row>
        <Col xs={4} md={2} sm={4}></Col>
        <Col xs={4} md={8} sm={4}>
          <h2 className="text-center" style={texto}>
            {props.nombre}
          </h2>
        </Col>
        <Col xs={4} md={2} sm={4} >
          <img src="https://agencialosnavegantes.s3.amazonaws.com/circulos_6834ac04e9.png?37499.5" style={{width:"50%",}}></img>
        </Col>
      </Row>

      <p className="text-center" style={textoContenido}>
        {props.textoContenido}
      </p>
      <div style={centrarImagenes}>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          {section.map((item, i) => (
            <Col xs={6} md={2} sm={6} key={i}>
              <img
                key={i}
                className="img-fluid"
                src={item.url}
                width={170}
              ></img>
            </Col>
          ))}
        </Row>
      </div>
      <h2 className="text-center" style={texto}>
        {Nombresection2}
      </h2>
      <div style={centrarImagenes}>
        <Row className="row-imagenes">
          {Section2.map((item, i) => (
            <Col xs={6} md={2} sm={6} key={i}>
              <img
                key={i}
                className="img-fluid"
                src={item.url}
                width={170}
              ></img>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default section2;
