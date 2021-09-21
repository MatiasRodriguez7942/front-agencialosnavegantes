import React from "react";
import UseHome from "../../hooks/useHome";
import { Link } from "gatsby";
function sectionVideo() {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion7;
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 0px",
      }}
    >
      <video
        controls
        preload="auto"
        poster="https://agencia-navegantes.s3.amazonaws.com/imgvideo2_860cc0dc1b.jpg?2047885"
        data-setup='{ "fluid": true }'
        style={{ width: "750px" }}
      >
        <source
          src="https://agencia-navegantes.s3.amazonaws.com/Agencia_Los_Navegantes_2021_1_45a466e8e5.mp4"
          style={{ width: "750px" }}
        ></source>
      </video>
      <div style={{ textAlign: "center", paddingTop: "25px" }}>
        <h2>¿Quieres saber más sobre nuestra Agencia?</h2>
        <Link to="https://www.youtube.com/channel/UCjpbMe-8c2GWVB8JcZ1D-cQ">Visita nuestro Canal </Link>
      </div>
    </div>
  );
}

export default sectionVideo;
