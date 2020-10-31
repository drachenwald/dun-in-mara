import React from "react"
import { Link, graphql } from "gatsby"
import { Button } from 'react-bootstrap';

import Layout from "../components/layout"

export default ({ data }) => {
  
  return (
    <Layout
      headline="Shire of Dun in Mara"
      subhead="Latest news"
    >

      {data.allWpPost.edges.map(({ node }) => (
        <div key={node.id}>
          <p><span className="text-muted">{node.date}</span>&nbsp;<Link to={`/blog/${node.date}-${node.slug}`}>{node.title}</Link></p>
        </div>
      ))}

      <Link to="/mdposts"><Button variant="primary"><b>Older posts...</b></Button></Link>

    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: {order: DESC, fields: date}) {
      edges {
        node {
          date(formatString: "YYYY-MM-DD")
          title
          excerpt
          slug
        }
      }
    }
  }
  `
