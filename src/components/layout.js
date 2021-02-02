/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiTwitter, mdiFacebook, mdiInstagram } from '@mdi/js';

import Banner from './banner'
import SEO from './seo'
import Sidebar from './sidebar'
import "./layout.scss"

import heraldry from '../images/heraldry.svg';

const Layout = ( props ) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          fbUrl
          twitterUrl
          instaUrl
        }
      }
    }
  `)

  return (
    <>
      <SEO title={props.headline} noindex={props.noindex}/>

      <Navbar expand="md" bg="groupbg" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={heraldry}
                width="50"
                className="d-inline-block align-middle"
              />
              {' '}
              {data.site.siteMetadata.title}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link className="mx-2" as={Link} to="/blog">News</Nav.Link>
              <Nav.Link className="mx-2" as={Link} to="/practices">Classes &amp; Practices</Nav.Link>
              <Nav.Link className="mx-2" as={Link} to="/events">Events</Nav.Link>
              <Nav.Link className="mx-2" as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Banner
        headline={props.headline}
        subhead={props.subhead}
        bgimage={props.bgimage}
      />

      <Container>
        <Row>
          {
            props.sidebar === 'disable'
            ?
              <Col xs={12}>
                { props.children }
              </Col>
            :
              <>
                <Col xs={12} md={3}>
                  <Sidebar />
                </Col>
                <Col xs={12} md={9}>
                  { props.children }
                </Col>
              </>
          }
        </Row>
      </Container>

      <br />

      <Navbar expand="lg" bg="groupbg" variant="dark">
        <Container>
          <Row>
            <Col className="align-middle">
              <Navbar.Text className="align-middle">
                <ul className="list-inline">

                  { data.site.siteMetadata.twitterUrl
                    ?
                      <li className="list-inline-item"><a href={data.site.siteMetadata.twitterUrl}><Icon size='1rem' path={mdiTwitter} /> Twitter</a></li>
                    :
                      null
                  }

                  { data.site.siteMetadata.fbUrl
                    ?
                      <li className="list-inline-item"><a href={data.site.siteMetadata.fbUrl}><Icon size='1rem' path={mdiFacebook} /> Facebook</a></li>
                    :
                      null
                  }

                  { data.site.siteMetadata.instaUrl
                    ?
                      <li className="list-inline-item"><a href={data.site.siteMetadata.instaUrl}><Icon size='1rem' path={mdiInstagram} /> Instagram</a></li>
                    :
                      null
                  }
                  
                </ul>
                <ul className="list-inline">
                  <li className="list-inline-item">Visit our friends:</li>
                  <li className="list-inline-item"><a href="https://drachenwald.sca.org">Drachenwald</a></li>
                  <li className="list-inline-item"><a href="https://insulaedraconis.org">Insulae Draconis</a></li>
                  <li className="list-inline-item"><a href="https://eplaheimr.org/">Eplaheimr</a></li>
                  <li className="list-inline-item"><a href="https://glenrathlin.org/">Glen Rathlin</a></li>
                </ul>

                <p>
                  &copy; 2020 SCA (Dun in Mara). This is the recognised web site for the
                  Shire of Dun in Mara in the <a href="https://www.sca.org/">Society for Creative Anachronism</a>.<br />
                  Copyright on all content and images remains with the creators. 
                </p>
              </Navbar.Text>
            </Col>
          </Row>
        </Container>
      </Navbar>

    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
