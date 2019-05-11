import Review from "../components/ReviewBox";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";
import Nav from "../components/Nav";
import API from "../utils/API";

class Merchant extends Component {
  state = {
    GrowerInfo: []
  };

  handleReviewInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleReviewSubmit = event => {
    event.preventDefault();
    alert("reviewed");
  };

  componentDidMount() {
    console.log("state", this.props.location.state.userInfo);
    this.callGrowerdb();
  }

  callGrowerdb = () => {
    API.getGrower().then(res => {
      console.log("data for render", res.data);

      this.setState({
        GrowerInfo: res.data
      });
    });
  };
  handleOnClick = id => {
    console.log("id", id);
  };
  render() {
    return (
      <div>
        <Nav />
        <p>
          user_name {this.props.location.state.userInfo.merchant_name}
          <br />
          user_email {this.props.location.state.userInfo.merchant_email}
          <br />
          user_password {this.props.location.state.userInfo.merchant_password}
        </p>
        {this.state.GrowerInfo.map(grower => (
          <GrowerInfo
            name={grower.grower_name}
            email={grower.grower_email}
            id={grower.id}
            handleOnClick={this.handleOnClick}
          />
        ))}

        <Review
          handleReviewInput={this.handleInputChange}
          handleReviewSubmit={this.handleReviewSubmit}
          inputVal={this.state.inputVal}
        />
      </div>
    );
  }
}
export default Merchant;
