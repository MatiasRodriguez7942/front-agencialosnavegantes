import React from "react";
import UsePosts from "../hooks/usePosts";

const section2 = (props) => {
  const response = UsePosts();
//   const section = response.allStrapiHome.nodes[0].Section[0].imagenes[0].name;
  const section = response.allStrapiHome.nodes;

  console.log(section);
  const texto = {
    fontSize: "50px",
    color: "#212529",
    fontWeight: "700",
  };
  const textoContenido = {
    fontSize: "20px",
    color: "#212529",
  };
  return (
    <div>
      <h2 className="text-center" style={texto}>
        {props.nombre}
      </h2>
      <p className="text-center" style={textoContenido}>
        {props.textoContenido}
      </p>
      {section.map(post =>{
          <h2 key="PRUEBA">{post}</h2>
      })}
    </div>
  );
};

export default section2;
