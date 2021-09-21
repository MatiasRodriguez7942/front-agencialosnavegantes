import React from "react";
import { Modal, Nav, Container, Row, Col } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
function ModalHeader() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark nh">
          <button
            onClick={() => setShow(true)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              style={{ width: "25%" }}
              src="https://agencialosnavegantes.s3.amazonaws.com/menu_hamburguesa_880ab0ce56.png"
              className="imagen-menu"
            ></img>
          </button>
        </nav>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <Nav.Item style={{ marginTop: "10%" }} id="myDIV">
            <Link
              className="navbar-brand item-menu"
              to="/"
              style={{ fontSize: "32px" }}
            >
              Inicio
            </Link>
          </Nav.Item>
          <Nav.Item className="navbar-brand">
            <Link
              className="navbar-brand item-menu"
              to="/tripulacion"
              style={{ fontSize: "32px" }}
            >
              Tripulación
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="navbar-brand item-menu"
              to="https://ecommerce.agencialosnavegantes.cl/"
              style={{ fontSize: "32px" }}
            >
              Desarrollo web
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="navbar-brand item-menu"
              to="/marketingdigital"
              style={{ fontSize: "32px" }}
            >
              Marketing Digital
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="navbar-brand item-menu"
              to="/analiticayperformance"
              style={{ fontSize: "32px" }}
            >
              Anlítica y Performance
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="navbar-brand item-menu"
              to="/blog"
              style={{ fontSize: "32px" }}
            >
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="navbar-brand item-menu"
              to="/contacto"
              style={{ fontSize: "32px" }}
            >
              Contacto
            </Link>
          </Nav.Item>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalHeader;
