import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class NavbarAccountInformation extends React.Component {
  render () {
    return (
      <Navbar.Text>
        Hello, {this.props.loggedInUsername} (<a
          href="#"
          onClick={this.props.isLoggedIn ? this.props.onLogOut : this.props.onLogIn}
        >Log {this.props.isLoggedIn ? 'out' : 'in'}</a>).
      </Navbar.Text>
    )
  }
}
