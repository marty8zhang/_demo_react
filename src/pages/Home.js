import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageTitle } from '../components/PageTitle';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {PageTitle('Home')}
          </Col>
        </Row>
      </Container>
    );
  }
}
