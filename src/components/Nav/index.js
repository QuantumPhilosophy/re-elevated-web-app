import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from "../ReviewBox";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("submitted");
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-cannabis" />
          Elevate
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/tried"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/tried"
              >
                Tried
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/wishlist"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/wishlist"
              >
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/merchant"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/merchant"
              >
                Merchant
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/signup"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <div className="nav-search">
            <Review
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
