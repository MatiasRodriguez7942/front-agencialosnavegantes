import { graphql, useStaticQuery } from "gatsby";
export default function useMkt() {
  const resultado = useStaticQuery(graphql`
  query MyQueryMtk {
    allStrapiMkt {
      nodes {
        mkt_seccion1
        mkt_seccion2
        mkt_seccion3
      }
    }
  }
  `);
  return resultado;
}