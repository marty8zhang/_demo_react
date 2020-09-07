import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import LogInOutLink from './LogInOutLink'

export default class NavbarAccountInformation extends React.Component {
  render () {
    return (
      <Navbar.Text>
        Hello, {this.props.loggedInUsername} (<LogInOutLink
          isLoggedIn={this.props.isLoggedIn}
          onLogOut={this.props.onLogOut}
        />).
      </Navbar.Text>
    )
  }
}
