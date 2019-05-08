import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function GrowerInfo({ grower_name, grower_email, grower_avg_rating }) {
  return (
    <div className="grower-container">
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-4">
            <p>Grower: {grower_name}</p>
          </Col>
          <Col size="md-4">
            <p>Rating: {grower_avg_rating}</p>
          </Col>
          <Col size="md-4">
            <p>Email: {grower_email}</p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default GrowerInfo;
