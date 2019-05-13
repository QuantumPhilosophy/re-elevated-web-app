import React, { Component } from "react";
import GrowerInfo from "../components/GrowerInfo";
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
    userInfo: this.props.location.state.userInfo,
    accountType: this.props.location.state.userInfo.accountType,
    growerList: [],
    merchReviews: [],
    randomMerchReview: [],
    growerReviews: [],
    randomGrowerReview: [],
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
    console.log("this is a", this.props.account_type);
    this.callGrowerdb();
    
    //TODO:I am not sure if the code below is working or not because my array was empty for the results.data so I couldnt reference the key for its value from our database. But for sure this code will render 3 cards and spit out random indexes
    // grab a couple most recent reviews about the merchant
    API.getMerchantReviews(this.state.userInfo.id).then(results => {
      // results is a list of reviews about the merchant
      let review = results.data;
      let reviews = [];
      console.log("returned merchants reviews from db", review)
      for (let i = 0; i < 2; i++) {
        let random = Math.floor(Math.random() * results.data.length);
        if (review[random]) {
          reviews.push(review[random]);
        }
      }
      console.log("returned merchants reviews", reviews)
      this.setState({
        merchReviews: results.data,
        randomMerchReview: reviews
      });
    });
    // grab a couple most recent added reviews about grower
    API.getGrowerReviews(this.state.userInfo.id).then(results => {
      let reviewList = results.data;
      let reviews = [];
      for (let i = 0; i < 2; i++) {
        let random = Math.floor(Math.random() * results.data.length);
        if (reviewList[random]) {
          reviews.push(reviewList[random]);
        }
      }
      console.log("returned grower reviews", reviews)
      this.setState({
        growerReviews: reviewList,
        randomGrowerReview: reviews
      });
    });
  }

  //this function generate 3 random grower displaying name and email
  callGrowerdb = () => {
    API.getGrowers().then(res => {
      let grower = res.data;
      let growers = [];

      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * res.data.length);
        if (grower[random]) {
          growers.push(grower[random]);
        }
      }
      this.setState({
        growerList: res.data,
        GrowerInfo: grower,
        randomThree: growers
      });
      
    });
  };
  //this on click passes the id to the ../components/Grower/index.js
  //TODO: I was thinking by passing the user id in this case the grower's id that we would use that to grab display their info when clicking on the individual row?
  //TODO: if you go to localhost//:3030/merchant/viewgrowers when u click on the grower it console logs its id, I wasnt sure how I could grab their rating, reviews etc.
  handleOnClick = growerid => {
    console.log("handleonClick growerid:", growerid);
    this.props.history.push({
      pathname: "/merchant/growerinfo",
      state: { 
        growerId: growerid, 
        userInfo: this.props.location.state.userInfo,
        accountType: this.props.location.state.userInfo.accountType,
      }
    });
  };

  render() {
    return (
      <div>
        <Nav 
          accountType = {this.state.accountType}
          id={this.state.userInfo.id} 
          userInfo={this.state.userInfo}
        />
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
            {/* //TODO: FIXME: //I was not able to get the info for these maybe
            because I didn't have any data in the database, but essentially this
            will render 3 random cards about the grower reviews//
            //============================================================// */}
            <div>
              {this.state.randomGrowerReview.map(review => (
                <GrowerReview
                  merchId={this.state.userInfo.id}
                  grower_rating = {review.grower_rating}
                  growerId={review.grower_id}
                  grower_review={review.grower_review}
                />
              ))}
            </div>
            {/* //============================================================// */}
          </Col>
          <Col size="md-6">
            {/* //TODO: FIXME: //I had the same problem here and was not able to get
            the info for these maybe because I didn't have any data in the
            database, but essentially this will render 3 random cards about the
            merchant reviews//
            //============================================================// */}
            <div>
              {this.state.randomMerchReview.map(review => (
                <MerchantReview
                  merchant_name={review.merchant_name}
                  merchantId={this.state.userInfo.id}
                  merchant_rating={review.merchant_rating}
                  merchant_review={review.merchant_review}
                  userId={review.user_id}
                />
              ))}
            </div>
            {/* //============================================================// */}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Merchant;
