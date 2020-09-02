import React from 'react'
import './App.scss'
import MainNavbar from './components/MainNavbar'
import { Switch, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ComponentsAndProps from './pages/ComponentsAndProps'
import StateAndLifecycle from './pages/StateAndLifecycle'
import HandlingEvents from './pages/HandlingEvents'
import ListsAndKeys from './pages/ListsAndKeys'
import Forms from './pages/Forms'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
      </header>
      <main>
        <Switch>
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

export default App
