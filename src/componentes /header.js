import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

import { Nav, Container, Row, Col } from "react-bootstrap";
<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap');
</style>
//estilo
const colorNavBar = {
  backgroundColor: "#031fff",
  color: "#fff",
};
const imagen = {
  width: "70%",
};
const centarNavBar = {
  justifyContent: "center",
}
class header extends Component {
  render() {
    return (
      <div style={colorNavBar}>
        <Container className="contenedor-body">
          <Row className="row align-items-center">
            <Col sm={8}>
              {" "}
              <Nav
                className="navbar navbar-expand-lg navbar-light"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item className="navbar navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img
                      style={imagen}
                      src="https://agencialosnavegantes.s3.amazonaws.com/sector1_1_d2f01aa733.png?277251.90000000224"
                      className="img-fluid"
                    ></img>
                  </Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Link className="navbar-brand" to="/">
                    Inicio
                  </Link>
                </Nav.Item>
                <Nav.Item className="navbar-brand">
                  <Link className="navbar-brand" to="/tripulacion">
                    Tripulación
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="navbar-brand" to="https://ecommerce.agencialosnavegantes.cl/">
                    Desarrollo web
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="navbar-brand" to="/marketingdigital">
                    Marketing Digital
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="navbar-brand" to="/analiticayperformance">
                    Anlítica y Performance
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="navbar-brand" to="/blog">
                    Blog
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="navbar-brand" to="/contacto">
                    Contacto
                  </Link>
                </Nav.Item> */}
              </Nav>
            </Col>
            <Col sm={4}>
              <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                  <div className="bg-dark p-4">
                    <h4 className="text-white">Collapsed content</h4>
                    <span className="text-muted">
                      Toggleable via the navbar brand.
                    </span>
                  </div>
                </div>
                <nav className="navbar navbar-dark nh" style={centarNavBar}>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default header;
