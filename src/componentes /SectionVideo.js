import React from "react";
import { Modal, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UseHome from "../../src/hooks/useHome";
export const SectionVideo = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion7[0];
  return (
    <div>
      <div
        className="modal-video"
        style={{
          textAlign: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat ",
          backgroundPosition: "center",
          height: "400px",
          backgroundImage: `url(https://agencia-navegantes.s3.amazonaws.com/imgvideo2_1_f7cace4ae8.jpg)`,
        }}
      >
        <Button
          variant="primary"
          style={{
            marginTop: "6%",
            background: "transparent",
            border: "none",
          }}
          onClick={handleShow}
        >
          <i
            className="bi bi-play-circle"
            style={{ color: "#FFFD03", fontSize: "100px" }}
          ></i>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <video style={{ width: "80%" }} controls>
            <source
              src="https://agencia-navegantes.s3.amazonaws.com/Agencia_Los_Navegantes_2021_1_45a466e8e5.mp4"
              type="video/mp4"
            ></source>
          </video>

          <Button
            style={{
              background: "transparent",
              border: "none",
              fontSize: "50px",
              marginTop: "-90%",
            }}
            onClick={handleClose}
          >
            <i className="bi bi-x"></i>
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SectionVideo;
