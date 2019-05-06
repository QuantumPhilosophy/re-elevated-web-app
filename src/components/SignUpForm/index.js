import React, { Component } from "react";
import Card from "../Card";
import "./style.css";

class SignUp extends Component {
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
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username to Display"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" />
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      value="SignUp"
                      className="btn float-right login_btn"
                    />
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
