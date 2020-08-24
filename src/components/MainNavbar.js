import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/'

export default class MainNavbar extends React.Component {
  render () {
    return (
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="app-navbar-nav" />
        <Navbar.Collapse id="app-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/components-and-props">Components and `props`</Nav.Link>
            <Nav.Link as={NavLink} to="/state-and-lifecycle">`state` and Lifecycle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
