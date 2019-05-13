import React, { Component } from "react";
import GrowerReview from "../components/GrowerReview";
import MerchantReview from "../components/MerchantReview";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";

import "./style.css";

class Review extends Component {

  state = {
    growerReview: [],
    merchantReview: [],
    userInfo: this.props.location.state.userInfo,
    accountType: this.props.location.state.accountType,
  };


  componentDidMount() {
    API.getMerchantReviews(this.state.userInfo.id).then(results => {
      // results is a list of reviews about the merchant
      console.log("returned merchants reviews", results)
      this.setState({
        merchantReview: results.data,
      });
    });
  
  
    // grab a couple most recent added reviews about grower
    API.getGrowerReviews(this.state.userInfo.id).then(results => {
      console.log("returned grower reviews", results);
      this.setState({
        growerReview: results.data
      });
    });
  }

  render() {
    return (
      <div>
        <Nav 
          accountType={this.state.userInfo.accountType}
          id={this.state.userInfo.id}  
          userInfo= {this.state.userInfo}
        />
        <Container className="review-container">
          <Row className="row-width d-flex flex-wrap">
            <Col size="6">
              {this.state.growerReview.map(review => (
                <GrowerReview
                  merchId={this.state.id}
                  grower_rating = {review.grower_rating}
                  growerId={review.grower_id}
                  grower_review={review.grower_review}
                />
              ))}
            </Col>
            <Col size="6">
              {this.state.merchantReview.map(review => (
                <MerchantReview
                  merchantId={this.state.id}
                  merchant_rating={review.merchant_rating}
                  merchant_review={review.merchant_review}
                  userId={review.user_id}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Review;
