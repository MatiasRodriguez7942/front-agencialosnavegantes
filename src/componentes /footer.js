import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
const footer = () => {
  const imagen = {
    width: "70%",
  };
  const linea = {
    backgroundColor: "#0100fe",
    height: "5px",
    width: "75%",
  };
  const texto = {
    fontSize: "22px",
    color: "#212529",
    fontWeight: "300",
  };
  const estiloImagen = {
    width: "60%",
  };
  const redesSociales = {
    width: "40px",
  };
  const redesSocialesCol = {
    width: "50px",
  };
  const contenedorRedesSociales = {
    paddingTop: "20px",
  };
  return (
    <div>
      <hr style={{backgroundColor: "#f1ecec",}}></hr>
      <Container className="contenedor-footer">
      <Row className="justify-content-center mt-3" >
        <Col sm={3} className="text-center">
          <img
            style={imagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/logo_Azul_23887951fd.png?4444473"
            className="img-fluid"
            alt=""
          ></img>

          <Row
            className="justify-content-center"
            style={contenedorRedesSociales}
          >
            <Col sm={4} className="text-center" style={redesSocialesCol}>
              <img
                style={redesSociales}
                src="https://agencialosnavegantes.s3.amazonaws.com/facebook_c47cf2f2bc.png?11046526.7"
                alt=""
              ></img>
            </Col>
            <Col sm={4} className="text-center" style={redesSocialesCol}>
              <img
                style={redesSociales}
                src="https://agencialosnavegantes.s3.amazonaws.com/instagram_46c6c0c98d.png?11046530.3"
                alt=""
              ></img>
            </Col>
            <Col sm={4} className="text-center" style={redesSocialesCol}>
              <img
                style={redesSociales}
                src="https://agencialosnavegantes.s3.amazonaws.com/linkedin_a34c4fbd61.png?11046525.400000002"
                alt=""
              ></img>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <h2 style={texto}>Menú</h2>

          <hr style={linea}></hr>
          <ul>
            <li>
              <Link className="navbar-brand" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/tripulacion">
                Tripulación
              </Link>
            </li>
            <li>
              <a
                className="navbar-brand"
                href="https://ecommerce.agencialosnavegantes.cl/"
              >
                Desarrollo web
              </a>
            </li>
            <li>
              <Link className="navbar-brand" to="/marketingdigital">
                Marketing Digital
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/analiticayperformance">
                Anlítica y Performance
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm={3}>
          <h2 style={texto}>Pertenecemos a</h2>
          <hr style={linea}></hr>
          <img
            style={estiloImagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/imagne1_96e78100b1.jpeg?10404909.600000001"
            alt=""
          ></img>
          <img
            style={estiloImagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/imagen2_3dab2ec423.png?10404914.900000002"
            alt=""
          ></img>
          <img
            style={estiloImagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/imagen3_aa4a1cb089.png?10404912.7"
            alt=""
          ></img>
          <img
            style={estiloImagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/imagen4_1fcd0072e9.png?10404911.8"
            alt=""
          ></img>
          <img
            style={estiloImagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/imagen5_1c7e9f0681.png?10404908.100000001"
            alt=""
          ></img>
          <img
            style={estiloImagen}
            src="https://agencialosnavegantes.s3.amazonaws.com/imagen6_b74ca4d482.jpeg?10404910.5"
            alt=""
          ></img>
        </Col>
        <Col sm={3}>
          <h2 style={texto}>Nuestras Empresas</h2>

          <hr style={linea}></hr>
          <ul>
            <li>
              <a  className="navbar-brand" href="https://www.fbadschile.cl/">
                FB Ads Chile
              </a>
            </li>
            <li>
              <a
                className="navbar-brand"
                href="https://www.academiametrics.com/"
              >
                Academia Metrics
              </a>
            </li>
            <li>
              <a
                className="navbar-brand"
                href="https://www.matiasvillanueva.com/"
              >
                Matías Villanueva
              </a>
            </li>
            <li>
              <a
                className="navbar-brand"
                href="https://www.autodidactasdigitales.com/"
              >
                Autodidactas Digitales
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default footer;
