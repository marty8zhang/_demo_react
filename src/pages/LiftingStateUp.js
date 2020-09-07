import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'

export default class LiftingStateUp extends React.Component {
  render () {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Lifting `state` Up" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>Hello, {this.props.loggedInUsername}. You can <a
                href="#"
                onClick={this.props.isLoggedIn ? this.props.onLogOut : this.props.onLogIn}
              >Log {this.props.isLoggedIn ? 'out' : 'in'} here</a>.</p>
              <p>Check out the `App`, `MainNavbar`, `NavbarAccountInformation` and `LiftingStateUp` classes to see how you can lift the `state` from `NavbarAccountInformation` and `LiftingStateUp` up to `App`.<br />
                In other words, check out those classes to see how you can pass on `state`, `handleLogIn()` and `handleLogOut()` from `App` down to `NavbarAccountInformation` and `LiftingStateUp`.</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
