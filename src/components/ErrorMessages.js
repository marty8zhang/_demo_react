import React from 'react';
import PropTypes, { string } from 'prop-types';

export default class ErrorMessages extends React.Component {
  render() {
    const { logInErrors } = this.props;
    if (logInErrors.length === 0) {
      return null;
    }

    const errorListItems = logInErrors.map(
      (errorMessage, index) => <li key={index}>{errorMessage}</li>, // eslint-disable-line
    );

    return (
      <>
        <p className="text-danger">Log in failed:</p>
        <ul className="text-danger">
          {errorListItems}
        </ul>
      </>
    );
  }
}
ErrorMessages.propTypes = {
  logInErrors: PropTypes.arrayOf(string).isRequired,
};
