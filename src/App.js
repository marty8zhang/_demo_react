import React from 'react'
import './App.scss'
import MainNavbar from './components/MainNavbar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComponentsAndProps from './pages/ComponentsAndProps'
import NotFound from './pages/NotFound'

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
          <Route>
            <NotFound pageTitle="Page Not Found" />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
