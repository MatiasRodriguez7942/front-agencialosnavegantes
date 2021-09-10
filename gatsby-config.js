module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-strapi`,
            options: {
              apiURL: `https://strapi-admin-navegantes.herokuapp.com`,
              queryLimit: 1000, // Defaults to 100
              collectionTypes: [`post`], 
              // singleTypes: [`home`,`mkt`,`tripulacion`],
              singleTypes: [`home`],
            },
          },
    ]
}