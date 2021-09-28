import React, {Component}  from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import "./App.css";

export default function App() {


    return (
      <Router>
          <Switch>
              <Route  path='/contact'><Contact /></Route>
              <Route  path='/portfolio'><Portfolio /></Route>
              <Route exact path='/'><Home /></Route>
           </Switch>
  </Router>

    )
}

