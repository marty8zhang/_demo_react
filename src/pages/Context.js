import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'
import LogInOutLink from '../components/LogInOutLink'
import { LogInContext } from '../contexts/LogInContext'

export default class Context extends React.Component {
  render () {
    const logInContext = this.context

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Context" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>Hello, {logInContext.loggedInUsername}. You can <LogInOutLink
                isLoggedIn={logInContext.isLoggedIn}
                onLogOut={logInContext.onLogOut}
              /> here.</p>
            </Col>
          </Row>
        </Container>
        <LogInContext.Consumer>
          {logInContextTwo => (
            <Container fluid>
              <Row>
                <Col>
                  <p>{logInContextTwo.loggedInUsername}, &lt;Context.Consumer /&gt; is another way to use the context value.<br />
                    You can <LogInOutLink
                      isLoggedIn={logInContextTwo.isLoggedIn}
                      onLogOut={logInContextTwo.onLogOut}
                    /> here.</p>
                </Col>
              </Row>
            </Container>
          )}
        </LogInContext.Consumer>
      </>
    )
  }
}

Context.contextType = LogInContext

LogInContext.displayName = 'LogInContext'
