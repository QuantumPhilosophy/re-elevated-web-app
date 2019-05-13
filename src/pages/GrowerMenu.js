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

class GrowerMenu extends Component {
  state = {
    grower_id: this.props.location.state.userInfo.id,
    GrowerMenu: [],
    accountType: this.props.account_type
  };
  componentDidMount() {
    console.log("state", this.props.location.state.userInfo);
    console.log("this is a:::", this.props.account_type);
    this.callGrowerMenu();
  }
  callGrowerMenu = () => {
    API.getGrowerMenu().then(res => {
      console.log("grower menu items", res.data);
      let menulist = res.data;
      this.setState({
        GrowerMenu: menulist
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
        <div className="wrapper">
          {this.state.GrowerMenu.map(product => (
            <MerchantInfo
              name={product.strain_menu_items}
              id={product.id}
              handleOnClick={this.handleOnClick}
              className="column"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default GrowerMenu;
