import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './components/layout/Index'

import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div class="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
