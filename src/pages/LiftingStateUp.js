import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import LogInOutLink from '../components/LogInOutLink';

export default class LiftingStateUp extends React.Component {
  render() {
    const {
      loggedInUsername,
      isLoggedIn,
      onLogOut,
    } = this.props;

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Lifting `state` Up" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>
                Hello,
                {' '}
                {loggedInUsername}
                . You can
                {' '}
                <LogInOutLink
                  isLoggedIn={isLoggedIn}
                  onLogOut={onLogOut}
                />
                {' '}
                here.
              </p>
              <p>
                Check out the `App`, `NavbarAccountInformation`, `LiftingStateUp` and `LogIn`
                classes to see how you can lift the `state` from `NavbarAccountInformation`,
                `LiftingStateUp` and `LogIn` up to `App`.
                <br />
                In other words, check out those classes to see how you can pass on `state`,
                `handleLogIn()` and `handleLogOut()` from `App` down to `NavbarAccountInformation`,
                `LiftingStateUp` and `LogIn`.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
LiftingStateUp.propTypes = {
  loggedInUsername: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};
