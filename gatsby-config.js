module.exports = {
  siteMetadata: {
    title: `Faiz Alkautsar`,
    description: `Hi there! I'm Faiz Alkautsar, a Software Engineer based in Kuala Lumpur, Malaysia. I love Front-End Web Development and System Design. Passionate in working beautiful fully functioning product with purpose.`,
    author: `@alkafaiz`,
    keywords: [
      "Faiz Alkautsar",
      "Faiz Maruf Al Kautsar",
      "Alkafaiz",
      "Asia Pacific University",
    ],
    siteUrl: "https://alkafaiz.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151567716-1",
        head: true,
        cookieDomain: "alkafaiz.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Alkafaiz`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/alkafaiz-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
