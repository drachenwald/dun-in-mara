import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = (props) => {

  const defaultbg = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "default-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bgimage = (
    props.bgimage
    ?
      props.bgimage
    :
      defaultbg.desktop.childImageSharp.fluid
  )

  return (
    <>
      <BackgroundImage
        Tag="section"
        fluid={bgimage}
        className='banner'
      >
        <Row className="h-100">
          <Col sm className="my-auto">
            <Container className="py-5">
              <h1 className="display-4">{props.headline}</h1>
              {
                props.subhead
                ?
                  <h3>
                    { props.subhead }
                  </h3>
                :
                  null
              }
              {
                props.button_label
                ?
                  <>
                    <br />
                    <Button variant="outline-light" href={props.button_url}>{props.button_label}</Button>
                  </>
                :
                  null
              }
              
            </Container>
            
          </Col>
        </Row>
      </BackgroundImage>
      <br />

    </>
  );

}

export default Banner;