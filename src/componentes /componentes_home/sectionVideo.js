import React from "react";
import UseHome from "../../hooks/useHome";
import { Modal, Nav, Container, Row, Col, Button } from "react-bootstrap";
function SectionVideo() {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion7;
  const [show, setShow] = React.useState(false);


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
  
    </div>
  );
}

export default SectionVideo;
