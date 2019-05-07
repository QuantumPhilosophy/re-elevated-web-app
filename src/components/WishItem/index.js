import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function WishItem({
  strain_id,
  strain_name,
  strain_label_rating,
  strain_label
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h2>
            {strain_label} {strain_name}
          </h2>
          <h4 className="font-italic">{strain_id}</h4>
        </Col>
      </Row>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <p>Rating: {strain_label_rating}</p>
        </Col>
      </Row>
    </ListItem>
  );
}
export default WishItem;
