import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function GrowerReview({ merchId, growerId, grower_review }) {
  return (
    <div className="row-width">
      <ListItem>
        <Row className="flex-wrap-reverse ">
          <Col size="md-8">
            <h2>Merchant:{merchId}</h2>
            <h4 className="font-italic">Growers ID:{growerId}</h4>
          </Col>
        </Row>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            {/* <p>Rating: {grower_rating}</p> */}
            <p>
              {merchId} said: {grower_review}
            </p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default GrowerReview;
