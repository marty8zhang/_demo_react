import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import StateHook from '../components/StateHook';
import EffectHook from '../components/EffectHook';
import ContextHook from '../components/ContextHook';

interface Props {}
interface State {
  testContextValue: number,
}

export const ContextHookContext = React.createContext(0);

export default class Hooks extends React.Component<Props, State> {
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      testContextValue: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        testContextValue: prevState.testContextValue + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render(): ReactNode {
    const { testContextValue } = this.state;

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
            <Col><h2>State Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <StateHook />
              <StateHook />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col><h2>Effect Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <EffectHook />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col><h2>Context Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <ContextHookContext.Provider value={testContextValue}>
                <ContextHook />
              </ContextHookContext.Provider>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
