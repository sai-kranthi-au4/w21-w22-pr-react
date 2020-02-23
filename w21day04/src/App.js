import React from "react";
import ProductList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";
import "./App.css";

class App extends React.Component {
  state = {
    itemsList: [
      {
        id: 1,
        name: "IncultGeo Polo T-Shirt",
        pic: "https://i.imgur.com/VLQztGw.jpg",
        price: 450
      },
      {
        id: 2,
        name: "Cotton shirt",
        pic: "https://i.imgur.com/VLQztGw.jpg",
        price: 350
      },
      {
        id: 3,
        name: "UCB Shirt",
        pic: "https://i.imgur.com/VLQztGw.jpg",
        price: 650
      },
      {
        id: 4,
        name: "Denim Shirt",
        pic: "https://i.imgur.com/VLQztGw.jpg",
        price: 250
      }
    ],
    cart: []
  };
  handleAddToCart = item => {
    let cartHasItem = null;
    this.state.cart.map((cartItem, idx) => {
      if (cartItem.id === item.id) {
        this.setState(state => {
          return (state.cart[idx].quantity += 1);
        });
        cartHasItem = true;
      } else {
        cartHasItem = false;
      }
    });
    if (!cartHasItem) {
      this.setState({ cart: [...this.state.cart, { ...item, quantity: 1 }] });
    }
  };
  handleRemoveFromCart = item => {
    this.state.cart.map((cartItem, idx) => {
      if (cartItem.id === item.id) {
        if (cartItem.quantity === 1) {
          this.setState(state => {
            state.cart.splice(idx, 1);
            return state;
          });
        }
        if (cartItem.quantity > 1) {
          this.setState(state => {
            return (state.cart[idx].quantity -= 1);
          });
        }
      }
    });
  };

  checkout = () => {
    this.setState({ cart: [] });
    alert("Success");
  };

  render() {
    const { itemsList, cart, cartTotal } = this.state;
    return (
      <div className="container">
        <div className="row">
          <ProductList
            itemsList={itemsList}
            handleAddToCart={this.handleAddToCart}
          />
          <Cart
            cart={cart}
            handleRemoveFromCart={this.handleRemoveFromCart}
            checkout={this.checkout}
          />
        </div>
      </div>
    );
  }
}

export default App;
