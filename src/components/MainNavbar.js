import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/'
import NavbarAccountInformation from './NavbarAccountInformation'

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
            <Nav.Link as={NavLink} to="/handling-events">Handling Events</Nav.Link>
            <Nav.Link as={NavLink} to="/lists-and-keys">Lists and Keys</Nav.Link>
            <Nav.Link as={NavLink} to="/forms">Forms</Nav.Link>
            <Nav.Link as={NavLink} to="/lifting-state-up">Lifting `state` Up</Nav.Link>
            <Nav.Link as={NavLink} to="/composition-vs-inheritance">Composition vs Inheritance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavbarAccountInformation
          isLoggedIn={this.props.isLoggedIn}
          loggedInUsername={this.props.loggedInUsername}
          onLogOut={this.props.onLogOut}
        />
      </Navbar>
    )
  }
}
