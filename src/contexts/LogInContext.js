import React from 'react';

export const INITIAL_LOG_IN_STATE = {
  isLoggedIn: false,
  loggedInUsername: 'Guest',
  logInErrors: [],
};

export const LogInContext = React.createContext({
  ...INITIAL_LOG_IN_STATE,
});
