import React from 'react'

export default class ErrorMessages extends React.Component {
  render () {
    if (this.props.logInErrors.length === 0) {
      return null
    }

    const errorListItems = this.props.logInErrors.map((errorMessage, index) =>
      <li key={index}>{errorMessage}</li>,
    )

    return (
      <>
        <p className="text-danger">Log in failed:</p>
        <ul className="text-danger">
          {errorListItems}
        </ul>
      </>
    )
  }
}
