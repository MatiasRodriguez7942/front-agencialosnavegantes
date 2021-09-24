import React from "react";
import UseHome from "../../hooks/useHome";
import { Modal, Nav, Container, Row, Col, Button } from "react-bootstrap";

function SectionVideo() {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion7;

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: "40px",
        paddingTop: "40px",
      }}
    >
      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
         <Container>
         <Row>
            <Col sm={2}></Col>
            <Col sm={8}> <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gB3F83WhmzY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe></Col>
            <Col sm={2}> <Button onClick={handleClose}> CERRAR</Button></Col>


          </Row>
         </Container>
         
         
        </Modal.Body>
     
      </Modal>
      <div
        style={{
          backgroundImage: `url("https://agencia-navegantes.s3.amazonaws.com/imgvideo2_1_f7cace4ae8.jpg")`,
          backgroundRepeat: "no-repeat",
          height: "500px",
          backgroundPosition: "center",
        }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
    </div>
  );
}

export default SectionVideo;
