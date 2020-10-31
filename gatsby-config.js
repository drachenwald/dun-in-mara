require("dotenv").config({
  path: `.env`,
})

const group = 'Dun in Mara'
const parentGroup = 'Insulae Draconis'

module.exports = {
  siteMetadata: {
    title: group,
    description: `Recreating the middle ages in Dublin and the east coast of Ireland`,
    url: 'https://duninmara.org',
    siteUrl: 'https://duninmara.org',
    image: '/default-banner.jpg',
    twitterUrl: 'https://twitter.com/duninmara',
    fbUrl: 'https://facebook.com/duninmara',
    instaUrl: 'https://www.instagram.com/duninmara/',
    groupName: group,
    groupNameWithParent: `${parentGroup}-${group}`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            }
          }
        ]
      }
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: group,
        short_name: group,
        start_url: `/`,
        icon: `src/images/heraldry.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WP_GRAPHQL
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
