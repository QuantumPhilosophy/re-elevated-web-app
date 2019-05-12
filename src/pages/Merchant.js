import Review from "../components/ReviewBox";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";
import { List } from "../components/List";
import { Row, Col } from "../components/Grid";
import Nav from "../components/Nav";
import API from "../utils/API";
import "./style.css";
import GrowerReview from "../components/GrowerReview";
import MerchantReview from "../components/MerchantReview";

class Merchant extends Component {
  state = {
    GrowerInfo: [],
    randomThree: [],
    merchant_id: this.props.location.state.userInfo.id,
    growerList: [],
    merchReviews: [],
    randomMerchReview: [],
    growerReviews: [],
    randomGrowerReview: [],
    accountType: this.props.account_type
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
    console.log("this is a:::", this.props.account_type);
    this.callGrowerdb();

    // grab a list of growers
    API.getGrowers().then(results => {
      console.log("growers list", results.data);
      this.setState({
        growerList: results.data
      });
    });

    // grab a couple most recent reviews about the merchant
    API.getMerchantReviews(this.state.merchant_id).then(results => {
      // results is a list of reviews about the merchant
      console.log("merchant reviews", results.data);
      let review = results.data;
      let reviews = [];

      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * results.data.length);
        reviews.push(review[random]);
      }
      this.setState({
        merchReviews: results.data,
        randomMerchReview: reviews
      });
    });

    // grab a couple most recent added reviews about grower
    API.getGrowerReviews(this.state.merchant_id).then(results => {
      console.log("grower reviews", results.data);
      console.log("data for render", results.data.length);
      let reviewList = results.data;
      let reviews = [];
      console.log("this is the list of reviews", reviewList);
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * results.data.length);
        reviews.push(reviewList[random]);
      }

      this.setState({
        growerReviews: reviewList,
        randomGrowerReview: reviews
      });
    });
  }

  callGrowerdb = () => {
    API.getGrowers().then(res => {
      console.log("data for render", res.data.length);
      let grower = res.data;
      let growers = [];

      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * res.data.length);
        growers.push(grower[random]);
      }

      this.setState({
        GrowerInfo: grower,
        randomThree: growers
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
        <div className="wrapper">
          {this.state.randomThree.map(grower => (
            <GrowerInfo
              name={grower.grower_name}
              email={grower.grower_email}
              id={grower.id}
              handleOnClick={this.handleOnClick}
              className="column"
            />
          ))}
        </div>
        <Row>
          <Col size="md-6">
            {/* <div>
              {this.state.randomGrowerReview.map(review => (
                <GrowerReview
                  merchId={review.merchant_id}
                  growerId={review.grower_id}
                  grower_review={review.grower_review}
                />
              ))}
            </div> */}
          </Col>
          <Col size="md-6">
            {/* <div>
              {this.state.randomMerchReview.map(review => (
                <MerchantReview
                  merchId={review.merchant_id}
                  growerId={review.grower_id}
                  merchant_review={review.merchant_review}
                  userId={review.user_id}
                />
              ))}
            </div> */}
          </Col>
        </Row>
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

//  <Nav account_type = {this.props.location.state.userInfo.account_type} />
//         {/* Here will be the three randomly picked out growers from growers table */}
//         <List>

//           {/* Pick three random growers from the DB */}
//         </List>

//         <List>

//           {/* Pick two most recent reviews about the merchant */}
//         </List>

//         <List>

//           {/* Pick two most recent reviews this merchant wrote about growers */}
//         </List>
