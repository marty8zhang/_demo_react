import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'
import LogInOutLink from '../components/LogInOutLink'

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
              <p>Hello, {this.props.loggedInUsername}. You can <LogInOutLink
                isLoggedIn={this.props.isLoggedIn}
                onLogOut={this.props.onLogOut}
              /> here.</p>
              <p>Check out the `App`, `NavbarAccountInformation`, `LiftingStateUp` and `LogIn` classes to see how you can lift the `state` from `NavbarAccountInformation`, `LiftingStateUp` and `LogIn` up to `App`.<br />
                In other words, check out those classes to see how you can pass on `state`, `handleLogIn()` and `handleLogOut()` from `App` down to `NavbarAccountInformation`, `LiftingStateUp` and `LogIn`.</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
