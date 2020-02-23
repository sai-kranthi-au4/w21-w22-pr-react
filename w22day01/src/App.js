import React from "react";
import ProductList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { connect } from "react-redux";
import {
  fetchItems,
  fetchCart,
  addCart,
  deleteCart,
  checkout
} from "./actions/cart-actions";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllCart();
  }
  

  render() {
    console.log(this.props.itemsList);
    const { itemsList, cart, checkout } = this.props;
    return (
      <div className="container">
        <div className="row">
          <ProductList
            itemsList={itemsList}
            handleAddToCart={this.props.addToCart}
          />
          <Cart
            cart={cart}
            handleRemoveFromCart={this.props.removeFromCart}
            checkout={checkout}
          />
        </div>
      </div>
    );
  }
}

const stateAsProps = reducers => {
  return {
    itemsList: reducers.CartReducer.itemsList,
    cart: reducers.CartReducer.cart
  };
};
const actionAsProps = {
  getAllProducts: fetchItems,
  getAllCart: fetchCart,
  addToCart: addCart,
  removeFromCart: deleteCart,
  checkout: checkout
};

export default connect(stateAsProps, actionAsProps)(App);
