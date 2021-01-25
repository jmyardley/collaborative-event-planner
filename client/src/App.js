import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import LandingContainer from "./components/LandingContainer"
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/loginPage" component={Login} />
        <Route exact path="/" component={Signup} />
      </Router>
    );
  }
}

export default App;
