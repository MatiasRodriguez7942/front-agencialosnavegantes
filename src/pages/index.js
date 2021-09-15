import React from "react";
import Header from "../componentes /header";
import Footer from "../componentes /footer";
import SectionBannerHome from "../componentes /componentes_home/sectionBannerHome";
import SectionAgencia from "../componentes /componentes_home/sectionAgencia";
import Contacto from "../componentes /componentes_home/sectionContacto";
import Sectionolas from "../componentes /sectionolas"
import SectionMarketing from "../componentes /componentes_home/sectionMarketing"
import SectionAnaliticaPerformance from "../componentes /componentes_home/sectionAnaliticaPerformance";
const IndexPage = () => {
  // let urlBoton = "https://www.google.com/partners/agency?id=4329839845";
  return (
    <React.Fragment>
      <Header />
      <SectionBannerHome></SectionBannerHome>
      <Sectionolas></Sectionolas>
      <SectionAgencia></SectionAgencia>
      <SectionMarketing></SectionMarketing>
      <SectionAnaliticaPerformance></SectionAnaliticaPerformance>
      <Contacto></Contacto>
      
      {/* <Section
        color="#031fff"
        color_texto="#fff"
        nombre={NombreSection}
        contenido={Contenido}
        lista={Lista}
        imagen="https://agencialosnavegantes.s3.amazonaws.com/the_Equipo_Navegantes_min_d4178be4d1.png?295512"
        textoSubtitulo="¿Llevemos tus resultados al próximo nivel?"
        textoBtn="Conócenos!"
        iconos={iconos}
      />
      <SectionOlas imagen_pie_pagina="https://agencialosnavegantes.s3.amazonaws.com/olas1_8ce9aca392.png?60083.5" />
      <div id="agencia" style={{ marginTop: "30px", marginBottom: "50px" }}>
        <Section2
          nombre={nombreSection2}
          textoContenido={textoContenido}
          colorTexto="#fff "
          colorFondo=""
        />
      </div>
      <SectionMarketing color_fondo="#290877" />
      <SectionAnaliticaPerformance color_fondo="#FFFD02" />

      <SectionDesarrollo color_fondo="#ED5682" />
      <Slider />
      <Section
        color_texto="#fff"
        color="#031FFF"
        nombreSection={TituloSection}
        contenido1={Subtitulo}
        contenido2={Contenido2}
        imagen={ImagenSection}
        urlBoton={urlBoton}
        textoBoton="Ver Insignia >>"
      />
      <SectionNosotros/>
      <SectionSumate/> */}
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
