import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

 // 'data' prop will be injected by the GraphQL query below.
export default function Template({ data }) {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const featuredImgFluid = (markdownRemark.frontmatter.featuredImage
                            ?
                              markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
                            :
                              null
  )

  return (
    <Layout
      headline={frontmatter.title}
      subhead={ frontmatter.excerpt ? frontmatter.excerpt : null }
      bgimage={featuredImgFluid}
      noindex={frontmatter.noindex}
    >

      { frontmatter.date && frontmatter.author
        ?
          <p>
            Posted on <b>{frontmatter.date}</b> by <b>{frontmatter.author}</b>
          </p>
        :
          null
      }

      <div dangerouslySetInnerHTML={{ __html: html }}>
      </div>

    </Layout>

  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
        noindex
        date(formatString: "YYYY-MM-DD")
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`