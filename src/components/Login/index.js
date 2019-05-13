import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Card from "../Card";
import "./style.css";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Login extends Component {
  state = {
    username: "",
    password: "",
    accountType: "",
    checked: false,
    redirect: false,
    userInfo: {}
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  rememberchecked = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  submitResponse = event => {
    event.preventDefault();
    console.log("You pressed SubmitBTN");
    API.login({
      username: this.state.username,
      password: this.state.password,
      accountType: this.state.accountType
    })
      .then((response) => {
        // here is where you would redirect after successful login
        console.log("Working", response.data);
        response.data.accountType = this.state.accountType
        this.setState({
          redirect: true,
          userInfo: response.data
        })
      })
      .catch(function(error) {
        console.log("NOT WORKING", error);
      });
  };

  constructor(props) {
    super(props);
    this.state = { accountType: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ accountType: event.target.value });
  }

  render() {
    if (this.state.redirect && this.state.accountType === "merchant") {
      return (
        <Redirect 
        to={{ 
          pathname: "/merchant",
          state: {
            userInfo: this.state.userInfo 
          }
        }} />);
    } else if (this.state.redirect && this.state.accountType === "grower") {
      return <Redirect 
        to={{ 
          pathname: "/grower",
          state: { 
            userInfo: this.state.userInfo 
          }
        }} />;
    }
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <Card title="Login">
              <div>
                <div className="card-header">
                  <div className="d-flex justify-content-end social_icon">
                    <span>
                      <i className="fab fa-facebook-square" />
                    </span>
                    <span>
                      <i className="fab fa-google-plus-square" />
                    </span>
                    <span>
                      <i className="fab fa-twitter-square" />
                    </span>
                  </div>
                </div>
                <form > 
                  {/* this goes above in form tag if needed onSubmit={this.handleSubmit} */}
                  <div>
                    <select
                      value={this.state.accountType}
                      onChange={this.handleChange}
                      placeholder="You Are A"
                    >
                      <option value="">Register as a...</option>
                      <option value="merchant">Merchant</option>
                      <option value="grower">Grower</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user fa-lg" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key fa-lg" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="row align-items-center remember remembercheck">
                    <input
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                      onChange={this.rememberchecked}
                    />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                      onClick={this.submitResponse}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <a href="/signup">Sign Up</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
