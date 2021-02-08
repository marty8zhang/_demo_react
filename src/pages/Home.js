import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NonComponentPageTitle } from '../components/PageTitle';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {NonComponentPageTitle('Home')}
          </Col>
        </Row>
      </Container>
    );
  }
}
