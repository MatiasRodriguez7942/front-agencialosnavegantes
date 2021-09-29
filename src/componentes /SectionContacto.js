import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function SectionContacto() {
  return (
    <div>
      <div style={{ background: "#FA5983" }}>
        <Container
          style={{ padding: "60px 0 50px" }}
          className="contenedor-body"
        >
          <Row>
            <Col sm={6}>
              <h1
                style={{ fontSize: "60px", color: "#fff", fontWeight: "700" }}
              >
                Si necesitas <br></br>contactarnos <br></br>dejanos un<br></br>{" "}
                mensaje.
              </h1>
              <br></br>
              <h3
                style={{
                  color: "#fffe00",
                  fontSize: "27px",
                  lineHeight: "1.1em",
                  fontWeight: "700",
                }}
              >
                Te responderemos dentro de 72 horas<br></br> hábiles
              </h3>
            </Col>
            <Col sm={6}>
              <Form name="contacto"
               method="post"
               data-netlify="true"
               data-netlify-honeypot="bot-field"
              >
                <Form.Group className="mb-3">
                  <Form.Control name="nombre" type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control  name="apellido" type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="empresa" type="text" placeholder="Empresa" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                  name="telefono"
                    type="number"
                    placeholder="Número de celular. Ej: +56922222222"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                  name="email"
                    type="email"
                    placeholder="Correo electrónico. Ej: example@empresa.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Text style={{ fontSize: "20px", color: "#FFF" }}>
                    Servicio a Cotizar
                  </Form.Text>
                  <Form.Control  name="select" as="select" aria-label="Default select example">
                    <option value="1">Desarrollo Web y Ecommerce</option>
                    <option value="2">Marketing Digital</option>
                    <option value="3">analitica y Performance</option>
                    <option value="4">Otros</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="mensajes" placeholder="Mensaje" as="textarea" rows={3} />
                </Form.Group>
                <Button
                  type="submit"
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    color: "rgb(255, 254, 0)",
                  }}
                >
                  Enviar Mensaje{" "}
                  <i
                    className="bi bi-arrow-right"
                    style={{ marginTop: "5px", paddingLeft: "10px" }}
                  ></i>
                </Button> 
              </Form>
               
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SectionContacto;
