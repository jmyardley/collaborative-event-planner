import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Detail from "./components/pages/Detail";
import LandingPage from "./components/pages/LandingPage";
import CreateEvent from "./components/pages/CreateEvent";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import "./App.css"


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/loginPage" component={Login} />
        <Route path="/events/:id" component={Detail} />
        <Route exact path="/events" component={LandingPage} />
        <Route exact path="/createEvent" component={CreateEvent} />
        <Route exact path="/signUpPage" component={Signup} />
        <Route exact path="/" component={Signup} />
      </Router>
    );
  }
}

export default App;
