import Review from "../components/ReviewBox";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";

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
  render() {
    return (
      <div>
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
