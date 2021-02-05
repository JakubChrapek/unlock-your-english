module.exports = {
  siteMetadata: {
    title: "YourEnglish",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-omni-font-loader",

      options: {
        enableListener: true,
        interval: 500,
        timeout: 30000,
        web: [
          //examples
          {
            name: "Oswald",
            file: "https://fonts.googleapis.com/css2?family=Oswald",
          },
          {
            name: "Raleway",
            file: "https://fonts.googleapis.com/css2?family=Raleway",
          },
        ],
      },
    },
  ],
}
