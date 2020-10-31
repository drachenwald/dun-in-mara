import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.wpPost
  return (
    <Layout headline={post.title}>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr />
        <p> Posted by <b>{post.author.node.name}</b> on <b>{post.date}</b>. </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      slug
      date(formatString: "YYYY-MM-DD")
      author {
        node {
          name
        }
      }
    }
  }`