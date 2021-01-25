import React, { Component } from "react";
import Header from "./Header";
import LandingPage from "./pages/LandingPage";
import CreateEvent from "./pages/CreateEvent";


class LandingPage extends Component {
  state = {
    currentPage: "LandingPage"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "LandingPage") {
      return <LandingPage />;
    } else if (this.state.currentPage === "CreateEvent") {
      return <CreateEvent />;
    }
  };

  render() {
    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }

}

export default LandingPage;
