import React, { CSSProperties, ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import RenderPropAwareMouseTracker from '../components/RenderPropAwareMouseTracker';

interface Props {}
interface State {}

export default class RenderProps extends React.Component<Props, State> {
  render(): ReactNode {
    const mouseTrackingImageContainerId = 'mouse-tracking-image-container';

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Render Props" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <p>Move the mouse around the below areas!</p>
              <RenderPropAwareMouseTracker
                style={{ height: '100px', backgroundColor: 'lightgray' }}
                render={
                  (mousePosition) => `The current mouse position is
                    (${mousePosition.x}, ${mousePosition.y}).`
                }
              />
              <RenderPropAwareMouseTracker
                id={mouseTrackingImageContainerId}
                style={{ height: '200px', backgroundColor: 'lightblue', position: 'relative' }}
                render={
                  (mousePosition) => {
                    const imageWidth = 50;
                    const imageHeight = 50;
                    const { x, y } = mousePosition;
                    const imageContainer = document.getElementById(mouseTrackingImageContainerId);
                    if ((x === 0 && y === 0)
                      || !imageContainer) {
                      return (
                        <img
                          src="/cat.png"
                          width={`${imageWidth}px`}
                          height={`${imageHeight}px`}
                          alt="Cat"
                        />
                      );
                    }

                    const maxImageLeft = imageContainer.getBoundingClientRect().right
                      - imageContainer.getBoundingClientRect().left
                      - imageWidth;
                    const maxImageTop = imageContainer.getBoundingClientRect().bottom
                      - imageContainer.getBoundingClientRect().top
                      - imageHeight;
                    const imageStyle: CSSProperties = {
                      position: 'absolute',
                      top: Math.min(maxImageTop, y - imageContainer.getBoundingClientRect().top),
                      left: Math.min(maxImageLeft, x - imageContainer.getBoundingClientRect().left),
                    };

                    return (
                      <img
                        src="/cat.png"
                        width={`${imageWidth}px`}
                        height={`${imageHeight}px`}
                        alt="Cat"
                        style={imageStyle}
                      />
                    );
                  }
                }
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
