import React, { Component } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    address: "",
    email: "",
    loggedIn: false
    // redirect: null
  };
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   });
  // };

  // renderRedirect = () => {
  //   let accountType = this.state.account;
  //   if (accountType === "merchant") {
  //     return <Redirect to="/merchant" />;
  //   } else {
  //     return <Redirect to="/grower" />;
  //   }
  // };
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
      account_type: this.state.account
    })
      .then(function(response) {
        // this is where redirects happen after signing up
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
    this.setState({ account: event.target.value });
  }

  handleSubmit(event) {
    let accountType = this.state.account;

    event.preventDefault();
    API.createNewUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      account_type: this.state.account
    })
      .then(function(response) {
        // console.log("this is what ur console logging");
        console.log(accountType);

        //conidtional statement on checking for type account to redirect to specific page
        if (response.status === 200) {
          // update the state
          // renderRedirect()
          if (accountType === "merchant") {
            // redirectPage.setState({
            //   loggedIn: true,
            //   // user: response.data.user,
            //   redirectPage: "/merchant"
            // });
          } else {
            //   this.setState({
            //     redirectTo: "/grower"
            //   });
          }
        }
        //===============================//
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("You register as a: " + this.state.account);
  }
  render() {
    //redirecting page on submit click
    // if (this.state.redirectTo) {
    //   return <Redirect to={{ pathname: this.state.redirectTo }} />;
    // }
    //======================//
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
