import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function GrowerInfo({ id, name, handleOnClick, id }) {
  console.log("props: ", id);
  return (
    <div onClick={() => handleOnClick(id)} className="grower-container">
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-12">
            <p>Grower: {id}</p>
          </Col>
        </Row>
        {/* <Col size="md-4">
            <p>Rating: {"props.grower_avg_rating"}</p>
          </Col> */}
        <Row>
          <Col size="md-12">
            <p>Product: {name}</p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}
export default GrowerInfo;
