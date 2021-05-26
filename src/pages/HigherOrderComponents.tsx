import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import HigherOrderComponent from '../components/HigherOrderComponent';
import BlogList from '../components/BlogList';
import Blog from '../components/Blog';
import { fakeDataSource } from '../data/FakeDataSource';

interface HigherOrderComponentsProps extends RouteComponentProps<{
  uri?: string,
}> {}
interface State {}

class HigherOrderComponents extends React.Component<HigherOrderComponentsProps, State> {
  render(): ReactNode {
    const BlogListWithChangeSubscription = HigherOrderComponent(
      BlogList,
      ((dataSource, props) => dataSource.getAll()),
      fakeDataSource,
      'blogs',
    );
    const BlogWithChangeSubscription = HigherOrderComponent(
      Blog,
      ((dataSource, props) => dataSource.getOne(props.uri)),
      fakeDataSource,
      'blog',
    );
    // Get the current `uri` from the features offered by the `react-router` package.
    const { match: { params: { uri = null } = {} } = {} } = this.props;

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Higher-Order Components" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col sm={8}>
              <BlogWithChangeSubscription uri={uri} />
            </Col>
            <Col sm={4}>
              <BlogListWithChangeSubscription
                parentUri="/higher-order-components"
                currentUri={uri}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// `withRouter()` is another example of higher-order components which makes the wrapped component
// aware of the current uri, etc.
export default withRouter(HigherOrderComponents);
