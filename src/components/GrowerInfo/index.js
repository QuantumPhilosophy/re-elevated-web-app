import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function GrowerInfo(props) {
  return (
    <div onClick= {(e) => props.handleOnClick(props.id)} className="grower-container">
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-12">
            <p>Grower: {props.name}</p>
          </Col>
        </Row>
          <Col size="md-12">
            <p>Rating: {props.grower_avg_rating ? props.grower_avg_rating : "No one has rated yet!"}</p>
          </Col>
        <Row>
          <Col size="md-12">
            <p>Email: {props.email}</p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default GrowerInfo;
