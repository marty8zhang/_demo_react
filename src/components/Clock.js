import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount () {
    this.intervalId = setInterval(
      () => this.tick(),
      1000,
    )
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  tick () {
    // `setState()` lets React know that the component's state has been updated and hence triggers a new `render()`
    // call on the same component.
    this.setState({
      date: new Date(),
    })
  }

  render () {
    return (
      <span className="clock">{this.state.date.toLocaleTimeString()} {this.state.date.toLocaleDateString()}</span>
    )
  }
}
