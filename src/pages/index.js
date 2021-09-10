import React from "react";
import Header from "../componentes /header";
import Section from "../componentes /section";
import SectionOlas from "../componentes /sectionolas";
import Section2 from "../componentes /section2";
import Footer from "../componentes /footer";
import usePosts from "../hooks/usePosts";
import SectionMarketing from "../componentes /componentes_home/sectionMarketing";
import SectionAnaliticaPerformance from "../componentes /componentes_home/sectionAnaliticaPerformance";
import SectionDesarrollo from "../componentes /componentes_home/sectionDesarrollo";
import Slider from "../componentes /componentes_home/slider";
import SectionNosotros from "../componentes /componentes_home/sectionNosotros";
import SectionSumate from "../componentes /componentes_home/sectionSumate";
const IndexPage = () => {
  // obtengo valores  api
  const response = usePosts();
  const NombreSection = response.allStrapiHome.nodes[0].Nombre;
  const Contenido = response.allStrapiHome.nodes[0].subtitulo;
  const nombreSection2 =
    response.allStrapiHome.nodes[0].Section[0].Titulo_seccion;
  const textoContenido = response.allStrapiHome.nodes[0].Section[0].subtitulo;
  const TituloSection =
    response.allStrapiHome.nodes[0].Section[6].Titulo_seccion;
  const Subtitulo = response.allStrapiHome.nodes[0].Section[6].subtitulo;
  const Contenido2 = response.allStrapiHome.nodes[0].Section[6].Texto;
  const ImagenSection =
    response.allStrapiHome.nodes[0].Section[6].imagenes[0].url;
  // Arreglo lista
  let Lista = [
    <li key="id1">
      <img
        key="id1"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Impulsamos tus ventas en menos de 30 días.
    </li>,
    <li key="id2">
      <img
        key="id2"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Maximizamos tu facturación en menos de 90 días.
    </li>,
    <li key="id3">
      <img
        key="id3"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Escalamos tus resultados en el plazo de 180 días.
    </li>,
    <li key="id4">
      <img
        key="id4"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Convertimos el 2021 en tu mejor año.
    </li>,
  ];
  let iconos = [<i className="bi bi-chevron-down"></i>];
  let urlBoton = "https://www.google.com/partners/agency?id=4329839845";
  return (
    <React.Fragment>
      <Header />

      <Section
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
      <SectionSumate/>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
