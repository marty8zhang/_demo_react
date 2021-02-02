import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import PropTypes, { string } from 'prop-types';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import ErrorMessages from '../components/ErrorMessages';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleFormFieldChange(event) {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });
  }

  handleLogIn(event) {
    event.preventDefault();

    const { onLogIn } = this.props;
    const {
      username,
      password,
    } = this.state;
    onLogIn(username, password);
  }

  render() {
    let content;

    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      const { loggedInUsername } = this.props;
      const { onLogOut } = this.props;
      content = (
        <p>
          Hello, you&apos;re currently logged in as
          {' '}
          {loggedInUsername}
          .
          <br />
          You can
          {' '}
          <Button variant="link" className="button-log-out" onClick={onLogOut}>Log out</Button>
          {' '}
          here.
        </p>
      );
    } else {
      const { logInErrors } = this.props;
      const { username } = this.state;
      content = (
        <>
          <ErrorMessages logInErrors={logInErrors} />
          <Form onSubmit={this.handleLogIn}>
            <Form.Group as={Row} controlId="text-username">
              <Form.Label column lg={3} md={4} sm={5} className="text-right">Username:</Form.Label>
              <Col lg={9} md={8} sm={7}>
                <Form.Control
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleFormFieldChange}
                  placeholder="Username"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="password-password">
              <Form.Label column lg={3} md={4} sm={5} className="text-right">Password:</Form.Label>
              <Col lg={9} md={8} sm={7}>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={this.handleFormFieldChange}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col
                lg={{ span: 9, offset: 3 }}
                md={{ span: 8, offset: 4 }}
                sm={{ span: 7, offset: 5 }}
              >
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </>
      );
    }

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Log in" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              {content}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
LogIn.propTypes = {
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loggedInUsername: PropTypes.string.isRequired,
  logInErrors: PropTypes.arrayOf(string).isRequired,
};
