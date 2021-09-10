import React from "react";
import Header from "../componentes /header";
import Footer from "../componentes /footer";
import Section_banner from "../componentes /componentes_mkt/section_banner";
import Slider_mkt from "../componentes /componentes_mkt/slider_mkt";

function marketingdigital() {
  return (
    <div>
      <Header></Header>
      <Section_banner></Section_banner>
      <Slider_mkt></Slider_mkt>
      <Footer />
    </div>
  );
}

export default marketingdigital;
