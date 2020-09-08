import React from 'react'
import './App.scss'
import MainNavbar from './components/MainNavbar'
import { Switch, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import ComponentsAndProps from './pages/ComponentsAndProps'
import StateAndLifecycle from './pages/StateAndLifecycle'
import HandlingEvents from './pages/HandlingEvents'
import ListsAndKeys from './pages/ListsAndKeys'
import Forms from './pages/Forms'
import LiftingStateUp from './pages/LiftingStateUp'
import CompositionVsInheritance from './pages/CompositionVsInheritance'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      ...this.initialLogInState,
    }

    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  get initialLogInState () {
    return {
      isLoggedIn: false,
      loggedInUsername: 'Guest',
      logInErrors: [],
    }
  }

  handleLogIn (username, password) {
    const logInErrors = []

    if (typeof username !== 'string' ||
        username.trim() === '' ||
        typeof password !== 'string' ||
        password !== '123456') {
      logInErrors.push('The username and password don\'t match.')
    }

    if (logInErrors.length > 0) {
      this.setState({
        ...this.initialLogInState,
        logInErrors: logInErrors,
      })
    } else {
      this.setState({
        isLoggedIn: true,
        loggedInUsername: username.charAt(0).toUpperCase() + username.slice(1),
        logInErrors: [],
      })
    }
  }

  handleLogOut () {
    this.setState({
      ...this.initialLogInState,
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <MainNavbar
            isLoggedIn={this.state.isLoggedIn}
            loggedInUsername={this.state.loggedInUsername}
            onLogIn={this.handleLogIn}
            onLogOut={this.handleLogOut}
          />
        </header>
        <main>
          <Switch>
            {/* Without `exact` here, the default fuzzy matching behaviour will match any URL to `/`. */}
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
                isLoggedIn={this.state.isLoggedIn}
                loggedInUsername={this.state.loggedInUsername}
                onLogOut={this.handleLogOut}
              />
            </Route>
            <Route path="/composition-vs-inheritance">
              <CompositionVsInheritance />
            </Route>
            <Route path="/login">
              <LogIn
                isLoggedIn={this.state.isLoggedIn}
                loggedInUsername={this.state.loggedInUsername}
                logInErrors={this.state.logInErrors}
                onLogIn={this.handleLogIn}
                onLogOut={this.handleLogOut}
              />
            </Route>
            {/*
              * The `NotFound` page must be the last one on the list, because it's basically a match for any URL. Any
              * `Route` after it hence won't be checked anymore.
              */}
            <Route>
              <NotFound pageTitle="Page Not Found" />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}
