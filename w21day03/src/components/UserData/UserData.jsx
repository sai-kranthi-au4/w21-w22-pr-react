import React from "react";

export default function UserData({ userDetails }) {
  return (
    <div>
      <ul>
        {userDetails.map((item, idx) => (
          <li key={idx}>
            {item.name}---{item.email}---{item.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
