import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import UsePosts from "../../hooks/usePosts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const slider = () => {
  const response = UsePosts();
  const sectionNombre =
    response.allStrapiHome.nodes[0].Section[5].Titulo_seccion;
  const imagenes = response.allStrapiHome.nodes[0].Section[5].imagenes;
  const contenido = response.allStrapiHome.nodes[0].Section[5].Texto;
  
  return (
    <div>
      <div style={{ backgroundColor: "#F9F9FA", padding: "40px" }}>
        <Container className="contenedor-body">
          <Row className="alinearContenido" style={{ padding: "40px" }}>
            <Col sm={2}>
              <img
                style={{ width: "120px" }}
                src="https://agencialosnavegantes.s3.amazonaws.com/izquierda_b0669f59b3.png"
              ></img>
            </Col>
            <Col sm={8} className="text-center">
              <h2
                style={{
                  fontSize: "50px",
                  fontWeight: "700",
                  color: "#212529",
                }}
              >
                {sectionNombre}
              </h2>
            </Col>
            <Col sm={2}>
              <img
                style={{ width: "120px" }}
                src="https://agencialosnavegantes.s3.amazonaws.com/derecha_20a3847e26.png"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div>
                <Row style={{ alignItems: "center" }}>
                  <Col
                    sm={11}
                    style={{
                      backgroundColor: "#0100ff",
                      padding: "25px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                      }}
                    >
                      {contenido}
                    </p>
                    <div>
                      <a
                        href="#"
                        style={{
                          textAlign: "center",
                          color: "rgb(255, 254, 0)",
                          fontSize: "20px",
                        }}
                      >
                        <span>Conoce a algunos</span>{" "}
                        <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </Col>
                  <Col sm={1} style={{ padding: "0px" }}>
                    <img src="https://agencialosnavegantes.s3.amazonaws.com/flecha_3657353019.png"></img>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={8}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                className="mySwiper"
              >
                {imagenes.map((item, i) => (
                  <SwiperSlide>
                    <a href="">
                      <img
                        key={i}
                        className="img-fluid"
                        style={{ width: "95%" }}
                        src={item.url}
                      ></img>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
        <div style={{ paddingTop: "20px" }} className="text-center">
          <h2
            className="text-center"
            style={{ color: "#212529", fontSize: "30px" }}
          >
            ¿Quieres conocer nuestros casos de éxito?
          </h2>
          <a
            href="#"
            style={{
              textAlign: "center",
              color: "#280077",
              fontSize: "20px",
            }}
          >
            <span
              style={{
                textAlign: "center",
              }}
            >
              Solicita portafolio aquí
            </span>
            <i className="bi bi-arrow-right-short"></i>
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff" }}>
        <div style={{ padding: "20px" }} className="text-center">
          <img src="https://agencialosnavegantes.s3.amazonaws.com/imgvideo2_1_ae9da2db4e.jpeg"></img>
          <h2
            className="text-center"
            style={{ color: "#212529", fontSize: "30px" }}
          >
            ¿Quieres saber más sobre nuestra Agencia?
          </h2>
          <a
            href="#"
            style={{
              textAlign: "center",
              color: "#FF5A83",
              fontSize: "20px",
            }}
          >
            <span
              style={{
                textAlign: "center",
              }}
            >
              Visita nuestro Canal
            </span>
            <i className="bi bi-arrow-right-short"></i>
          </a>
        </div>
      </div>
      <div className="Olas">
        <img src="https://agencialosnavegantes.s3.amazonaws.com/ola_Bajo_d06300b19f.png"></img>
      </div>
    </div>
  );
};

export default slider;
