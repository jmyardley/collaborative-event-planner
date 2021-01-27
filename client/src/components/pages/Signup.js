import React, { useState } from "react";
import { Input, SecretInput, FormBtn } from "../SignupForm";
import API from "../../utils/API";
import { Redirect, useHistory } from "react-router-dom";
import Header from "../Header"
import "./Login.css"


export default function Signup() {
  const [formObject, setFormObject] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.signUpUser({
      username: formObject.username,
      password: formObject.password
    }).then(
      setLoggedIn(true)
      )
  }
  return (
    <>  

    {loggedIn && <Redirect to="/events" />}

    <div className="Style-me">

      <div className="container-form">
        <h1>Signup</h1>
        <form>
          <Input
            onChange={handleInputChange}
            name="username"
            placeholder="Username"
          />
          <SecretInput
            onChange={handleInputChange}
            name="password"
            placeholder="Password"
          />
          <FormBtn onClick={handleSubmit}>
            Submit
          </FormBtn>
        </form>
        <a href="loginPage">Already signed up? Log in</a>
      </div>
      </div>
    </>
  )
}