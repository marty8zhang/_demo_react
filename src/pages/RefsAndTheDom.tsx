import React, { ReactNode, RefObject } from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';

interface Props {}
interface State {}

class RefOnClassInstance extends React.Component<any, any> {
  public testInstanceMethod() {
    console.log('`RefOnClassInstance.testInstanceMethod()` called.');
  }

  render() {
    return null;
  }
}

export default class RefsAndTheDom extends React.Component<Props, State> {
  private readonly classInstance: RefObject<RefOnClassInstance>;

  private textInput: HTMLInputElement | null;

  constructor(props: Props) {
    super(props);

    this.classInstance = React.createRef();
    this.textInput = null;

    this.setTextInputReferenceByCallbackRef = this.setTextInputReferenceByCallbackRef.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    this.classInstance.current?.testInstanceMethod();
  }

  /**
   * Notes:
   *   - Similar to normal `ref`s, the callback will receive an element when mounted, and
   *     `null` when unmounted.
   *   - If the callback is defined as an inline function, it will get called twice during updates,
   *     first with `null` and then again with an element. This is because a new instance of the
   *     function is created with each `render()`, so React needs to clear the old `ref` and set
   *     up the new one.
   */
  private setTextInputReferenceByCallbackRef(element: HTMLInputElement | null): void {
    this.textInput = element;
  }

  private focusTextInput(): void {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render(): ReactNode {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="`ref`s & the DOM" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              { /*
                 * Note that a `ref` can be directly passed to a class component instance, then
                 * the `ref` creating component will be able to access the public members of that
                 * instance. E.g., check `componentDidMount()` above.
                 * However, the instance itself will have no access to the `ref`.
                 */ }
              <RefOnClassInstance
                ref={this.classInstance}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <Form.Control
                type="text"
                ref={this.setTextInputReferenceByCallbackRef}
              />
            </Col>
            <Col xs="auto">
              <Button
                type="button"
                onClick={this.focusTextInput}
              >
                Focus the text input
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
