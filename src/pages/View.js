import GrowerInfo from "../components/GrowerInfo";
import Review from "../components/ReviewBox";
import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import "./style.css";

class View extends Component {
  state = {
    merchant_id: "",
    GrowerInfo: [],
    userInfo: this.props.location.state.userInfo,
    accountType: this.props.location.state.accountType,
  };

  componentDidMount() {
    this.callGrowerdb();
  }

  callGrowerdb = () => {
    API.getGrowers().then(res => {
      console.log("data for render", res.data);
      let grower = res.data;
      this.setState({
        GrowerInfo: grower
      });
    });
  };

  handleOnClick = growerid => {
    console.log("handleonClick growerid:", growerid);
    this.props.history.push({
      pathname: "/merchant/growerinfo",
      state: { 
        growerId: growerid, 
        account_type: "merchant"
      }
    });
  };

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
        <div className="wrapper-view">
          {this.state.GrowerInfo.map(grower => (
            <GrowerInfo
              name={grower.grower_name}
              email={grower.grower_email}
              id={grower.id}
              // this handleOnclick is grabbing the id of the user, but needs to redirect to a new page that shows the information of the grower
              handleOnClick={this.handleOnClick}
              className="column"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default View;
