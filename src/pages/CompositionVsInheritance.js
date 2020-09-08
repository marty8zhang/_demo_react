import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'

export default class CompositionVsInheritance extends React.Component {
  render () {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Composition vs Inheritance" />
            </Col>
          </Row>
        </Container>
        <ContainmentPropsChildren>
          <p>This part of JSX will be passed in as the value of `props.children` of `ContainmentPropsChildren`.</p>
        </ContainmentPropsChildren>
        <ContainmentNamedProps
          leftSidebar={
            <ListGroup>
              <ListGroup.Item>Left Sidebar Item 1</ListGroup.Item>
              <ListGroup.Item>Left Sidebar Item 2</ListGroup.Item>
              <ListGroup.Item>Left Sidebar Item 3</ListGroup.Item>
            </ListGroup>
          }
          rightContent={
            <p>This part of JSX will be passed in as the value of `props.rightContent` of `ContainmentNamedProps`.</p>
          }
        >
          <p>This part of JSX will be passed in as the value of `props.children` of `ContainmentNamedProps`.</p>
        </ContainmentNamedProps>
        <SpecialisationSpecificationDialog />
      </>
    )
  }
}

function ContainmentPropsChildren (props) {
  return (
    <Container fluid id="composition-props-children">
      <Row>
        <Col id="composition-props-children-props-children" className="bg-info text-white">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

function ContainmentNamedProps (props) {
  return (
    <Container fluid id="composition-named-props">
      <Row>
        <Col md={4} id="composition-props-left-sidebar" className="bg-light">
          {props.leftSidebar}
        </Col>
        <Col md={8} id="composition-props-right-content" className="bg-dark text-white">
          {props.rightContent}
        </Col>
      </Row>
      <Row>
        <Col id="composition-named-props-props-children" className="bg-info text-white">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

// In contrary to class inheritance, in React component "specialisation", the base class/function defines the complete
// layout. Its "specialisations" can only plug in content into the pre-defined placeholders, but cannot extend the
// layout.
class SpecialisationBaseDialog extends React.Component {
  render () {
    return (
      <Container fluid id="specialisation-named-props">
        <Row>
          <Col md={4} id="specialisation-props-left-sidebar" className="bg-light">
            {this.props.leftSidebar}
          </Col>
          <Col md={8} id="specialisation-props-right-content" className="bg-dark text-white">
            {this.props.rightContent}
          </Col>
        </Row>
        <Row>
          <Col id="specialisation-named-props-props-children" className="bg-info text-white">
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}

class SpecialisationSpecificationDialog extends React.Component {
  render () {
    return (
      <SpecialisationBaseDialog
        leftSidebar="Specialisation Left Sidebar"
        rightContent="Specialisation Right Content"
      >
        `Specialisation props.children`
      </SpecialisationBaseDialog>
    )
  }
}
