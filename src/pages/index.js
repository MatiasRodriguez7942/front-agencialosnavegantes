import React, { useState } from "react";
import Header from "../componentes /header";
import Section from "../componentes /section";
import SectionOlas from "../componentes /sectionolas";
import Footer from "../componentes /footer";
import usePosts from "../hooks/usePosts";

const IndexPage = () => {
  // obtengo valores  api
  const response = usePosts();
  const NombreSection = response.allStrapiHome.nodes[0].Nombre;
  const Contenido = response.allStrapiHome.nodes[0].subtitulo;
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
        imagen="https://strapi-admin-navegantes.herokuapp.com/uploads/the_Equipo_Navegantes_min_369458e6eb.png"
      />
      <SectionOlas imagen_pie_pagina="https://strapi-admin-navegantes.herokuapp.com/uploads/olas1_e3808d0860.png" />
      <Section nombre="section2" color="#fff " />

      <Section nombre="section3" color="#2B1E77" />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
