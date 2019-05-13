import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBox";
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
    console.log(this.props);
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  render() {
    // TODO: The Nav is not rendering correctly, because this.props.account_type is undefined and it prevents the nav links from rendering
    if (this.props.accountType === "merchant") {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
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
                    window.location.pathname === "/merchant"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={{
                    pathname: "/merchant",
                    state: {
                      userInfo: this.props.userInfo,
                      accountType: this.props.accountType
                    }
                  }}
                >
                  Summary
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={
                    window.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={{
                    pathname: "/merchant/viewgrowers",
                    state: {
                      userInfo: this.props.userInfo,
                      accountType: this.props.accountType
                    }
                  }}
                  // id = {this.props.id}
                >
                  View Growers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={
                    window.location.pathname === "/reviews"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={{
                    pathname: "/merchant/reviews",
                    state: {
                      userInfo: this.props.userInfo, 
                      accountType: this.props.accountType
                    }
                  }}
                  // id = {this.props.id}
                >
                  View Reviews
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
                  to={{
                    pathname: "/merchant/ads",
                    state: {
                      userInfo: this.props.userInfo,
                      accountType: this.props.accountType
                    }
                  }}
                >
                  Manage Ads
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
                  to="/"
                >
                  Log Out
                </Link>
              </li>
              {/* <li>
                <Search
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </li> */}
            </ul>
          </div>
        </nav>
      );
    } else if (this.props.accountType === "grower") {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
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
            {/* EVERYTHING BELOW THIS NEEDS TO BE DYNAMIC */}
            {/* Load in as merchant */}

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
                    window.location.pathname === "/reviews"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/reviews"
                >
                  Reviews
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
              {/* <li>
                <Search
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </li> */}
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-cannabis" />
            Elevate
          </Link>
        </nav>
      );
    }
  }
}
export default Nav;
