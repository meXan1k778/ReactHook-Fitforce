import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Countries from "./pages/Countries";
import Trainer from "./pages/Trainer";
import Trainers from "./pages/Trainers";

import "./App.scss";

function App() {

  // Hede all console
  const noOp = function() {}
console.log('window', window)
  window.console = {
    log: noOp,
    dir: noOp,
    error:noOp,
  };
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route exact path="/trainers"  component={Trainers} />
          <Route exact path="/trainer/:id" component={Trainer} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
