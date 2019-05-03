import React from "react";

function Card({ title, children }) {
  return (
    <div className="card mt-4">
      <div calssName="card-header">
        <h3>
          <strong>
            <i className="fas fa-cannabis" aria-hidden="true" />
            {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
