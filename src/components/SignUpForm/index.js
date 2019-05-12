import React, { Component } from "react";
import Card from "../Card";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    address: "",
    email: "",
    loggedIn: false,
    redirect: false
  };
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ account: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    API.createNewUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      account_type: this.state.account
    })
      .then(response => {
        this.setState({
          redirect: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  //TODO: FIXME:not sure why when u signup and itredirects u to the login in page, it displays 2 login form not sure if thats a problem on your end or not
  render() {
    // redirecting page on submit click
    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div>
          <Nav />
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <div className="d-flex justify-content-center h-100">
                <Card title="Sign Up">
                  <div>
                    <div className="card-header" />
                    <form>
                      <div>
                        <select
                          value={this.state.account}
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
                          to="/"
                        />
                        <Link
                          type="button"
                          value="Login"
                          className="btn float-right login_btn m-1"
                          to="/"
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
}
export default SignUp;
