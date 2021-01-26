import React, { useState } from "react";
import { Input, FormBtn } from "../SignupForm";
import API from "../../utils/API";
import { Redirect, useHistory } from "react-router-dom";
import Style from "../Style.css"



export default function Login() {
  const [formObject, setFormObject] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);


  function handleInputChange(event){
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.loginUser({
      username: formObject.username,
      password: formObject.password
    }).then(
      setLoggedIn(true)
      )
  }
  return (
    <>
        {loggedIn && <Redirect to="/landingPage" />}
      <div className="container-form">
        <h1>Login</h1>
        <form>
          <Input
            onChange={handleInputChange}
            name="username"
            placeholder="Username"
          />
          <Input
            onChange={handleInputChange}
            name="password"
            placeholder="Password"
          />
          <FormBtn onClick={handleSubmit}>
            Submit
          </FormBtn>
        </form>
        <a href="/signUpPage">Sign Up</a>
      </div>
    </>
  )
}