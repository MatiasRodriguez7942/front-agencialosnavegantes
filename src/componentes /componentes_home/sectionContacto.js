import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
const sectionContacto = () => {
  return (
    <div style={{ background: "#FA5983" }}>
      <Container style={{padding: "60px 0 50px",}}>
        <Row>
          <Col sm={6}>
            <h1 style={{fontSize:"60px",color:"#fff",fontWeight:"700"}}>Si necesitas <br></br>contactarnos <br></br>dejanos un<br></br> mensaje.</h1>
            <br></br>
            <h3 style={{color:"#fffe00",fontSize:"27px",lineHeight:"1.1em", fontWeight:"700",}}>Te responderemos dentro de 72 horas<br></br> hábiles</h3>
          </Col>
          <Col sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionContacto;
