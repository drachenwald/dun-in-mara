import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Button, CardDeck, Card } from 'react-bootstrap';
import Img from 'gatsby-image';

import Layout from "../components/layout"

export default ({ data }) => {
  
  return (
    <Layout
      headline="Shire of Dun in Mara"
      subhead="Recreating the middle ages in Dublin and the east coast of Ireland"
      sidebar='disable'
    >
      <Row className="text-center">
        <Col xs={0} sm={1} xl={2}>
        </Col>

        <Col>
          <br />
          <p>
            The Society for Creative Anachronism is an international group dedicated to recreating
            the Middle Ages - selectively!
          </p>
          <br />
        </Col>

        <Col xs={0} sm={1} xl={2}>
        </Col>
      </Row>

      <CardDeck>
        <Card>
          <Card.Img as={Img} variant="top" fluid={data.splashArmour.childImageSharp.fluid} />
          <Card.Body>
            <Card.Title>Armoured Combat</Card.Title>
            <Card.Text>
              Be a knight in shining armour
            </Card.Text>
            <Link to="/armoured-fighting"><Button variant="primary"><b>Read more</b></Button></Link>
          </Card.Body>
        </Card>
        <Card>
        <Card.Img as={Img} variant="top" fluid={data.splashFencing.childImageSharp.fluid} />
          <Card.Body>
            <Card.Title>Fencing</Card.Title>
            <Card.Text>
              Fencing using genuine historical techniques
            </Card.Text>
            <Link to="/historical-fencing"><Button variant="primary"><b>Read more</b></Button></Link>
          </Card.Body>
        </Card>
        <Card>
        <Card.Img as={Img} variant="top" fluid={data.splashArchery.childImageSharp.fluid} />
          <Card.Body>
            <Card.Title>Archery</Card.Title>
            <Card.Text>
              Master your aim
            </Card.Text>
            <Link to="/archery"><Button variant="primary"><b>Read more</b></Button></Link>
          </Card.Body>
        </Card>
      </CardDeck>
      <br />
      <CardDeck>
        <Card>
        <Card.Img as={Img} variant="top" fluid={data.splashAandS.childImageSharp.fluid} />
          <Card.Body>
            <Card.Title>Arts &amp; Sciences</Card.Title>
            <Card.Text>
              The wealth of historical crafts
            </Card.Text>
            <Link to="/arts-and-sciences"><Button variant="primary"><b>Read more</b></Button></Link>
          </Card.Body>
        </Card>
        <Card>
        <Card.Img as={Img} variant="top" fluid={data.splashEvents.childImageSharp.fluid} />
          <Card.Body>
            <Card.Title>Events</Card.Title>
            <Card.Text>
              Just like being in the middle ages
            </Card.Text>
            <Link to="/events"><Button variant="primary"><b>Read more</b></Button></Link>
          </Card.Body>
        </Card>
        <Card>
        <Card.Img as={Img} variant="top" fluid={data.splashAbout.childImageSharp.fluid} />
          <Card.Body>
            <Card.Title>Classes and Practices</Card.Title>
            <Card.Text>
              The easiest way to join in
            </Card.Text>
            <Link to="/practices"><Button variant="primary"><b>Read more</b></Button></Link>
          </Card.Body>
        </Card>
      </CardDeck>

      <br />
      <br />

      <Row className="text-center">
        <Col xs={0} sm={1} xl={2}>
        </Col>

        <Col>
          <h2>Become a member</h2>
          <p>
            Joining is entirely optional - you are welcome to all our events and practices
            regardless of whether you’re a member. Members get discounts at our practices,
            and help support our activities throughout Ireland and the UK.
          </p>
          <p>
          <Button variant="primary" href="https://membermojo.co.uk/scauk"><b>Join SCA UK &amp; Ireland</b></Button>
          </p>
        </Col>

        <Col xs={0} sm={1} xl={2}>
        </Col>
      </Row>

      <hr />

      <Row className="text-center">
        <Col>
          <h2>Latest posts</h2>
        </Col>
      </Row>

      {data.allWpPost.edges.map(({ node }) => (
        <Row key={`posts-${node.id}`}>
          <Col>
            <Link to={`/blog/${node.date}-${node.slug}`}><h4>{node.title}</h4></Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={`/blog/${node.date}-${node.slug}`}><Button variant="primary"><b>Read more</b></Button></Link>
            <br />
            <br />
          </Col>
        </Row>
      ))}

      <Row className="text-center">
        <Col>
          <Link to="/blog"><Button variant="primary"><b>More posts...</b></Button></Link>
        </Col>
      </Row>

    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(limit: 3, sort: {order: DESC, fields: date}) {
      edges {
        node {
          id
          date(formatString: "YYYY-MM-DD")
          title
          excerpt
          slug
        }
      }
    }
    splashArmour: file(relativePath: { eq: "splash/splash-armour.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      relativePath
    }
    splashFencing: file(relativePath: { eq: "splash/splash-fencing.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      relativePath
    }
    splashArchery: file(relativePath: { eq: "splash/splash-archery.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      relativePath
    }
    splashAandS: file(relativePath: { eq: "splash/splash-aands.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      relativePath
    }
    splashEvents: file(relativePath: { eq: "splash/splash-events.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      relativePath
    }
    splashAbout: file(relativePath: { eq: "splash/splash-about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      relativePath
    }
  }
  `
