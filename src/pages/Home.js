import React, { Component } from "react";

import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
import Strain from "../components/StrainCard";
// import Login from "../components/Login";
import { List } from "../components/List";
import { Container, Col, Row } from "../components/Grid";
import API from "../utils/API";
import Review from "../components/ReviewBox";
// import { EventEmitter } from "events";

class Home extends Component {
  state = {
    strains: [],
    message: "Search For A Strain!"
  };
  handleReviewInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleReviewSubmit = event => {
    event.preventDefault();
    alert("reviewed");
  };
  handleFormSubmit = event => {
    event.preventDefault();
    alert("submitted");
  };

  handleStrainSave = () => {};
  //   const strain = this.state.strains.find(strain => strain.id === id);
  //   //THESE ARE DUMMY KEY VALUE PAIR FOR OUR APIs, I WAS NOT SURE SINCE WE DONT HAVE OUR API UP AND RUNNING//
  //   API.saveStrain({
  //     id: strain.id,
  //     name: strain.name,
  //     label: strain.label,
  //     description: strain.description,
  //     positive: strain.positive,
  //     negative: strain.negative,
  //     medical: strain.medical,
  //     rating: strain.rating,
  //     flavor: strain.flavor,
  //     race: strain.race,
  //     link: strain.link
  //   }).then(() => this.getStrains());
  // };

  render() {
    return (
      <div>
      <div>
        <button onClick={() => this.getApiUser()}>Test Button</button>
      </div>
      <div>
        <SearchBox
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />
        <Container>
          <Row>
            <Col size="md-12">
              <Card title="Results">
                {/* JUST A DUMMY ROUTE TO API SINCE IDK THE EXACT PATH TO ACCESS DATA*/}
                {this.state.strains.length ? (
                  <List>
                    {/* SAME FOR THE ONES BELOW*/}
                    {this.state.strains.map(strain => (
                      <Strain
                        key={strain.id}
                        strain_id={strain.id}
                        strain_name={strain.name}
                        strain_label={strain.label}
                        strain_race={strain.race}
                        link={strain.link}
                        strain_flavor={strain.flavor}
                        strain_description={strain.description}
                        strain_medical={strain.medical}
                        strain_avg_rating={strain.rating}
                        strain_negative={strain.negative}
                        strain_positive={strain.positive}
                        Button={() => (
                          <button
                            onClick={() => this.handleStrainSave(strain.id)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                      />
                    ))}
                    <Review
                      handleReviewInput={this.handleInputChange}
                      handleReviewSubmit={this.handleReviewSubmit}
                      inputVal={this.state.inputVal}
                    />
                  </List>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </Col>
          </Row> 
        </Container>
      </div>
      </div>
    );
  }
}
export default Home;
