import React from "react";
import Header from "../componentes /header";
import Footer from "../componentes /footer";
import SectionBannerHome from "../componentes /componentes_home/sectionBannerHome";
import SectionAgencia from "../componentes /componentes_home/sectionAgencia";
// import Contacto from "../componentes /componentes_home/sectionContacto";
import Sectionolas from "../componentes /sectionolas";
import SectionMarketing from "../componentes /componentes_home/sectionMarketing";
import SectionAnaliticaPerformance from "../componentes /componentes_home/sectionAnaliticaPerformance";
import SectionDesarrollo from "../componentes /componentes_home/sectionDesarrollo";
import SectionSlider from "../componentes /componentes_home/slider";
import "../componentes /global-styles/layout";
import SectionBlog from "../componentes /componentes_home/sectionBlog";
import SectionVideo from "../componentes /componentes_home/SectionVideo";
import SeparadorOlasAbajo from "../componentes /separadorOlasAbajo";
import SectionSomoPartners from "../componentes /componentes_home/sectionSomoPartners";
import SectionSobreNosotros from "../componentes /componentes_home/sectionSobreNosotros";
import SectionSumate from "../componentes /componentes_home/sectionSumate";
import SeparadorOlasSirena from "../componentes /separadorOlasSirena";
import SectionSaberMas from "../componentes /componentes_home/sectionSaberMas";
const IndexPage = () => {
  return (
    <React.Fragment>
      <Header />
      <SectionBannerHome></SectionBannerHome>
      <Sectionolas></Sectionolas>
      <SectionAgencia></SectionAgencia>
      <SectionMarketing></SectionMarketing>
      <SectionAnaliticaPerformance></SectionAnaliticaPerformance>
      <SectionDesarrollo></SectionDesarrollo>
      <SectionSlider></SectionSlider>
      <SectionVideo></SectionVideo>
      <SeparadorOlasAbajo></SeparadorOlasAbajo>
      <SectionSomoPartners></SectionSomoPartners>
      <SectionSobreNosotros></SectionSobreNosotros>
      <SectionSumate></SectionSumate>
      <SeparadorOlasSirena></SeparadorOlasSirena>
      <SectionSaberMas></SectionSaberMas>
      <SectionBlog></SectionBlog>
      {/* <Contacto></Contacto> */}

      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
