import { graphql, useStaticQuery } from "gatsby";

export default function usePosts() {
  const resultado = useStaticQuery(graphql`
    query MyQuery {
      allStrapiHome {
        nodes {
          Nombre
          subtitulo
          Section
        }
      }
    }
  `);
  return resultado;
}
