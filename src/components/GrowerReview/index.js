import React, { Component } from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import API from "../../utils/API";

class GrowerReview extends Component {
  state = { 
    merchId: this.props.merchId,
    growerId: this.props.growerId,
    grower_rating: this.props.grower_rating, 
    grower_review: this.props.grower_review,
    userName: "",
    merchant_name: ""
  }

  componentDidMount () {
    // Get the username
    API.getGrower(this.state.growerId).then(results => {
      this.setState({
        userName : results.data[0].grower_name
      })
    })
    API.getMerchant(this.state.merchId).then(results => {
      console.log("merchant", results)
      this.setState({
        merchant_name : results.data[0].merchant_name
      })
    })
  }

  render() {
    return (
      <div>
        <ListItem>
          <Row className="flex-wrap-reverse ">
            <Col size="md-12">
              <h2>Merchant : {this.state.merchant_name}</h2>
              <h4 className="font-italic">Grower : {this.state.userName}</h4>
            </Col>
          </Row>
          <Row className="flex-wrap-reverse">
            <Col size="md-12">
              <p>Rating : {this.state.grower_rating}</p>
              <p>
                {this.state.grower_review}
              </p>
            </Col>
          </Row>
        </ListItem>
      </div>
    );
  }
}
export default GrowerReview;
