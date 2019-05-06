import Review from "../components/ReviewBox";

import React, { Component } from "react";

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
