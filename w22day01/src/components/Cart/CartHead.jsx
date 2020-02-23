import React from "react";

export default function CartHead() {
  return (
    <div className="panel-heading">
      <div className="panel-title">
        <div className="row">
          <div className="col-xs-6">
            <h5>
              <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
              Shopping Cart
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
