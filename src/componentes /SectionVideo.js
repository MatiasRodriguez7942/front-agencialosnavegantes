import React from "react";
import { Link } from "gatsby";
import { Modal, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{paddingTop:"50px",paddingBottom:"50px",background:props.colorFondo}}>
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
      <div style={{ textAlign: "center", paddingTop: "25px" }}>
          <h2>¿Quieres saber más sobre nuestra Agencia?</h2>
          <Link to="https://www.youtube.com/channel/UCjpbMe-8c2GWVB8JcZ1D-cQ"  style={{
                color: "#FA5983",
                fontSize: "25px",
                fontWeight: "500",
                textDecoration: "none",
              }}>
            Visita nuestro Canal
            <i
              className="bi bi-arrow-right"
              style={{ marginTop: "5px", paddingLeft: "10px" }}
            ></i>
          </Link>
        </div>
    </div>
  );
};

export default SectionVideo;
