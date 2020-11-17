import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PageTitleWithProps } from '../components/PageTitle';

function NumberList({ numbers }) {
  /* `key` is a special string attribute you need to include when creating lists of elements. */
  const lis = numbers.map((number) => (
    <li key={number}>
      {number}
    </li>
  ));

  return (
    <ul>{lis}</ul>
  );
}
NumberList.propTypes = {
  numbers: PropTypes.node.isRequired,
};

export default class ListsAndKeys extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Lists and Keys" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <NumberList numbers={[1, 2, 3, 4, 5]} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
