import React from 'react';
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

const Sidebar = ( props ) => {

  return (
    <Navbar expand="md" className="sidebar">
      <Navbar.Toggle>+ Expand menu</Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="flex-column">
          <Nav.Item className="p-0"><h6>Dun in Mara</h6></Nav.Item>
          <Nav.Link className="p-0" as={Link} to="/blog">Latest news</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/about">About</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/about/inclusivity">Inclusivity Statement</Nav.Link>
          <Nav.Item className="pt-2"><h6>What we do</h6></Nav.Item>
          <Nav.Link className="p-0" as={Link} to="/practices">Classes &amp; Practices</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/archery">Archery</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/arts-and-sciences">Arts &amp; Sciences</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/armoured-fighting">Armoured Fighting</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/historical-fencing">Fencing</Nav.Link>
          <Nav.Item className="pt-2"><h6>Events</h6></Nav.Item>
          <Nav.Link className="p-0" as={Link} to="/events/2020/an-event-probably">An event, probably</Nav.Link>
          <Nav.Item className="pt-2"><h6>Documents</h6></Nav.Item>
          <Nav.Link className="p-0" as={Link} to="/constitution">Constitution</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/conduct">Code of Conduct</Nav.Link>
          <Nav.Link className="p-0" as={Link} to="/about/data">Your data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Sidebar;