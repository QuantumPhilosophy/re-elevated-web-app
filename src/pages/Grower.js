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
    MerchantInfo: [],
    randomThree: [],
    grower_id: this.props.location.state.userInfo.id,
    merchantList: [],
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
    this.callMerchantdb();

    // grab a list of growers
    API.getMerchants().then(results => {
      console.log("merchants list", results.data);
      this.setState({
        merchantList: results.data
      });
    });

    //TODO:I am not sure if the code below is working or not because my array was empty for the results.data so I couldnt reference the key for its value from our database. But for sure this code will render 3 cards and spit out random indexes
    // grab a couple most recent reviews written about this grower
    API.getReviewsOnGrower(this.state.grower_id).then(results => {
      // results is a list of reviews about the merchant
      console.log("reviews on this grower", results.data);
      let review = results.data;
      let reviews = [];

      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * results.data.length);
        reviews.push(review[random]);
      }
      this.setState({
        growerReviews: results.data,
        randomGrowerReview: reviews
      });
    });
  

  //this function generate 3 random grower displaying name and email
  callMerchantdb = () => {
    API.getGrowers().then(res => {
      console.log("data for render", res.data.length);
      let merchant = res.data;
      let merchants = [];

      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * res.data.length);
        merchants.push(merchant[random]);
      }

      this.setState({
        MerchantInfo: merchant,
        randomThree: merchants
      });
    });
  };
  //this on click passes the id to the ../components/Grower/index.js
  //TODO: I was thinking by passing the user id in this case the grower's id that we would use that to grab display their info when clicking on the individual row?
  //TODO: if you go to localhost//:3030/merchant/viewgrowers when u click on the grower it console logs its id, I wasnt sure how I could grab their rating, reviews etc.
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
          {this.state.randomThree.map(merchant => (
            <MerchantInfo
              name={merchant.merchant_name}
              email={merchant.merchant_email}
              id={merchant.id}
              handleOnClick={this.handleOnClick}
              className="column"
            />
          ))}
        </div>
        <Row>
          <Col size="md-6">
            {/* //TODO: FIXME: //I was not able to get the info for these maybe
            because I didn't have any data in the database, but essentially this
            will render 3 random cards about the grower reviews//
            //============================================================// */}
            {/* <div>
              {this.state.randomGrowerReview.map(review => (
                <GrowerReview
                  merchId={review.merchant_id}
                  growerId={review.grower_id}
                  grower_review={review.grower_review}
                />
              ))}
            </div> */}
            {/* //============================================================// */}
          </Col>
          <Col size="md-6">
            {/* //TODO: FIXME: //I had the same problem here and was not able to get
            the info for these maybe because I didn't have any data in the
            database, but essentially this will render 3 random cards about the
            merchant reviews//
            //============================================================// */}
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
            {/* //============================================================// */}
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
