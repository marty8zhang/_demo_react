import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'

export default class NotFound extends React.Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col>
            <PageTitleWithProps pageTitle={this.props.pageTitle} />
            <p>Oops! The requested page cannot be found.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
