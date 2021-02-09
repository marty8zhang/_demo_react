import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import { Fragment, KeyedFragment, ShorthandFragment } from '../components/Fragments';

type Props = {};
type State = {};

export default class Fragments extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="`Fragment`s" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <ul>
                <Fragment />
                <ShorthandFragment />
                <KeyedFragment />
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
