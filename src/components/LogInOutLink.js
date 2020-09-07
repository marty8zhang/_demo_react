import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class LogInOutLink extends React.Component {
  render () {
    let link

    if (this.props.isLoggedIn) {
      link = (
        <Button variant="link" className="button-log-out" onClick={this.props.onLogOut}>Log out</Button>
      )
    } else {
      link = (
        <Link to="/login">Log in</Link>
      )
    }

    return (
      <>
        { link }
      </>
    )
  }
}
