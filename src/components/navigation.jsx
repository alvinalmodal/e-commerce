import React, { Component } from "react";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">
              E-commerce
            </a>
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
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Products <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Account
                  </a>
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
