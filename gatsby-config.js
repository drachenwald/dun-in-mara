require("dotenv").config({
  path: `.env`,
})

const group = 'Dun in Mara'
const parentGroup = 'Insulae Draconis'
const canonicalDomain = 'duninmara.org'

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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-106038754-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        SymLinksIfOwnerMatch: true,
        host: canonicalDomain,
        custom: `
          RedirectMatch 301 "^/posts/(.*)/(.*)/(.*)/(.*)/" "https://duninmara.org/mdposts/$1-$2-$3-$4/"
          <IfModule mod_headers.c>
            <FilesMatch "^/static/">
              Header set Cache-Control "public, max-age=31536000, immutable"
            </FilesMatch>
          </IfModule>
        `
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
