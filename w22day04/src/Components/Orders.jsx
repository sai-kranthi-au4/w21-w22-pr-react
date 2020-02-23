import React from "react";
import { Link, Route } from "react-router-dom";
import OrderId from "./OrderId";
export default function Orders() {
  return (
    <div class="jumbotron jumbotron-fluid" style={{ minHeight: "100vh" }}>
      <div class="container">
        <h1 class="display-4">List of Orders</h1>
        <div class="list-group mt-5">
          <Link class="list-group-item list-group-item-action " to="/orders/1">
            <h4>First Order</h4>
          </Link>
          <Link class="list-group-item list-group-item-action" to="/orders/2">
            <h4>Second Order</h4>
          </Link>
          <Link to="/orders/3" class="list-group-item list-group-item-action">
            <h4>Third Order</h4>
          </Link>
          <Link class="list-group-item list-group-item-action" to="/orders/4">
            <h4>Fourth Order</h4>
          </Link>
          <Link class="list-group-item list-group-item-action" to="/orders/5">
            <h4>Fifth Order</h4>
          </Link>
        </div>
        <Route path="/orders/:orderId">
          <OrderId />
        </Route>
      </div>
    </div>
  );
}
