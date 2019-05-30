import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        {/* <h3>This is a HEADER</h3> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            CRMplus
          </a>
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
                <a href="#" className="nav-link">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Relatorio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Forecast
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
