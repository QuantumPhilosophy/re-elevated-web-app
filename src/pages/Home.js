import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Form from "../components/Form";
import Review from "../components/ReviewBox";
import StrainCard from "../components/StrainCard";
import Login from "../components/Login";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class Home extends Component {
  state = {};
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("submitted");
  };

  render() {
    return (
      <div>
        <Review
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />
        <Login />
      </div>
    );
  }
}
export default Home;
