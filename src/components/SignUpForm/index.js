import React, { Component } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import API from "../../utils/API";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    address: "",
    email: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  axiosPost = () => {
    API.createNewUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      account_type: this.state.value
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("You register as a: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <Card title="Sign Up">
                <div>
                  <div className="card-header" />
                  <form>
                    <div>
                      <select
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="You Are A"
                      >
                        <option value="">Register as a...</option>
                        <option value="merchant">Merchant</option>
                        <option value="grower">Grower</option>
                      </select>
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend" />
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div className="input-group form-group">
                      <div className="input-group-prepend" />
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend" />
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend" />
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn float-right login_btn m-1"
                      />
                      <Link
                        type="button"
                        value="Login"
                        className="btn float-right login_btn m-1"
                        to="/Login"
                      >
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
