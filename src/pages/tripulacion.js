import React from "react";
import Header from "../componentes /header";
import UseTripulacion from "../hooks/useTripulacion";
import { Col, Row, Container } from "react-bootstrap";
const tripulacion = () => {
//   const response = UseTripulacion()
//   const [data, setData] =  React.useState(0);
  
//   // const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion3
//   // console.log(data)
//   for (let i = 0; i < 35; i++) {
//     const resultado = response.allStrapiTripulacion.nodes[0].tripulacion_seccion3[i]
//     console.log(resultado)
//     setData(resultado)
//  }
 
//  console.log(data)
 
  return (
    <div>
      <Header></Header>
      HOLA TRIPULACIÓN
      
    </div>
  );
};

export default tripulacion;
