import React from "react";
import Header from "../componentes /header";
import Footer from "../componentes /footer";
import Section_banner from "../componentes /componentes_mkt/section_banner";
import Seccion_mkt3 from "../componentes /componentes_mkt/seccion_mkt3";
import SeccionMkt2 from "../componentes /componentes_mkt/seccion_mkt2";
import Slider from "../componentes /componentes_home/slider";
import SectionContacto from "../componentes /SectionContacto";
import "../componentes /global-styles/layout";

function marketingdigital() {
  return (
    <div>
      <Header></Header>
      <Section_banner></Section_banner>
      <SeccionMkt2></SeccionMkt2>
      <Seccion_mkt3></Seccion_mkt3>
      <Slider></Slider>
      <SectionContacto></SectionContacto>
      <Footer />
    </div>
  );
}

export default marketingdigital;
