import React from "react";
import UseInstagram from "../hooks/useInstagram";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../componentes /global-styles/layout";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);
function SectionInstagram() {
  const response = UseInstagram();
  const data = response.allStrapiInstagramContenidos.nodes;
  return (
    <div>
      <div style={{ textAlign: "center", paddingTop: "25px" }}>
        <h2>Síguenos en Instagram</h2>
        <p>Donde encontraras datos y tips del mundo digital</p>
      </div>

      <Swiper
        slidesPerView={6}
        spaceBetween={1}
        navigation={true}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <a href={item.link1} key={i}>
              <img key={i} className="img-fluid" src={item.imagen.url}></img>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ textAlign: "center", paddingTop: "25px" }}>
        <Link to="https://www.instagram.com/agencialosnavegantes/">
          Visita nuestro Instagram
        </Link>
      </div>
    </div>
  );
}

export default SectionInstagram;
