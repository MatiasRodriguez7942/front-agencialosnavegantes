import React from "react";
import UseHome from "../../hooks/useHome";

function SectionVideo() {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion7;

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom:"40px",
        paddingTop:"40px" ,
      }}
    >
    </div>
  );
}

export default SectionVideo;
