import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ToDos from './Containers/ToDos'
import Home from './Containers/Home'
import NavBar from './NavBar'

const App = () => (
  <BrowserRouter>
    <NavBar />

    <div>
      <Switch>
        <Route exact path="/todos">
          <ToDos />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>

)

export default App
