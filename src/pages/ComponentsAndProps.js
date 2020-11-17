import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageTitleWithProps } from '../components/PageTitle';

export default class ComponentsAndProps extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <PageTitleWithProps pageTitle="Components and `props`" />
          </Col>
        </Row>
      </Container>
    );
  }
}
