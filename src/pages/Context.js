import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import LogInOutLink from '../components/LogInOutLink';
import { LogInContext } from '../contexts/LogInContext';

export default class Context extends React.Component {
  render() {
    const logInContext = this.context;

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Context" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>
                Hello,
                {' '}
                {logInContext.loggedInUsername}
                . You can
                {' '}
                <LogInOutLink
                  isLoggedIn={logInContext.isLoggedIn}
                  onLogOut={logInContext.onLogOut}
                />
                {' '}
                here.
              </p>
              <p>
                The `contextType` property of a class can be assigned a `Context` object created by
                `React.createContext()`. This lets you consume the nearest current `Context` value
                by using `this.context`.
              </p>
            </Col>
          </Row>
        </Container>
        <LogInContext.Consumer>
          {(logInContextTwo) => (
            <Container fluid>
              <Row>
                <Col>
                  <p>
                    Using the React `&lt;Context.Consumer /&gt;` component is another way to
                    subscribe to `Context` changes. Its content should be a function taking the
                    current `Context` value as the only parameter.
                  </p>
                  <p>
                    Again,
                    {' '}
                    {logInContextTwo.loggedInUsername}
                    , you can
                    {' '}
                    <LogInOutLink
                      isLoggedIn={logInContextTwo.isLoggedIn}
                      onLogOut={logInContextTwo.onLogOut}
                    />
                    {' '}
                    here too.
                  </p>
                </Col>
              </Row>
            </Container>
          )}
        </LogInContext.Consumer>
      </>
    );
  }
}

Context.contextType = LogInContext;

LogInContext.displayName = 'LogInContextDisplayNameForDeveloperTools';
