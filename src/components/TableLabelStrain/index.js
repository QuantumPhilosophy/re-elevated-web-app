import React from "react";

function Table({ title, productType }) {
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
          {title}
        </a>
      </h2>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">{productType}</div>
      </div>
    </div>
  );
}
export default Table;
