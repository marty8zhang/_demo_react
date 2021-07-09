import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import StateHook from '../components/StateHook';
import EffectHook from '../components/EffectHook';

interface Props {}
interface State {}

export default class Hooks extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Hooks" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <StateHook />
              <StateHook />
            </Col>
          </Row>
          <Row>
            <Col>
              <EffectHook />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
