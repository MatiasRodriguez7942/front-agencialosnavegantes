import React from "react";
import Header from "../componentes /header";
import SeccionTri1 from "../componentes /componentes_tripulacion/seccion_tri1";
import SeccionTri2 from "../componentes /componentes_tripulacion/seccion_tri2";
import SeccionTri3 from "../componentes /componentes_tripulacion/seccion_tri3";
import SeccionTri4 from "../componentes /componentes_tripulacion/seccion_tri4";
import SeccionTri5 from "../componentes /componentes_tripulacion/seccion_tri5";
import SeccionTri6 from "../componentes /componentes_tripulacion/seccion_tri6";
import SeccionTri7 from "../componentes /componentes_tripulacion/seccion_tri7";
import Footer from "../componentes /footer";

const tripulacion = () => {
  return (
    <div>
      <Header></Header>
      <SeccionTri1></SeccionTri1>
      <SeccionTri2></SeccionTri2>
      <SeccionTri3></SeccionTri3>
      <SeccionTri4></SeccionTri4>
      <SeccionTri5></SeccionTri5>
      <SeccionTri6></SeccionTri6>
      <SeccionTri7></SeccionTri7>
      <Footer></Footer>
    </div>
  );
};

export default tripulacion;
