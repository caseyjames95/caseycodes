import React from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Home from './components/About'
import WebDev from './components/WebDev'
import GameDev from './components/GameDev'
import Contact from './components/Contact'

import './styles/index.css'

function App(props) {
  return (
    <Container>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } {...props} />
            <Route exact path="/WebDev" component={ WebDev } {...props} />
            <Route exact path="/GameDev" component={ GameDev } {...props} />
            <Route exact path="/Contact" component={ Contact } {...props} />
          </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
