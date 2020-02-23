import React from "react";
import { useParams } from "react-router";
export default function ProductName() {
  let { productname } = useParams();
  return (
    <div class="alert alert-success mt-5" role="alert">
      <h4 class="alert-heading">{productname}!</h4>
      <p>
        A Product with some information which can also be dynamic if we can make
        this component stateful or using redux.
      </p>
      <hr />
      <p class="mb-0">
        This is a simple demo of how you can seperate things in smaller
        components and have readable code.
      </p>
    </div>
  );
}
