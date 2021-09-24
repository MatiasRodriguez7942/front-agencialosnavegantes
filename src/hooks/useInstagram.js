import { graphql, useStaticQuery } from "gatsby";
export default function useInstagram() {
  const resultado = useStaticQuery(graphql`
    query MyQueryInstagram {
      allStrapiInstagramContenidos {
        nodes {
          imagen {
            url
          }
          idinsta
        }
      }
    }
  `);
  return resultado;
}
