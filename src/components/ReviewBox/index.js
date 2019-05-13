import React, { Component } from "react";
import "./style.css";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import API from "../../utils/API";

class Review extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value : "Rating",
      comment: ""
    };
  }
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {
    return (
      <div className="box-container">
        <div className="input-group m-3">
          <input
            className="form-control inputBox"
            name="comment"
            type="text"
            value={this.props.comment}
            onChange={this.props.handleReviewInput}
            placeholder="Write a comment..."
          />
        </div>
        <div className="input-group-append">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="btn btn-outline-secondary"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2">
            <DropdownToggle>
              {this.state.value}
              <i className="fas fa-cannabis" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.select}>1</DropdownItem>
              <DropdownItem onClick={this.select}>2</DropdownItem>
              <DropdownItem onClick={this.select}>3</DropdownItem>
              <DropdownItem onClick={this.select}>4</DropdownItem>
              <DropdownItem onClick={this.select}>5</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <button
            onClick={this.props.handleReviewSubmit}
            type="submit"
            className="btn btn-outline-secondary"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          >
            Post Review
          </button>
        </div>
      </div>
    );
  }
}
export default Review;
