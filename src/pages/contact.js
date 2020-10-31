import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {

  const offices = {
    "seneschal": "Seneschal",
    "exchequer": "Exchequer",
    "moas": "Minister for Arts and Sciences",
    "unichancellor": "University Chancellor",
    "chronicler": "Chronicler",
    "chatelaine": "Chatelaine",
    "fencing-marshal": "Fencing Marshal",
    "heavy-marshal": "Armoured Combat Marshal",
    "archery-thrown-marshal": "Archery & Thrown Weapons Marshal",
    "equestrian-marshal": "Equestrian Marshal",
    "herald": "Herald",
    "signet": "Signet",
  }

  const officers = data.allOfficer.edges.filter( e => ( e.node.group === data.site.siteMetadata.groupNameWithParent ) )

  return (
    <Layout
      headline="Contacts"
    >


      {Object.keys(offices).map( office => {

        const officer = officers.find( e => e.node.office === office )

        if ( !officer ) {
          return null
        }

        return (
          <div key={office}>
            <h3>{offices[officer.node.office]}</h3>
            <p>
              <b>{officer.node.scaname}</b>{' '}
              <span className="text-muted">{officer.node.pronouns}</span>{' '}<br />
              {officer.node.email}
            </p>
          </div>
        )
      })}

    </Layout>
  );
}


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        groupNameWithParent
      }
    }
    allOfficer {
      edges {
        node {
          id
          office
          responsibility
          scaname
          pronouns
          email
          group
        }
      }
    }
  }
  `