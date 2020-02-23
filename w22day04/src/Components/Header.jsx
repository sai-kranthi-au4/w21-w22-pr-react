import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Dunzo
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link class="nav-item nav-link" to="/users">
            Users
          </Link>
          <Link class="nav-item nav-link" to="/products">
            Products
          </Link>
          <Link class="nav-item nav-link" to="/orders">
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}
