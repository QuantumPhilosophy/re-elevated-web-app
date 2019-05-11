import Review from "../components/ReviewBox";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";
import { List } from "../components/List"
import Nav from "../components/Nav";
import API from "../utils/API";

class Merchant extends Component {
  state = {
<<<<<<< HEAD
    GrowerInfo: []
=======
    merchant_id: this.props.location.state.userInfo.id,
    growerList: [],
    merchReviews: [],
    growerReviews: []
>>>>>>> 7f85ecaec0845f9c2db71c9c1005c87ad7f2f03f
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
    this.callGrowerdb();

    
    // grab a list of growers
    API.getGrowers().then(results => {
      console.log("growers list", results);
      this.setState({
        growerList: results
      })
    });

    // grab a couple most recent reviews about the merchant
    API.getMerchantReviews(this.state.merchant_id).then(results => {
      // results is a list of reviews about the merchant
      console.log("merchant reviews", results);
      this.setState({
        merchReviews: results
      })
    });

    // grab a couple most recent added reviews about grower
    API.getGrowerReviews(this.state.merchant_id).then(results => {
      console.log("grower reviews", results);
      this.setState({
        growerReviews: results
      })
    });
  }

  callGrowerdb = () => {
    API.getGrower().then(res => {
      console.log("data for render", res.data);

      this.setState({
        GrowerInfo: res.data
      });
    });
  };
  handleOnClick = id => {
    console.log("id", id);
  };
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Nav />
        <p>
          user_name {this.props.location.state.userInfo.merchant_name}
          <br />
          user_email {this.props.location.state.userInfo.merchant_email}
          <br />
          user_password {this.props.location.state.userInfo.merchant_password}
        </p>
        {this.state.GrowerInfo.map(grower => (
          <GrowerInfo
            name={grower.grower_name}
            email={grower.grower_email}
            id={grower.id}
            handleOnClick={this.handleOnClick}
          />
        ))}

        <Review
          handleReviewInput={this.handleInputChange}
          handleReviewSubmit={this.handleReviewSubmit}
          inputVal={this.state.inputVal}
        />
=======
        <Nav account_type = {this.props.location.state.userInfo.account_type} />
        {/* Here will be the three randomly picked out growers from growers table */}
        <List>

          {/* Pick three random growers from the DB */}
        </List>

        <List>

          {/* Pick two most recent reviews about the merchant */}
        </List>

        <List>

          {/* Pick two most recent reviews this merchant wrote about growers */}
        </List>
>>>>>>> 7f85ecaec0845f9c2db71c9c1005c87ad7f2f03f
      </div>
    );
  }
}
export default Merchant;
