import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NoComponentPageTitle } from '../components/PageTitle';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {NoComponentPageTitle('Home')}
          </Col>
        </Row>
      </Container>
    );
  }
}
