import React from 'react';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import { PageTitleWithProps } from '../components/PageTitle';
import ErrorBoundary from '../components/ErrorBoundary';

class FatalErrors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCount: 0,
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);

    this.testFunction();

    // setTimeout(
    //   () => { throw new Error("Oops! There is a fatal error in `setTimeout` callback, which won't be gracefully handled.") },
    //   1000,
    // )

    // throw new Error('Oops! There is a fatal error in `FatalErrors.constructor()`.');
  }

  static getDerivedStateFromProps(props, state) {
    // throw new Error('Oops! There is a fatal error in `FatalErrors.getDerivedStateFromProps()`.')

    return state;
  }

  componentDidMount() {
    this.setState({
      renderCount: 1,
    });

    // throw new Error('Oops! There is a fatal error in `FatalErrors.componentDidMount()`.')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // throw new Error('Oops! There is a fatal error in `FatalErrors.shouldComponentUpdate()`.')

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // throw new Error('Oops! There is a fatal error in `FatalErrors.getSnapshotBeforeUpdate()`.')

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);

    /*
     * Indicate that `this.setState()` in `componentDidMount()` triggered the current update.
     */
    if (prevState.renderCount === 0) {
      this.setState({
        /*
         * Note: `componentDidUpdate()` can only happen after the second `render()` call, so
         * technically speaking `render()` count in this method should be `2`.
         */
        renderCount: prevState.renderCount + 1,
      });
    }

    /*
     * The `render()` count here should return `1`, since `this.setState()` above hasn't taken
     * effect yet.
     */
    // throw new Error(
    //   'Oops! There is a fatal error in `FatalErrors.componentDidUpdate()`. `render()` Count: ' + this.state.renderCount,
    // )
  }

  componentWillUnmount() {
    // throw new Error('Oops! There is a fatal error in `FatalErrors.componentWillUnmount()`.')
  }

  handleFormFieldChange(event) {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });

    // throw new Error("Oops! There is a fatal error in `FatalErrors.handleFormFieldChange()`, which won't be gracefully handled.")
  }

  testFunction() {
    // throw new Error('Oops! There is a fatal error in `FatalErrors.testFunction()`.')
  }

  render() {
    const { renderCount, name } = this.state;
    if (renderCount === 0) {
      // throw new Error('Oops! There is a fatal error in `FatalErrors.render()` #1.')
    } else {
      // throw new Error('Oops! There is a fatal error in `FatalErrors.render()` #2.')
    }

    return (
      <>
        <p>You&apos;ll see this message if there is no fatal error thrown.</p>
        <p>
          To see how error boundary works, try to uncomment some error throwing code in the
          lifecycle methods of `FatalErrors`.
        </p>
        <p>
          <Form.Control
            type="text"
            name="test"
            value={name}
            onChange={this.handleFormFieldChange}
            placeholder="Test"
          />
        </p>
      </>
    );
  }
}

export default class ErrorBoundaries extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Error Boundaries" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <ErrorBoundary>
                <FatalErrors />
              </ErrorBoundary>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
