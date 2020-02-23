import React from "react";
import { useParams } from "react-router";
export default function Username() {
  let { username } = useParams();
  return (
    <div class="alert alert-success mt-5" role="alert">
      <h4 class="alert-heading">Welcome {username}!</h4>
      <p>Aww yeah, you're member of this page, congrats on that.</p>
      <hr />
      <p class="mb-0">
        This is a simple demo of how you can seperate things in smaller
        components and have readable code.
      </p>
    </div>
  );
}
