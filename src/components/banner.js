import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Button } from 'react-bootstrap';

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
        <Container>
              <h1 className="display-4 pt-5">{props.headline}</h1>
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
              <h1 className="pb-1">&nbsp;</h1>
        </Container>

      </BackgroundImage>
      <br />

    </>
  );

}

export default Banner;