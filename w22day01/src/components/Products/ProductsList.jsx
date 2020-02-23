import React from "react";
import Product from "./Product";

import "./ProductsList.scss";

export default function ProductsList({ itemsList, handleAddToCart }) {
  console.log(itemsList);
  return (
    <div
      className="col-md-4"
      style={{ height: "100vh", overflowY: "auto", paddingTop: "20px" }}
    >
      {itemsList.map((item, idx) => (
        <Product item={item} key={idx} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}
