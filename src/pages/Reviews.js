import React, { Component } from "react";
import GrowerReview from "../components/GrowerReview";
import MerchantReview from "../components/MerchantReview";
import "./style.css";
class Review extends Component {
  render() {
    return (
      <div className="review-container">
        <GrowerReview />
        <MerchantReview />
      </div>
    );
  }
}
export default Review;
