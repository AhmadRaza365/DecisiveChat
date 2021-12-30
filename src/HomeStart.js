import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Home from './Home';




function HomeStart() {
    return (
<>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/chat">
            <App/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/privacy">
            <Privacy/>
          </Route>

        </Switch>
      </Router>
    </>
    )
}

export default HomeStart
