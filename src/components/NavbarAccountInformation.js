import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import LogInOutLink from './LogInOutLink';

export default class NavbarAccountInformation extends React.Component {
  render() {
    const {
      loggedInUsername,
      isLoggedIn,
      onLogOut,
    } = this.props;
    return (
      <Navbar.Text>
        Hello,
        {' '}
        {loggedInUsername}
        {' '}
        (
        <LogInOutLink
          isLoggedIn={isLoggedIn}
          onLogOut={onLogOut}
        />
        ).
      </Navbar.Text>
    );
  }
}
NavbarAccountInformation.propTypes = {
  loggedInUsername: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};
