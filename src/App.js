import React from 'react'
import './App.scss'
import MainNavbar from './components/MainNavbar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import RenderingElements from './pages/RenderingElements'
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
          <Route path="/rendering-elements">
            <RenderingElements />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
