import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Users from "./Components/Users";
import Products from "./Components/Products";
import Orders from "./Components/Orders";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact>
            <div
              class="jumbotron jumbotron-fluid"
              style={{ minHeight: "100vh" }}
            >
              <div class="container">
                <h1 class="display-4">Welcome To Dunzo Cart</h1>
                <p class="lead">
                  Advanced Shopping Cart based on react redux coming soon.
                </p>
              </div>
            </div>
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/orders">
            <Orders />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
