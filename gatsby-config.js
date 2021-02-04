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
            name: "Poppins",
            file: "https://fonts.googleapis.com/css2?family=Poppins",
          },
          {
            name: "Libre Baskerville",
            file: "https://fonts.googleapis.com/css2?family=Libre+Baskerville",
          },
          {
            name: "JetBrains Mono",
            file: "https://fonts.googleapis.com/css2?family=JetBrains+Mono",
          },
        ],
      },
    },
  ],
};
