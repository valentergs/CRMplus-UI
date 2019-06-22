import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import DashBoard from "./Components/Dashboard/DashBoard";
import Header from "./Components/Layout/Header";
import Usuarios from "./Components/Usuario/Usuarios";
import About from "./Components/Pages/About";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

// Contexts
import CrmplusState from "./Context/crmplus/crmplusState";
import AuthState from "./Context/auth/authState";

const App = () => {
  return (
    <AuthState>
      <CrmplusState>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route exact path="/usuarios" component={Usuarios} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </CrmplusState>
    </AuthState>
  );
};

export default App;
