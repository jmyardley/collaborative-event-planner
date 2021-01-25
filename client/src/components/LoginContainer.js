import React, { Component } from "react";
import Header from "./Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


class LoginPage extends Component {
  state = {
    currentPage: "Login"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Login") {
      return <Login />;
    } else if (this.state.currentPage === "Signup") {
      return <Signup />;
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

export default LoginPage;
