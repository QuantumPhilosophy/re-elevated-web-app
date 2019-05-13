import React from "react";

function DisplayStrain({
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
          {strain_name}
        </a>
      </h2>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <h3>{label_name}</h3>
          <h4>{strain_label_rating}</h4>
          <p>{strain_label_description}</p>{" "}
        </div>
      </div>
    </div>
  );
}
export default DisplayStrain;
