import React from "react";

export function LandingPage({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function Event({ children }) {
  return <li className="list-group-item">{children}</li>;
}
