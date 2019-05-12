import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function MerchantReview({
  userId,
  merchantId,
  merchant_review,
  merchant_rating
}) {
  return (
    <div className="row-width">
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h2>Customer:{userId}</h2>
            <h4 className="font-italic">Merchant ID: {merchantId}</h4>
          </Col>
        </Row>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <p>Rating: {merchant_rating}</p>
            <p>
              {userId} said that:
              <br />
              {merchant_review}
            </p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default MerchantReview;
