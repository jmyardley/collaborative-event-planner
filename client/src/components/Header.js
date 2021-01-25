import React from "react";

function Header(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#landing"
          onClick={() => props.handlePageChange("LandingPage")}
          className={props.currentPage === "LandingPage" ? "nav-link active" : "nav-link"}
        >
          My Events
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#create"
          onClick={() => props.handlePageChange("CreateEvent")}
          className={props.currentPage === "CreateEvent" ? "nav-link active" : "nav-link"}
        >
          Create Event
        </a>
      </li>
      </ul>
  )
}

export default Header;