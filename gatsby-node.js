/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require(`node-fetch`)
const Papa = require('papaparse')

const officerurl =  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOPqFD8VmoA3RMLkdCdOQnBSxmOMxs8Da98bP2Mx0BYE2mdMtldGRXLgIETQ8Mch8vw5GrwMMYdFJy/pub?gid=1308100962&single=true&output=csv'

exports.sourceNodes = async({actions: {createNode}, createNodeId, createContentDigest}) => {

  const officerresult = await parseCsv( officerurl )
  officerresult.data.map( o => createNode({
    ...o,
    id: createNodeId(o.scaname + '-' + o.office + '-' + o.group + '-' + o.responsibility ),
    internal: {
      type: `Officer`,
      contentDigest: createContentDigest(o)
    }
  }))

};

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

const parseCsv = async url => {
  const result = await fetch(url);
  const csv = await result.text();

  return Papa.parse(csv, {header: true});
};

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage, createNode } = actions

  const metadataResult = await graphql(`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          groupName
          groupNameWithParent
        }
      }
    }
  `)
  if (metadataResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/pageTemplate.js`),
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })

  const wpresult = await graphql(`
    {
      allWpPage(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            id
            content
            slug
            status
            title
            uri
          }
        }
      }
      allWpPost(filter: {status: {eq: "publish"}}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "YYYY-MM-DD")
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `)

  if (wpresult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  wpresult.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      // Decide URL structure
      path: `blog/${node.date}-${node.slug}`,
      // path to template
      component: require.resolve(`./src/templates/wpTemplate.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  wpresult.data.allWpPage.edges.forEach(({ node }) => {
    createPage({
      // Decide URL structure
      path: `${node.uri}`,
      // path to template
      component: require.resolve(`./src/templates/wpPageTemplate.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.uri,
      },
    })
  })

}

exports.onCreatePage = async({ page, actions }) => {

  if ( page.path === '/contact' || page.path === '/contact/' ) {
    const { createPage, deletePage } = actions
    deletePage( page )

    const result = await parseCsv( officerurl )

    const allOfficers = result.data

    createPage({
      ...page,
      context: {
        ...page.context,
        allOfficers,
      },
    })
  }
}
