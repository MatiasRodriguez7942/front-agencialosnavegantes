import React from "react";
import Header from "../componentes /header";
import SectionBanner from "../componentes /componentes_analitica/section_banner";
import SectionAnalitica2 from "../componentes /componentes_analitica/sectionAnalitica2";
import SectionAnalitica3 from "../componentes /componentes_analitica/sectionAnalitica3";
import Slider from "../componentes /componentes_home/slider";
import Footer from "../componentes /footer";
import "../componentes /global-styles/layout";
import SectionContacto from "../componentes /SectionContacto";
import SectionInstagram from "../componentes /SectionInstagram";

const analiticayperformance = () => {
  const colorFondo= "#FFFD02"
  return (
    <div>
      <Header colorFondo={colorFondo} ></Header>
      <SectionBanner />
      <SectionAnalitica2 />
      <SectionAnalitica3 />
      <Slider></Slider>
      <SectionContacto></SectionContacto>
      <SectionInstagram></SectionInstagram>
      <Footer />
    </div>
  );
};

export default analiticayperformance;
