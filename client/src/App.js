import React, { Component } from "react";
import Header from "./components/Header";
//import Login from "./components/Login";
import Signup from "./components/Signup";


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Signup />
      </>
    );
  }
}

export default App;
