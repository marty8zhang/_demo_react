import React from 'react';
import {
  Container, Row, Col, ListGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FunctionComponentPageTitle } from '../components/PageTitle';

function ContainmentPropsChildren({ children }) {
  return (
    <Container fluid id="composition-props-children">
      <Row>
        <Col id="composition-props-children-props-children" className="bg-info text-white">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
ContainmentPropsChildren.propTypes = {
  children: PropTypes.node.isRequired,
};

function ContainmentNamedProps({
  children,
  leftSidebar,
  rightContent,
}) {
  return (
    <Container fluid id="composition-named-props">
      <Row>
        <Col md={4} id="composition-props-left-sidebar" className="bg-light">
          {leftSidebar}
        </Col>
        <Col md={8} id="composition-props-right-content" className="bg-dark text-white">
          {rightContent}
        </Col>
      </Row>
      <Row>
        <Col id="composition-named-props-props-children" className="bg-info text-white">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
ContainmentNamedProps.propTypes = {
  children: PropTypes.node.isRequired,
  leftSidebar: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
};

/*
 * In contrary to class inheritance, in React component "specialisation", the base class/function
 * defines the complete layout. Its "specialisations" can only plug in content into the pre-defined
 * placeholders, but cannot extend the layout.
 */
class SpecialisationBaseDialog extends React.Component {
  render() {
    const {
      children,
      leftSidebar,
      rightContent,
    } = this.props;

    return (
      <Container fluid id="specialisation-named-props">
        <Row>
          <Col md={4} id="specialisation-props-left-sidebar" className="bg-light">
            {leftSidebar}
          </Col>
          <Col md={8} id="specialisation-props-right-content" className="bg-dark text-white">
            {rightContent}
          </Col>
        </Row>
        <Row>
          <Col id="specialisation-named-props-props-children" className="bg-info text-white">
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
}
SpecialisationBaseDialog.propTypes = {
  children: PropTypes.node.isRequired,
  leftSidebar: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
};

class SpecialisationSpecificationDialog extends React.Component {
  render() {
    return (
      <SpecialisationBaseDialog
        leftSidebar="Specialisation Left Sidebar"
        rightContent="Specialisation Right Content"
      >
        `Specialisation props.children`
      </SpecialisationBaseDialog>
    );
  }
}

export default class CompositionVsInheritance extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="Composition vs Inheritance" />
            </Col>
          </Row>
        </Container>
        <ContainmentPropsChildren>
          <p>
            This part of JSX will be passed in as the value of `props.children` of
            `ContainmentPropsChildren`.
          </p>
        </ContainmentPropsChildren>
        <ContainmentNamedProps
          leftSidebar={(
            <ListGroup>
              <ListGroup.Item>Left Sidebar Item 1</ListGroup.Item>
              <ListGroup.Item>Left Sidebar Item 2</ListGroup.Item>
              <ListGroup.Item>Left Sidebar Item 3</ListGroup.Item>
            </ListGroup>
          )}
          rightContent={(
            <p>
              This part of JSX will be passed in as the value of `props.rightContent` of
              `ContainmentNamedProps`.
            </p>
          )}
        >
          <p>
            This part of JSX will be passed in as the value of `props.children` of
            `ContainmentNamedProps`.
          </p>
        </ContainmentNamedProps>
        <SpecialisationSpecificationDialog />
      </>
    );
  }
}
