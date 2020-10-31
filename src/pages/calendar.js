import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {

  const events = data.allCalEvent.edges.filter( e => ( e.node['host_branch'] === data.site.siteMetadata.groupName ) )

  if ( events.length === 0 ) {

    return (
      <Layout
        headline="Events calendar"
      >

        No events planned... check back soon

      </Layout>
    )
  }
  
  return (
    <Layout
      headline="Events calendar"
    >

      {events.map(({ node }) => (
        <div key={node.id}>
          <h2><Link to={`/calendar/${node.slug}`}>{node.event_name}</Link></h2>
          <p>
            <span className="text-muted">{node.start_date}
            {
              node.start_date !== node.end_date
              ?
                <> to {node.end_date}</>
              :
                null
            }
            </span>
          </p>
          <p>{node.summary}</p>
          <br />
        </div>
      ))}

    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        groupName
      }
    }
    allCalEvent( sort: {order: ASC, fields: start_date} ) {
      edges {
        node {
          id
          slug
          host_branch
          event_name
          start_date
          end_date
          summary
        }
      }
    }
  }
  `
