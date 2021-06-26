import React, { ReactNode } from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';

type Props = {};
type State = {};

export default class RefsAndTheDom extends React.Component<Props, State> {
  private textInput: HTMLInputElement | null;

  constructor(props: Props) {
    super(props);

    this.textInput = null;

    this.triggerCallbackRefOnTextInput = this.triggerCallbackRefOnTextInput.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
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
  private triggerCallbackRefOnTextInput(element: HTMLInputElement | null): void {
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
            <Col sm={3}>
              <Form.Control
                type="text"
                ref={this.triggerCallbackRefOnTextInput}
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
