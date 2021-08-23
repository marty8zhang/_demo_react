import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import StateHook from '../hooks/StateHook';
import EffectHook from '../hooks/EffectHook';
import ContextHook from '../hooks/ContextHook';
import ReducerHook from '../hooks/ReducerHook';
import CallbackHook from '../hooks/CallbackHook';
import RefHook from '../hooks/RefHook';

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
        <Container fluid className="mb-5">
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
        <Container fluid className="mb-5">
          <Row>
            <Col><h2>Effect Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <EffectHook />
            </Col>
          </Row>
        </Container>
        <Container fluid className="mb-5">
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
        <Container fluid className="mb-5">
          <Row>
            <Col><h2>Reducer Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <ReducerHook initialCount={0} />
            </Col>
          </Row>
        </Container>
        <Container fluid className="mb-5">
          <Row>
            <Col><h2>Callback Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <CallbackHook />
            </Col>
          </Row>
        </Container>
        <Container fluid className="mb-5">
          <Row>
            <Col><h2>Ref Hook</h2></Col>
          </Row>
          <Row>
            <Col>
              <RefHook />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
