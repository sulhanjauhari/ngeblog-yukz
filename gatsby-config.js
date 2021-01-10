const path = require(`path`);
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_SITE_NAME,
    baseUrl: process.env.GATSBY_BASE_URL,
    description: `A personal blog that created by Sulhan Jauhary`,
    author: `Sulhan Jauhary`,
    lang: `id`,
    facebook: `https://www.facebook.com/okanjauhary`,
    twitter: `https://twitter.com/okanjauhary`,
    linkedin: `https://www.linkedin.com/in/sulhanjauhari`,
    github: `https://github.com/okanjauhary`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": "AuthorYaml",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "assets"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Blog " + process.env.GATSBY_SITE_NAME,
        short_name: process.env.GATSBY_SITE_NAME,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-canonical-urls",
    //   options: {
    //     siteUrl: "http://localhost.com",
    //   },
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("cssnano")(), require("autoprefixer")],
      },
    },
  ],
};
