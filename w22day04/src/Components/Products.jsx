import React from "react";
import { Link, Route } from "react-router-dom";
import ProductName from "./ProductName";
export default function Products() {
  return (
    <div class="jumbotron jumbotron-fluid" style={{ minHeight: "100vh" }}>
      <div class="container">
        <h1 class="display-4">List of Products</h1>
        <div class="list-group mt-5">
          <Link
            class="list-group-item list-group-item-action "
            to="/products/T-Shirt"
          >
            <h4>T-Shirt</h4>
          </Link>
          <Link
            class="list-group-item list-group-item-action"
            to="/products/Trouser"
          >
            <h4>Trouser</h4>
          </Link>
          <Link
            class="list-group-item list-group-item-action"
            to="/products/Tank-Top"
          >
            <h4>Tank-Top</h4>
          </Link>
          <Link
            class="list-group-item list-group-item-action"
            to="/products/Shoes"
          >
            <h4>Shoes</h4>
          </Link>
          <Link
            class="list-group-item list-group-item-action"
            to="/products/Shirt"
          >
            <h4>Shirt</h4>
          </Link>
        </div>
        <Route path="/products/:productname">
          <ProductName />
        </Route>
      </div>
    </div>
  );
}
