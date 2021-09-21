import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "../componentes /global-styles/layout";
import { Nav, Container, Row, Col } from "react-bootstrap";
import Modal from "./ModalHeader"
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
};
class header extends Component {
  render() {
    return (
      <div style={colorNavBar}>
        <Container className="contenedor-body">
          <Row className="row align-items-center">
            <Col sm={8} xs={8}>
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
              </Nav>
            </Col>
            <Col sm={4} xs={4}>
              <Modal></Modal>
             
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default header;
