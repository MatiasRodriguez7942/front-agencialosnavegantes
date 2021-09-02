import React from "react";
import Header from "../componentes /header";
import UsePosts from "../hooks/usePosts";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Slider from "../componentes /slider";
import Layout from "../componentes /global-styles/layout"
const IndexPage = () => {
  // const response = UsePosts();
  // const post = response.allStrapiPost.nodes;

  // console.log(post);

  return (
    <React.Fragment>
      {/* <Header /> */}
        <div className="body">
        <Container className="contenedor-body">
          <Row className="justify-content-center" >
            <Col sm={6}>
              <h2 className="titulo">
              Navegantes de <br></br>Medios Digitales
              </h2>
            </Col>
            <Col sm={6}>
              <img
               className="img-fluid imagen_home"
              src="" 
              />
              {/* {post.map((post) => (
                <div>
                  <img
                    className="d-block w-100"
                    src={`http://localhost:1337${post.Imagen.url}`}
                    alt="First slide"
                  />
                </div>
              ))} */}
            </Col>
          </Row>
          {/* <Slider/> */}
        </Container>
      </div>
      <div className="section">
<h2 className="text-center">Agencia de Marketing Digital
</h2>
      </div>
      <div className="section-1">
       ANALITICA Y  PERFORMANCE
      </div>

      {/* {post.map(post=>(
     <div>
       <h3 key="post.id">{post.Titulo}</h3>
     </div>
     ))} */}
    </React.Fragment>
  );
};

export default IndexPage;
