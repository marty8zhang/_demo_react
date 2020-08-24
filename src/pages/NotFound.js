import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class NotFound extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>Oops! The requested page cannot be found.</Col>
        </Row>
      </Container>
    );
  }
}
