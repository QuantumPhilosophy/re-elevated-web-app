import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Ad from "../components/Ad";
import { Container, Col, Row } from "../components/Grid";
import Nav from "../components/Nav";

//TODO: seems like we are able to upload to firebase, but have not grabbed the data from firebase to display
class Ads extends Component {
  state = {
    userInfo: this.props.location.state.userInfo,
    accountType: this.props.location.state.accountType
  }
  render() {
    return (
      <div>
        <Nav 
          accountType = {this.state.accountType}
          id={this.state.userInfo.id} 
          userInfo={this.state.userInfo}
        />
        <Container>
        <Jumbotron>
          <Row>
            <Col size="md-12">
              <h1>UPLOAD YOUR ADs</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Ad />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}
export default Ads;
