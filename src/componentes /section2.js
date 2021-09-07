import React from "react";
import UsePosts from "../hooks/usePosts";
import { Container, Row, Col } from "react-bootstrap";

const section2 = (props) => {
  const response = UsePosts();
  //   const section = response.allStrapiHome.nodes[0].Section[0].imagenes[0].name;
  const section = response.allStrapiHome.nodes[0].Section[0].imagenes;

  console.log(section);
  const texto = {
    fontSize: "50px",
    color: "#212529",
    fontWeight: "700",
  };
  const textoContenido = {
    fontSize: "20px",
    color: "#212529",
  };
  const centrarImagenes = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <h2 className="text-center" style={texto}>
        {props.nombre}
      </h2>
      <p className="text-center" style={textoContenido}>
        {props.textoContenido}
      </p>
      <div style={centrarImagenes}>
        <Row>
          {section.map((item, i) => (
            <Col  xs={6} md={2}  sm={6} key={i}>
            <img key={i} className="img-fluid" src={item.url} width={170}></img>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default section2;
