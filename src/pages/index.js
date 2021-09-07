import React, { useState } from "react";
import Header from "../componentes /header";
import Section from "../componentes /section";
import SectionOlas from "../componentes /sectionolas";
import Section2 from "../componentes /section2";
import Footer from "../componentes /footer";
import usePosts from "../hooks/usePosts";

const IndexPage = () => {
  // obtengo valores  api
  const response = usePosts();
  const NombreSection = response.allStrapiHome.nodes[0].Nombre;
  const Contenido = response.allStrapiHome.nodes[0].subtitulo;
  const nombreSection2 =
    response.allStrapiHome.nodes[0].Section[0].Titulo_seccion;
  const textoContenido = response.allStrapiHome.nodes[0].Section[0].subtitulo;
  // console.log(response.allStrapiHome.nodes[0].Section[0].imagenes)
  // Arreglo lista
  let Lista = [
    <li key="id1">Impulsamos tus ventas en menos de 30 días.</li>,
    <li key="id2">Maximizamos tu facturación en menos de 90 días.</li>,
    <li key="id3">Escalamos tus resultados en el plazo de 180 días.</li>,
    <li key="id4">Convertimos el 2021 en tu mejor año.</li>,
  ];
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
      />
      <SectionOlas imagen_pie_pagina="https://agencialosnavegantes.s3.amazonaws.com/olas1_8ce9aca392.png?60083.5" />
      <Section2
        nombre={nombreSection2}
        textoContenido={textoContenido}
        colorTexto="#fff "
        colorFondo=""
      />
      <Section />

      <Section />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
