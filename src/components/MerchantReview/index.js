import React, { Component } from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import API from "../../utils/API";
import "./style.css";

class MerchantReview extends Component {
  state = { 
    merchantId: this.props.merchantId,
    userId: this.props.userId,
    merchant_review: this.props.merchant_review,
    merchant_rating: this.props.merchant_rating,
    merchant_name: this.props.merchant_name,
    userName: ""
  };

  componentDidMount () {
    // Get the username
    API.getUser(this.state.userId).then(results => {
      this.setState({
        userName : results.data.user_name
      })
    })
    API.getMerchant(this.state.merchantId).then(results => {
      console.log("merchant", results)
      this.setState({
        merchant_name : results.data[0].merchant_name
      })
    })
  }

  render() {
    return (
      <div>
        <ListItem className="customColor">
          <Row className="flex-wrap-reverse">
            <Col size="md-12">
              <h2>Customer : {this.state.userName}</h2>
              <h4 className="font-italic">Merchant: {this.state.merchant_name}</h4>
            </Col>
          </Row>
          <Row className="flex-wrap-reverse">
            <Col size="md-12">
              <p>Rating   {this.state.merchant_rating}</p>
              <p>
                {this.state.merchant_review}
              </p>
            </Col>
          </Row>
        </ListItem>
      </div>
    );
  }
}
export default MerchantReview;
