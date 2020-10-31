import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  
  return (
    <Layout
      headline="Shire of Dun in Mara"
      subhead="Previous news posts"
    >

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <p><span class="text-muted">{node.frontmatter.date}</span>&nbsp;<Link to={node.fields.slug}>{node.frontmatter.title}</Link></p>
        </div>
      ))}


    </Layout>
  );
}

export const mdpostsQuery = graphql`
query {
  allMarkdownRemark(filter: {fields: {slug: {regex: "/^\\/mdposts\\//"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
      }
    }
  }
}
`