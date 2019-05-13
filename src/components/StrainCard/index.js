import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function Strain({
  link,
  strain_name,
  strain_label,
  strain_race,
  strain_flavor,
  strain_positive,
  strain_negative,
  strain_medical,
  strain_descrition,
  strain_avg_rating,
  Button
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h2>{strain_label}</h2>
          <h4 className="font-italic">{strain_name}</h4>
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <p>Race: {strain_race}</p>
          <p>Flavor: {strain_flavor}</p>
          <p>Positive: {strain_positive}</p>
          <p>Negative: {strain_negative}</p>
          <p>Medical Info: {strain_medical}</p>
          <p>Description: {strain_descrition}</p>
        </Col>
        <Col size="md-4">Average {strain_avg_rating}</Col>
      </Row>
    </ListItem>
  );
}

export default Strain;
