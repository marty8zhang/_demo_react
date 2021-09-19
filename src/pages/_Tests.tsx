import React, { ReactNode } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import { _TestClassComponent, _TestFunctionComponent } from '../components/_TestComponents';

interface Props {}
interface State {
  childData: any,
}

export default class _Tests extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      childData: 'Props One',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event: any) {
    event.preventDefault();

    this.setState({
      childData: event.target.innerText,
    });
  }

  render(): ReactNode {
    const { childData } = this.state;

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Tests" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>
                <Button type="button" onClick={this.handleButtonClick}>Props One</Button>
                {' '}
                <Button type="button" onClick={this.handleButtonClick}>Props Two</Button>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <_TestClassComponent data={childData} />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <_TestFunctionComponent data={childData} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
