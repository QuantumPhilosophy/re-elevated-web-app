import React, { Component } from "react";
import { List } from "../components/List";
import Review from "../components/ReviewBox";
import Nav from "../components/Nav";
import GrowerInfo from "../components/GrowerInfo";
import API from "../utils/API";

class Grower extends Component {
  state = {
    growerId: this.props.location.state.growerId,
    review: "",
    rating: 0,
    growerInfo: [],
    userInfo: this.props.location.state.userInfo,
    accountType: this.props.location.state.accountType,
  }

  componentDidMount() {
    console.log("populating page")
    this.callGrowerdb();
  }

  callGrowerdb = () => {
    API.getGrower(this.state.growerId).then(res => {
      console.log("single grower data for render", res.data);
      let grower = res.data;
      this.setState({
        growerInfo: grower
      });
    }) 
  };

  handleReviewInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleReviewSubmit = event => {
    // post new review!
    API.post({
      
    })
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
          {this.state.growerInfo.map(grower => (
            <List>
              <GrowerInfo
                name={grower.grower_name}
                email={grower.grower_email}
                id={grower.id}
                // this handleOnclick is grabbing the id of the user, but needs to redirect to a new page that shows the information of the grower
                handleOnClick={this.handleOnClick}
                className="column"
              />
            </List>
          ))}
        </div>
        <Review

          handleReviewInput={this.handleInputChange}
          handleReviewSubmit={this.handleReviewSubmit}
          inputVal={this.state.inputVal}
        />
      </div>
    )
  }
}
export default Grower
