import React from "react";
import { Link, Route } from "react-router-dom";
import Username from "./Username";
export default function Users() {
  return (
    <div class="jumbotron jumbotron-fluid" style={{ minHeight: "100vh" }}>
      <div class="container">
        <h1 class="display-4">List of Users</h1>
        <div class="list-group mt-5">
          <Link
            class="list-group-item list-group-item-action "
            to="/users/Kranthi"
          >
            <h4>Kranthi</h4>
          </Link>
          <Link
            class="list-group-item list-group-item-action"
            to="/users/Mayank"
          >
            <h4>Mayank</h4>
          </Link>
          <Link class="list-group-item list-group-item-action" to="/users/Raj">
            <h4>Raj</h4>
          </Link>
          <Link
            class="list-group-item list-group-item-action"
            to="/users/Rishab"
          >
            <h4>Rishab</h4>
          </Link>
        </div>
        <Route path="/users/:username">
          <Username />
        </Route>
      </div>
    </div>
  );
}
