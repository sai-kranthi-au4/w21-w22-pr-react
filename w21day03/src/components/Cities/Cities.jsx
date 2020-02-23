import React from "react";
export default function Cities({ cities }) {
  return (
    <div>
      <ul>
        {cities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
