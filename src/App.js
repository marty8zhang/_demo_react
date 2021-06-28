import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import { INITIAL_LOG_IN_STATE, LogInContext } from './contexts/LogInContext';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import ComponentsAndProps from './pages/ComponentsAndProps';
import StateAndLifecycle from './pages/StateAndLifecycle';
import HandlingEvents from './pages/HandlingEvents';
import ListsAndKeys from './pages/ListsAndKeys';
import Forms from './pages/Forms';
import LiftingStateUp from './pages/LiftingStateUp';
import CompositionVsInheritance from './pages/CompositionVsInheritance';
import Context from './pages/Context';
import ErrorBoundaries from './pages/ErrorBoundaries';
import ForwardingRefs from './pages/ForwardingRefs';
import Fragments from './pages/Fragments';
import HigherOrderComponents from './pages/HigherOrderComponents';
import Portals from './pages/Portals';
import RefsAndTheDom from './pages/RefsAndTheDom';
import RenderProps from './pages/RenderProps';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_LOG_IN_STATE,
      logInContext: {
        ...INITIAL_LOG_IN_STATE,
      },
    };

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogIn(username, password) {
    const logInErrors = [];

    if (typeof username !== 'string'
        || username.trim() === ''
        || typeof password !== 'string'
        || password !== '123456') {
      logInErrors.push("The username and password don't match.");
    }

    let logInState;
    if (logInErrors.length > 0) {
      logInState = {
        ...INITIAL_LOG_IN_STATE,
        logInErrors,
      };
    } else {
      logInState = {
        isLoggedIn: true,
        loggedInUsername: username.charAt(0).toUpperCase() + username.slice(1),
        logInErrors: [],
      };
    }

    this.setState({
      ...logInState,
      logInContext: {
        ...logInState,
        onLogOut: this.handleLogOut,
      },
    });
  }

  handleLogOut() {
    this.setState({
      ...INITIAL_LOG_IN_STATE,
      logInContext: {
        ...INITIAL_LOG_IN_STATE,
        onLogIn: this.handleLogIn,
      },
    });
  }

  render() {
    const {
      logInContext,
      logInErrors,
      isLoggedIn,
      loggedInUsername,
    } = this.state;

    return (
      <div className="App">
        <LogInContext.Provider value={logInContext}>
          <BrowserRouter>
            <header className="App-header">
              <MainNavbar
                isLoggedIn={isLoggedIn}
                loggedInUsername={loggedInUsername}
                onLogOut={this.handleLogOut}
              />
            </header>
            <main>
              <Switch>
                {/*
                * Without `exact` here, the default fuzzy matching behaviour will match any URL
                * to `/`.
                */}
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/components-and-props">
                  <ComponentsAndProps />
                </Route>
                <Route path="/state-and-lifecycle">
                  <StateAndLifecycle />
                </Route>
                <Route path="/handling-events">
                  <HandlingEvents />
                </Route>
                <Route path="/lists-and-keys">
                  <ListsAndKeys />
                </Route>
                <Route path="/forms">
                  <Forms />
                </Route>
                <Route path="/lifting-state-up">
                  <LiftingStateUp
                    isLoggedIn={isLoggedIn}
                    loggedInUsername={loggedInUsername}
                    onLogOut={this.handleLogOut}
                  />
                </Route>
                <Route path="/composition-vs-inheritance">
                  <CompositionVsInheritance />
                </Route>
                <Route path="/context">
                  <Context />
                </Route>
                <Route path="/error-boundaries">
                  <ErrorBoundaries />
                </Route>
                <Route path="/forwarding-refs">
                  <ForwardingRefs />
                </Route>
                <Route path="/fragments">
                  <Fragments />
                </Route>
                <Route path="/higher-order-components/:uri?">
                  <HigherOrderComponents />
                </Route>
                <Route path="/portals">
                  <Portals />
                </Route>
                <Route path="/refs-and-the-dom">
                  <RefsAndTheDom />
                </Route>
                <Route path="/render-props">
                  <RenderProps />
                </Route>
                <Route path="/login">
                  <LogIn
                    isLoggedIn={isLoggedIn}
                    loggedInUsername={loggedInUsername}
                    logInErrors={logInErrors}
                    onLogIn={this.handleLogIn}
                    onLogOut={this.handleLogOut}
                  />
                </Route>
                {/*
                * The `NotFound` page must be the last one on the list, because it's basically
                * a match for any URL. Any `Route` after it hence won't be checked anymore.
                */}
                <Route>
                  <NotFound pageTitle="Page Not Found" />
                </Route>
              </Switch>
            </main>
          </BrowserRouter>
        </LogInContext.Provider>
      </div>
    );
  }
}
