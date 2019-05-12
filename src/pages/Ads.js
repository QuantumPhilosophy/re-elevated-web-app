import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Ad from "../components/Ad";
import { Container, Col, Row } from "../components/Grid";

//TODO: seems like we are able to upload to firebase, but have not grabbed the data from firebase to display
class Ads extends Component {
  render() {
    return (
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
    );
  }
}
export default Ads;
