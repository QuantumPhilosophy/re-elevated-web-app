import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function GrowerReview({
  user_name,
  user_id,
  grower_id,
  grower_review,
  grower_rating
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h2>{user_name}</h2>
          <h4 className="font-italic">{grower_id}</h4>
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
  );
}
export default GrowerReview;
