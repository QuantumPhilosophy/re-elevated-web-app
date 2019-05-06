import React from "react";
import "./style.css";

function Search({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="search-wrap">
      <div className="input-group mb-3">
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search Here"
          name="q"
          onChange={handleInputChange}
          required
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-outline-secondary"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          >
            Search
            <i className="fas fa-cannabis" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
