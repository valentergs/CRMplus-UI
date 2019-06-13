import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        {/* <h3>This is a HEADER</h3> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/">CRMplus</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
