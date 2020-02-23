import React from "react";
import CartHead from "./CartHead";
import CartItem from "./CartItem";
import "./Cart.scss";

export default class Cart extends React.Component {
  state = {
    cartTotal: 0
  };
  handleCartTotal = () => {
    let total = 0;
    this.props.cart.map(item => {
      total += item.price;
    });
    return total;
    // this.setState({ cartTotal: total });
  };

  componentDidUpdate(previousProps, previousState) {
    let total = this.handleCartTotal();
    // console.log(previousState);
    if (previousState === this.state) {
      this.setState({ cartTotal: total });
    }
    // this.handleCartTotal();
  }
  render() {
    const { cart, handleRemoveFromCart, checkout } = this.props;
    const { cartTotal } = this.state;
    return (
      <div className="col-md-8" style={{ marginTop: "32px" }}>
        <div className="panel panel-info">
          <CartHead />
          <div className="panel-body">
            {/*cart items here*/}
            {cart.map((item, idx) => (
              <CartItem
                item={item}
                key={idx}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
          <div className="panel-footer">
            <div className="row text-center">
              <div className="col-xs-9">
                <h4 className="text-right">
                  Total <strong>&#x20b9;{cartTotal}</strong>
                </h4>
              </div>
              <div className="col-xs-3">
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={() => checkout()}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
