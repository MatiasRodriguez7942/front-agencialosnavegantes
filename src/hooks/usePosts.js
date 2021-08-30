import { graphql, useStaticQuery } from "gatsby";

export default function usePosts() {
  const resultado = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPost {
        nodes {
          id
          Titulo
          Contenido
          url
          created_at
          Imagen {
            url
          }
        }
      }
    }
  `);
  return resultado
}
