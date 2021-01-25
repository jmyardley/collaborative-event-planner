import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import LandingContainer from "./components/LandingContainer"


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Login />
      </>
    );
  }
}

export default App;
