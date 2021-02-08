import React, { ReactNode, RefObject } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import { RefForwardedP, RefForwardedH2 } from '../components/RefForwardedElements';

type Props = {};
type State = {
  h2Ref : RefObject<HTMLHeadingElement>,
  pRef : RefObject<HTMLParagraphElement>,
};

export default class ForwardingRefs extends React.Component<Props, State> {
  constructor(props: Readonly<Props> | Props) {
    super(props);

    const h2Ref = React.createRef<HTMLHeadingElement>();
    const pRef = React.createRef<HTMLParagraphElement>();

    this.state = {
      h2Ref,
      pRef,
    };
  }

  componentDidMount(): void {
    const { h2Ref, pRef } = this.state;

    console.log(
      `${h2Ref.current?.textContent}\n${pRef.current?.textContent}`,
    );
  }

  render(): ReactNode {
    const { h2Ref, pRef } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Forwarding `ref`s" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <RefForwardedH2 ref={h2Ref}>This Title Has a `ref`</RefForwardedH2>
              <RefForwardedP ref={pRef}>This paragraph also has a `ref`.</RefForwardedP>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
