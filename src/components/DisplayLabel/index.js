import React from "react";

function DisplayLabel({
  strain_name,
  label_name,
  strain_label_rating,
  strain_label_description
}) {
  return (
    <div>
      <h2>
        <a
          class="dish2lay-toggle"
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {label_name}
        </a>
      </h2>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <h3>{strain_name}</h3>
          <h4>{strain_label_rating}</h4>
          <p>{strain_label_description}</p>{" "}
        </div>
      </div>
    </div>
  );
}
export default DisplayLabel;
