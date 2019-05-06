import React from "react";
import "./style.css";
function Review({ handleReviewInput, handleReviewSubmit, inputVal }) {
  return (
    <div className="box-container">
      <div className="input-group m-3">
        <input
          className="form-control inputBox"
          id=""
          type="text"
          value={inputVal}
          onChange={handleReviewInput}
          placeholder="Write a comment..."
        />
      </div>
      <div className="input-group-append">
        <button
          onClick={handleReviewSubmit}
          type="submit"
          className="btn btn-outline-secondary"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        >
          Comment
          <i className="fas fa-cannabis" />
        </button>
      </div>
    </div>
  );
}
export default Review;
