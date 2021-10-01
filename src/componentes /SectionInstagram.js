import React from "react";
import UseInstagram from "../hooks/useInstagram";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../componentes /global-styles/layout";
import SwiperCore, { Navigation } from "swiper";

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
        
        navigation={true}
        className="mySwiperInstagram"
        breakpoints={{
          "360": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "400": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 6,
          }
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <a href={item.link1} key={i}>
              <img  alt="" key={i} className="img-fluid" src={item.imagen.url}></img>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ textAlign: "center", paddingTop: "25px" }}>
        <a href="https://www.instagram.com/agencialosnavegantes/">
          Visita nuestro Instagram
        </a>
      </div>
    </div>
  );
}

export default SectionInstagram;
