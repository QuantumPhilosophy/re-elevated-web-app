import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function GrowerReview({
  user_name,
  user_id,
  grower_id,
  grower_review,
  grower_rating
}) {
  return (
    <div className="row-width">
      <ListItem>
        <Row className="flex-wrap-reverse ">
          <Col size="md-8">
            <h2>Merchant:{user_name}</h2>
            <h4 className="font-italic">Growers ID:{grower_id}</h4>
          </Col>
        </Row>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <p>Rating: {grower_rating}</p>
            <p>
              {user_id} said that {grower_review}
            </p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default GrowerReview;
