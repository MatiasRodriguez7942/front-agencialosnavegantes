import { graphql, useStaticQuery } from "gatsby";
export default function useHome() {
  const resultado = useStaticQuery(graphql`
    query MyQueryHome {
      allStrapiHome {
        nodes {
          home_seccionBanner
          home_seccion2
          home_seccion3
          home_seccion4
          home_seccion5
          home_seccion6
          home_seccion7
          home_seccion8
          home_seccion9
          home_seccion10
          home_seccion11
        }
      }
    }
  `);
  return resultado;
}
