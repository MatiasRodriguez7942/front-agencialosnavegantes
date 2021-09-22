import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UsePosts from "../../hooks/usePosts";
function sectionBlog() {
  const response = UsePosts();
  const data = response.allStrapiPost.nodes;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Ingresa a la Bitácora</h1>
        <br></br>
        <p>Nuestro Blog de Contenidos Digitales</p>
      </div>
      <Container style={{ maxWidth: "1140px" }}>
        <Row>
          {data.slice(0, 3).map((item, i) => (
            <Col sm={4} key={i}>
              <div style={{ padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                    className="card-img-top"
                    src={item.miniatura.url}
                    alt="Card image cap"
                  ></img>
                  <div className="card-body" style={{textAlign:"justify"}}>
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                      {item.seo_title}
                    </h5>
                    <p className="card-text" style={{}}>
                      {item.seo_descripcion}
                    </p>
                    <a href="#" className="" style={{color:"#ff5a83",}}>
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div style={{ textAlign: "center" }}>
        <Link to="/blog" className="efecto-hover1">Ver más Contenidos</Link>
      </div>
    </div>
  );
}

export default sectionBlog;
