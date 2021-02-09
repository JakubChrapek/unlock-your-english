require("dotenv").config({
  path: ".env",
})

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
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.DATOCMS_READ_API_KEY,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["en"],
        },
      },
    },
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
          {
            name: "Oswald",
            file: "https://fonts.googleapis.com/css2?family=Oswald",
          },
          {
            name: "Raleway",
            file: "https://fonts.googleapis.com/css2?family=Raleway",
          },
          {
            name: "Manrope",
            file: "https://fonts.googleapis.com/css2?family=Manrope",
          },
        ],
      },
    },
  ],
}
