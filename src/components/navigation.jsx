import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <NavLink className="navbar-brand" to="/products">
              E-commerce
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/products"
                  >
                    Products <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/account">
                    My Account
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navigation;
