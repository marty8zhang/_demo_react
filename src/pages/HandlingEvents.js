import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'

export default class HandlingEvents extends React.Component {
  constructor (props) {
    super(props)

    // This binding is necessary to make `this` work in `handleLightSwitch()`.
    this.handleLightSwitch = this.handleLightSwitch.bind(this)

    this.state = {
      isLightOn: true,
    }
  }

  handleLightSwitch () {
    this.setState(previousState => ({
      isLightOn: !previousState.isLightOn,
    }))
  }

  // Note: This isn't standardised JS syntax to declare a class method, even though it seems Node (v12+) supports it.
  // `this` inside an ES2015 arrow function is always inherited from the enclosing scope.
  // handleLightSwitchAutoBindingMethodOne = () => {
  //   this.setState(previousState => ({
  //     isLightOn: !previousState.isLightOn,
  //   }))
  // }

  handleLightSwitchAutoBindingMethodTwo () {
    this.setState(previousState => ({
      isLightOn: !previousState.isLightOn,
    }))
  }

  handleArgumentsPassingMethodOne (event, id) {
    console.log(event)

    this.setState({
      passedInId: id,
    })
  }

  /*
   * Note: Because we'll need to use `bind()` to pass in the id, the actual event object has to become the second
   * argument. In other words, `this.handleArgumentsPassingMethodTwo.bind(this, 2)` below will create an anonymous
   * function for us similar to:
   * (event) => { this.handleArgumentsPassingMethodTwo(2, event) }
   */
  handleArgumentsPassingMethodTwo (id, event) {
    console.log(event)

    this.setState({
      passedInId: id,
    })
  }

  stringifyId (id) {
    if (undefined === id) {
      return 'undefined'
    }

    if (id === null) {
      return 'null'
    }

    return id.toString()
  }

  render () {
    const isLightOn = this.state.isLightOn

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Handling Events" />
            </Col>
          </Row>
        </Container>
        <Container fluid className={isLightOn ? '' : 'bg-dark'}>
          <Row>
            <Col>
              <p>The light is {isLightOn ? 'On' : 'Off'}.</p>
              <p><Button
                className={isLightOn ? 'btn-dark' : 'btn-light'}
                onClick={this.handleLightSwitch}>
                Light {isLightOn ? 'Off' : 'On'}
              </Button></p>
              {/*
              <p><Button
                className={isLightOn ? 'btn-dark' : 'btn-light'}
                onClick={this.handleLightSwitchAutoBindingMethodOne}>
                Light {isLightOn ? 'Off' : 'On'}
              </Button></p>
              */}
              {/* We use an arrow function to do the auto binding here instead. */}
              <p><Button
                className={isLightOn ? 'btn-dark' : 'btn-light'}
                onClick={() => this.handleLightSwitchAutoBindingMethodTwo()}>
                Light {isLightOn ? 'Off' : 'On'}
              </Button></p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <>
            <Row>
              <Col>
                <h1>Passing Arguments to Event Handlers</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>The passed in id is {this.stringifyId(this.state.passedInId)}.</p>
                <p><Button onClick={event => this.handleArgumentsPassingMethodOne(event, 1)}>
                  Pass Arguments
                </Button></p>
                <p><Button onClick={this.handleArgumentsPassingMethodTwo.bind(this, 2)}>
                  Pass Arguments
                </Button></p>
              </Col>
            </Row>
          </>
        </Container>
      </>
    )
  }
}
