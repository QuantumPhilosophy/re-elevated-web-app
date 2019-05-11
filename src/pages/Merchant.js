import Review from "../components/ReviewBox";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";
import Nav from "../components/Nav";
import API from "../utils/API";

class Merchant extends Component {
  state = {
    inputVal: ""
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
  }

  render() {
    return (
      <div>
        <Nav account_type = {this.props.location.state.userInfo.account_type} />
        <p> 
          user_name {this.props.location.state.userInfo.merchant_name}
          <br />
          user_email {this.props.location.state.userInfo.merchant_email}
          <br />
          user_password {this.props.location.state.userInfo.merchant_password}
        </p>
        <GrowerInfo />
        <Review
          handleReviewInput={this.handleInputChange}
          handleReviewSubmit={this.handleReviewSubmit}
          inputVal={this.state.inputVal}
        />
        <div className="navbari" id="navbarNav">
          <ul className="navi">
            <li className="li-item">
              <Link to="/">wishlist/Tried</Link>
            </li>
            <li className="li-item">
              <Link to="/">Reviews</Link>
            </li>
            <li className="li-item">
              <Link to="/">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Merchant;
