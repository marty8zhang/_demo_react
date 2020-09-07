import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'
import ErrorMessages from '../components/ErrorMessages'

export default class LogIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleFormFieldChange (event) {
    const target = event.target

    this.setState({
      [target.name]: target.value,
    })
  }

  handleLogIn (event) {
    event.preventDefault()

    this.props.onLogIn(this.state.username, this.state.password)
  }

  render () {
    let content

    if (this.props.isLoggedIn) {
      content = (
        <p>Hello, you're currently logged in as {this.props.loggedInUsername}.<br />
        You can <Button variant="link" className="button-log-out" onClick={this.props.onLogOut}>Log out</Button> here.</p>
      )
    } else {
      content = (
        <>
          <ErrorMessages logInErrors={this.props.logInErrors} />
          <Form onSubmit={this.handleLogIn}>
            <Form.Group as={Row} controlId="text-username">
              <Form.Label column lg={3} md={4} sm={5} className="text-right">Username:</Form.Label>
              <Col lg={9} md={8} sm={7}>
                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleFormFieldChange} placeholder="Username" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="password-password">
              <Form.Label column lg={3} md={4} sm={5} className="text-right">Password:</Form.Label>
              <Col lg={9} md={8} sm={7}>
                <Form.Control type="password" name="password" onChange={this.handleFormFieldChange} placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col lg={{ span: 9, offset: 3 }} md={{ span: 8, offset: 4 }} sm={{ span: 7, offset: 5 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </>
      )
    }

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Log in" />
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
    )
  }
}
