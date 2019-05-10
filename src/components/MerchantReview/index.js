import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function MerchantReview({
  user_name,
  user_id,
  merchant_id,
  merchant_review,
  merchant_rating
}) {
  return (
    <div className="row-width">
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h2>Custy:{user_name}</h2>
            <h4 className="font-italic">Merchant ID: {merchant_id}</h4>
          </Col>
        </Row>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <p>Rating: {merchant_rating}</p>
            <p>
              {user_id} said that {merchant_review}
            </p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default MerchantReview;
