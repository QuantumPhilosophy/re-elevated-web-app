import React, { Component } from "react";
import Card from "../Card";
import "./style.css";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    checked: false
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
    })
  }

  axiosPosty = () => {

    axios.post("localhost:3030/api", {
      username: this.state.username,
      password: this.state.password,
      // checked: this.state.checked,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
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
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
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
                  <input type="checkbox"
                    name="checkbox"
                    value={this.state.checkbox}
                    onChange={this.rememberchecked} />
                  Remember Me
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                    onClick={this.axiosPosty}>
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
    );
  }
}
export default Login;
