import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";

import { Container, Col, Row } from "../components/Grid";
class Ads extends Component {
    render() {
        return (

            <Container>
                <Jumbotron>
                    <Row>
                        <Col size="md-12">
                            <h1>
                                UPLOAD YOUR ADs
                        </h1>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>


        )
    }
}
export default Ads;