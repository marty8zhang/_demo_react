import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom/';
import PropTypes from 'prop-types';
import NavbarAccountInformation from './NavbarAccountInformation';

export default class MainNavbar extends React.Component {
  render() {
    const {
      isLoggedIn,
      loggedInUsername,
      onLogOut,
    } = this.props;

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
            <Nav.Link as={NavLink} to="/context">Context</Nav.Link>
            <Nav.Link as={NavLink} to="/error-boundaries">Error Boundaries</Nav.Link>
            <Nav.Link as={NavLink} to="/forwarding-refs">Forwarding `ref`s</Nav.Link>
            <Nav.Link as={NavLink} to="/fragments">`Fragment`s</Nav.Link>
            <Nav.Link as={NavLink} to="/higher-order-components">Higher-Order Components</Nav.Link>
            <Nav.Link as={NavLink} to="/portals">Portals</Nav.Link>
            <Nav.Link as={NavLink} to="/refs-and-the-dom">`ref`s & the Dom</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavbarAccountInformation
          isLoggedIn={isLoggedIn}
          loggedInUsername={loggedInUsername}
          onLogOut={onLogOut}
        />
      </Navbar>
    );
  }
}
MainNavbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loggedInUsername: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired,
};
