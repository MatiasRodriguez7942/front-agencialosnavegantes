import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);

const slider = () => {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion6;

  return (
    <div style={{ padding: "50px", background: "#F9F9FA" }}>
      <img src="https://agencia-navegantes.s3.amazonaws.com/foto400_67c2893bc8.PNG?106058.69999998808"></img>
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col sm={4}>
            <img
              className="img-fluid"
              src="https://agencia-navegantes.s3.amazonaws.com/small_descripcion_nosotros_ae0038fb12.PNG?139659.19999998808"
            ></img>
          </Col>
          <Col sm={6}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              className="mySwiper"
            >
              {Datos.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href={item.link1} key={i}>
                    <img
                      key={i}
                      className="img-fluid"
                      style={{ width: "100%" }}
                      src={item.imagen1[0].url}
                    ></img>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        <div style={{ textAlign: "center", paddingTop: "25px" }}>
          <h2>¿Quieres conocer nuestros casos de éxito?</h2>
          <Link to="/contacto">Solicita portafolio aquí</Link>
        </div>
      </Container>
    </div>
  );
};

export default slider;
