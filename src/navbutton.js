import React from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Navbutton() {
  return (
    <Router>
      <div>

        <div className="nav">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <div class="menu">
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/planner">planner</a></li>
            <li><a href="/team">team</a></li>
            <li><a href="/contact">contact</a></li>
          </div>

        </div>
        <Switch>
          <Route exact path="/about">
            <div>Write later.</div>
          </Route>
          <Route exact path="/planner">
            <div>Write later.</div>
          </Route>
          <Route exact path="/team">
            <div>Write later.</div>
          </Route>
          <Route exact path="/contact">
            <div>Write later.</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}