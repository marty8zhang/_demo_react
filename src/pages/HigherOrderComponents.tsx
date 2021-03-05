import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import { FunctionComponentPageTitle } from '../components/PageTitle';
import HigherOrderComponent from '../components/HigherOrderComponent';
import BlogList from '../components/BlogList';
import Blog from '../components/Blog';

interface HigherOrderComponentsProps extends RouteComponentProps<{
  uri?: string,
}> {}
interface State {}

class HigherOrderComponents extends React.Component<HigherOrderComponentsProps, State> {
  render(): ReactNode {
    const BlogListWithChangeSubscription = HigherOrderComponent(
      BlogList,
      ((dataSource, props) => dataSource.getBlogs()),
      'blogs',
    );
    const BlogWithChangeSubscription = HigherOrderComponent(
      Blog,
      ((dataSource, props) => dataSource.getBlog(props.uri)),
      'blog',
    );
    const { match: { params: { uri = null } = {} } = {} } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.props.match);

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

export default withRouter(HigherOrderComponents);
