import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">
          CRMplus
        </Link>
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usuarios">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Acesso autorizado!
                </Link>
              </li>
            ) : (
              <span className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </span>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
