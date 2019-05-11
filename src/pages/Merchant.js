// import Review from "../components/ReviewBox";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";
import { Row, Col } from "../components/Grid";
import { List } from "../components/List";
import API from "../utils/API";

class Merchant extends Component {
  state = {
    merchant_id: 1,
    growerList: [],
    merchRevList: [],
    growerRevList: [],
    inputVal: ""
  };

  getMerchReview = merchid => {
    API.getMerchReview(merchid).then((results) => {
      console.log(results);
      this.setState({
        merchRevList: results
      });
    });

  };

  getGrowerReview = merchid => {
    API.getGrowerReview(merchid).then((results) => {
      console.log(results);

      this.setState({
        growerRevList: results
      });
    });

  };

  getGrowers() {
    API.getGrowers().then((results) => {
      console.log("grabbing growers", results)
      this.setState({
        growerList: results
      });
    });
  };

  render() {
    return (
      <div>
        {/* this row is for the grower section */}
        <Row className="flex-wrap-reverse">
          <Col size="md-12">
            <List>
              <p>GIVE ME SOMETHING</p>
              {/* need to do a query call, then grab info from the database and populate a list of 3 grower Info 
          
          for loop
            populate <GrowerInfo />

          */}
            </List>
          </Col>
        </Row>
        {/* this row displays the two columns for the list of reviews */}
        <Row className="flex-wrap-reverse">
          {/* list of merchant reviews */}
          <Col size="md-6">
            {/* {this.getMerchReview(this.state.merchant_id)} */}
          </Col>
          {/* list of grower review */}
          <Col size="md-6">
            {/* {this.getGrowerReview(this.state.merchant_id)} */}
          </Col>
        </Row>
        {/* this last row is for the ads */}
        <Row className="flex-wrap-reverse">
          {/* where to display the Ads for the merchants */}
          <Col size="md-12">

          </Col>
        </Row>
        {/* <Review
          handleReviewInput={this.handleInputChange}
          handleReviewSubmit={this.handleReviewSubmit}
          inputVal={this.state.inputVal}
        /> */}
      </div>
    );
  }
}
export default Merchant;
