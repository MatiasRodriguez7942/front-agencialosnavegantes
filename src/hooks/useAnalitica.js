import { graphql, useStaticQuery } from "gatsby";
export default function useAnalitica() {
  const resultado = useStaticQuery(graphql`
    query MyQueryAnalitica {
      allStrapiAnalitica {
        nodes {
          ANALITICA_SECCION1
          analitica_seccion2
          analitica_seccion3
        }
      }
    }
  `);
  return resultado;
}
