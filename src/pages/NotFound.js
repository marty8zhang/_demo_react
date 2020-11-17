import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PageTitleWithProps } from '../components/PageTitle';

export default class NotFound extends React.Component {
  render() {
    const { pageTitle } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col>
            <PageTitleWithProps pageTitle={pageTitle} />
            <p>Oops! The requested page cannot be found.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
NotFound.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
