import React from 'react'
import './App.scss'
import MainNavbar from './components/MainNavbar'
import { Switch, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ComponentsAndProps from './pages/ComponentsAndProps'
import StateAndLifecycle from './pages/StateAndLifecycle'

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
          // The `NotFound` page must be the last one on the list, otherwise it'll be treated as a match for any URL.
          <Route>
            <NotFound pageTitle="Page Not Found" />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
