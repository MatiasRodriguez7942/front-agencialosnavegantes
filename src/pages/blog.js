import React from "react";
import Header from "../componentes /header";
import Footer from "../componentes /footer"
const blog = () => {
  const colorFondo= "#031fff"

  return (
    <div>
      <Header colorFondo={colorFondo}></Header>
      HOLA BLOCK
      <Footer></Footer>
    </div>
  );
};

export default blog;
