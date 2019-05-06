import React, { Component } from "react";
import Card from "../Card";
import "./style.css";
import axios from "axios";

class SignUp extends Component {
  state = {
    dob: "",
    username: "",
    password: "",
    email: "",
    name: "",
  };

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

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <Card title="Sign Up">
              <div>
                <div className="card-header" />
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date of Birth"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username to Display"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
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
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
