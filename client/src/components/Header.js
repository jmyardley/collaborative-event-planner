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
          LandingPage
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      </ul>
  )
}

export default Header;