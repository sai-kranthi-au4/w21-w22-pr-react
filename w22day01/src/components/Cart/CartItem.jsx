import React from "react";

export default function CartItem({ item, handleRemoveFromCart }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-2">
          <img className="img-responsive" alt="placeholder" src={item.pic} />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>{item.name}</strong>
          </h4>
          <h4>
            <small>10% discount applied</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h5>
              <strong>
                &#x20b9;{item.price} <span className="text-muted">x</span>
              </strong>
            </h5>
          </div>
          <div className="col-xs-4">
            <input
              type="text"
              className="form-control input-sm"
              value={item.quantity}
              disabled
            />
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-link btn-xs"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}
