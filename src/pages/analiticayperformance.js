import React from "react";
import Header from "../componentes /header";
import SectionBanner from "../componentes /componentes_analitica/section_banner";
import SectionAnalitica2 from "../componentes /componentes_analitica/sectionAnalitica2";
import SectionAnalitica3 from "../componentes /componentes_analitica/sectionAnalitica3";
import Slider from "../componentes /componentes_home/slider";
import Footer from "../componentes /footer";
import "../componentes /global-styles/layout";

const analiticayperformance = () => {
  return (
    <div>
      <Header></Header>
      <SectionBanner />
      <SectionAnalitica2 />
      <SectionAnalitica3 />
      <Slider></Slider>
      <Footer />
    </div>
  );
};

export default analiticayperformance;
