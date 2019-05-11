import Review from "../components/ReviewBox";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import GrowerInfo from "../components/Grower";
import { List } from "../components/List"
import Nav from "../components/Nav";
import API from "../utils/API";

class Merchant extends Component {
  state = {
    merchant_id: this.props.location.state.userInfo.id,
    growerList: [],
    merchReviews: [],
    growerReviews: []
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

  render() {
    return (
      <div>
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
        
      </div>
    );
  }
}
export default Merchant;
