import React from "react"

import { Link } from "gatsby"
import { Button } from 'react-bootstrap';

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout
    headline="Shire of Dun in Mara"
    subhead="Recreating the middle ages in Dublin and the east coast of Ireland"
  >
    <h1>Page not found</h1>
    <br />

    <Link to="/"><Button variant="primary"><b>Go to the home page</b></Button></Link>

  </Layout>
)

export default NotFoundPage
