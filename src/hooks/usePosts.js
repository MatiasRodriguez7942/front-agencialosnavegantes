import { graphql, useStaticQuery } from "gatsby";

export default function usePosts() {
  const resultado = useStaticQuery(graphql`
    query MyQueryPost {
      allStrapiPost {
        nodes {
          titulo_post
          seo_title
          seo_descripcion
          url
          miniatura {
            url
          }
        }
      }
    }
  `);
  return resultado;
}
