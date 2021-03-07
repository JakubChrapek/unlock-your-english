require("dotenv").config({
  path: ".env",
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.unlockyourenglish.pl",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: "Unlock Your English",
    siteUrl: siteUrl,
    titleTemplate: "%s · Mobilna pracownia językowa",
    description:
      "Mobilna pracownia językowa „Unlock Your English” to całoroczna działalność edukacyjna, zajmującą się przede wszystkim nauką języka angielskiego",
    url: "https://www.unlockyourenglish.pl", // No trailing slash allowed!
    image: "src/images/unlock-your-english-icon.png", // Path to your image you placed in the 'static' folder
    linkedinUsername: "@unlockyourenglishpl",
    facebookUsername: "@unlockyourenglishpl",
    instagramUsername: "@unlock_your_english_kamila_z",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 700,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unlock Your English`,
        short_name: `unlockyourenglish`,
        start_url: `/`,
        background_color: `#1D3E84`,
        theme_color: `#CE152B`,
        display: `standalone`,
        icon: "src/images/unlock-your-english-icon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
    },
  ],
}
