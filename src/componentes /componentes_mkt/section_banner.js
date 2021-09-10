// import React from "react";
// import UseMkt from "../../hooks/useMkt";
// import { Container, Row, Col } from "react-bootstrap";
// const section_banner = () => {
//   const response = UseMkt();
//   const Titulo = response.allStrapiMkt.nodes[0].titulo1;
//   const Subtitulo = response.allStrapiMkt.nodes[0].subitulo;
//   const ImagenBanners = response.allStrapiMkt.nodes[0].imagenes[0].url;

//   return (
//     <div style={{ backgroundColor: "#2046F5" }}>
//       <Container style={{maxWidth:"1140px",padding:"40px 0px"}}>
//         <Row style={{alignItems: "center"}}>
//           <Col sm={6}>
//             <h2 style={{ fontSize: "75px", color: "#fff", }}>{Titulo} </h2>
//             <br></br>
//             <p style={{ fontSize: "25px", color: "#fff", }}>{Subtitulo}</p>
//           </Col>
//           <Col sm={6}>
//             <img src={ImagenBanners}></img>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default section_banner;
