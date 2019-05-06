//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code because there is a refence to the React we will need it to be imported
import React from "react";
//the specific row and col objects are imported from the Grid folder found inside the component folder
import { Col, Row, Container } from "../components/Grid";
// jumbotron is imported in taking in the value of the divs
import Jumbotron from "../components/Jumbotron";

// this funtion fires off the 404 page when no match is shown it imports the Container, Row, and Col components from the Grid file for the use of the grid system
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
//  NoMatch is exported
export default NoMatch;
