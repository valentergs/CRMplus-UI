import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/Header";
// import Usuario from "./Components/Usuario/Usuario";
import Usuarios from "./Components/Usuario/Usuarios";
import About from "./Components/pages/About";

import CrmplusState from "./Context/crmplus/crmplusState";

const App = () => {
  return (
    <CrmplusState>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Usuarios} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </CrmplusState>
  );
};

export default App;
