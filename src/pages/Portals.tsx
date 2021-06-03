import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import Portal from '../components/Portal';

interface Props {}
interface State {
  clicks: number;
}

export default class Portals extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      clicks: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState((previousStates) => ({
      clicks: previousStates.clicks + 1,
    }));
  }

  render() {
    const { clicks } = this.state;

    return [
      <Container fluid>
        <Row>
          <Col>
            <FunctionComponentPageTitle pageTitle="Portals" />
          </Col>
        </Row>
      </Container>,
      <Container fluid onClick={this.handleClick}>
        {/*
          * Note how the button click event propagates and be handled, regardless the portal
          * position in the DOM tree.
          */}
        <Row>
          <Col>
            The button in the Modal has been clicked
            {` ${clicks} `}
            time(s).
          </Col>
        </Row>
        <Row>
          <Col>
            {/*
              * Open the browser inspector and note how `<Portal />` sits differently between the
              * DOM tree and the React tree.
              */}
            <Portal>
              <button type="button">Click</button>
            </Portal>
          </Col>
        </Row>
      </Container>,
    ];
  }
}
