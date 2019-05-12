import GrowerInfo from "../components/Grower";
import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import "./style.css";
class View extends Component {
  state = {
    merchant_id: "",
    GrowerInfo: []
  };
  componentDidMount() {
    this.callGrowerdb();
  }
  callGrowerdb = () => {
    API.getGrowers().then(res => {
      console.log("data for render", res.data);
      let grower = res.data;

      this.setState({
        GrowerInfo: grower
      });
    });
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="wrapper-view">
          {this.state.GrowerInfo.map(grower => (
            <GrowerInfo
              name={grower.grower_name}
              email={grower.grower_email}
              id={grower.id}
              // this handleOnclick is grabbing the id of the user, but needs to redirect to a new page that shows the information of the grower
              handleOnClick={this.handleOnClick}
              className="column"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default View;
