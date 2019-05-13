module.exports = {
    siteMetadata: {
      title: `Issy Starter`,
      description: `Starter including netlify CMS.`,
      author: `Issy Dennis`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-plugin-react-helmet`,
      'gatsby-transformer-remark',
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-relative-images`,
            {
              resolve: `gatsby-remark-images`,
              options: {},
            },
          ],
        },
      },
      `gatsby-plugin-netlify-cms`,

    ],
  }
  