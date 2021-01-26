import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import LandingContainer from "./components/LandingContainer"
import LandingPage from "./components/pages/LandingPage";
import CreateEvent from "./components/pages/CreateEvent";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/loginPage" component={Login} />
        <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/createEvent" component={CreateEvent} />
        <Route exact path="/signUpPage" component={Signup} />
        <Route exact path="/" component={Signup} />
      </Router>
    );
  }
}

export default App;
