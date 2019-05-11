import GrowerInfo from "../components/Grower";
import React, { Component } from "react";

class ViewGrower extends Component {
  state = {
    merchant_id: "",
    grower: []
  };
  // getGrowerInfo = () => {
  //   API.getGrowerInfo()
  //     .then(res =>
  //       this.setState({
  //         growers: res.data
  //       })
  //     )
  //     //if there is no value for books, then the message on the UI will displaying No new books Found Try a Different Query
  //     .catch(() =>
  //       this.setState({
  //         grower: [],
  //       })
  //     );
  // };
  render() {
    return (
      <div>
        <GrowerInfo />
      </div>
    );
  }
}
export default ViewGrower;
