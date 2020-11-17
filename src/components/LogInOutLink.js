import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class LogInOutLink extends React.Component {
  render() {
    let link;

    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      const { onLogOut } = this.props;
      link = (
        <Button variant="link" className="button-log-out" onClick={onLogOut}>Log out</Button>
      );
    } else {
      link = (
        <Link to="/login">Log in</Link>
      );
    }

    return (
      <>
        { link }
      </>
    );
  }
}
LogInOutLink.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};
