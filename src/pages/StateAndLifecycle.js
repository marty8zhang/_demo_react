import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import Clock from '../components/Clock';

export default class StateAndLifecycle extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="`state` and Lifecycle" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>
                The current time is
                {' '}
                <Clock />
                .
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
