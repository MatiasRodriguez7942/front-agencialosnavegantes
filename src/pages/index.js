import React from "react";
import "../componentes /global-styles/layout";
import Header from "../componentes /header";
import Footer from "../componentes /footer";
import SectionBannerHome from "../componentes /componentes_home/sectionBannerHome";
import SectionAgencia from "../componentes /componentes_home/sectionAgencia";
import Sectionolas from "../componentes /sectionolas";
import SectionMarketing from "../componentes /componentes_home/sectionMarketing";
import SectionAnaliticaPerformance from "../componentes /componentes_home/sectionAnaliticaPerformance";
import SectionDesarrollo from "../componentes /componentes_home/sectionDesarrollo";
import SectionSlider from "../componentes /componentes_home/slider";
import SectionBlog from "../componentes /componentes_home/sectionBlog";
import Video from "../componentes /SectionVideo";
import SeparadorOlasAbajo from "../componentes /separadorOlasAbajo";
import SectionSomoPartners from "../componentes /componentes_home/sectionSomoPartners";
import SectionSobreNosotros from "../componentes /componentes_home/sectionSobreNosotros";
import SectionSumate from "../componentes /componentes_home/sectionSumate";
import SeparadorOlasSirena from "../componentes /separadorOlasSirena";
import SectionSaberMas from "../componentes /componentes_home/sectionSaberMas";
import SectionInstagram from "../componentes /SectionInstagram";

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
      <Video></Video>
      <SeparadorOlasAbajo></SeparadorOlasAbajo>
      <SectionSomoPartners></SectionSomoPartners>
      <SectionSobreNosotros></SectionSobreNosotros>
      <SectionSumate></SectionSumate>
      <SeparadorOlasSirena></SeparadorOlasSirena>
      <SectionSaberMas></SectionSaberMas>
      <SectionBlog></SectionBlog>
      <SectionInstagram></SectionInstagram>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
