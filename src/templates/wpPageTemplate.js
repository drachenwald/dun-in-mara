import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const page = data.wpPage
  return (
    <Layout headline={page.title}>
      <div>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wpPage(uri: { eq: $slug }) {
      id
      content
      slug
      status
      title
      uri
    }
  }`