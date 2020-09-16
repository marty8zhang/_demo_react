import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasFatalError: false,
    }

    // throw new Error("Oops! There is a fatal error in `ErrorBoundary.constructor()`, which won't be gracefully handled.")
  }

  static getDerivedStateFromError (error) {
    // Return an object as the new state of this component.
    return {
      hasFatalError: true,
      fatalError: error,
    }
  }

  // Use this method to log error information.
  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasFatalError) {
      const error = this.state.fatalError

      return (
        <>
          <h2>Something went wrong.</h2>
          <p><strong>Details:</strong><br />
            <strong>{error.name}:</strong> {error.message}</p>
        </>
      )
    }

    return this.props.children
  }
}
