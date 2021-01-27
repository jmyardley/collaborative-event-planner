import React from "react";
import "./Style.css";


function Header(props) {
  return (
    <ul className="nav nav-tabs">
            <li className="nav-item">
        <a
          href="/loginpage"
          onClick={() => props.handlePageChange("LoginPage")}
          className={props.currentPage === "LoginPage" ? "nav-link active" : "nav-link"}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/events"
          onClick={() => props.handlePageChange("events")}
          className={props.currentPage === "events" ? "nav-link active" : "nav-link"}
        >
          My Events
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/createEvent"
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