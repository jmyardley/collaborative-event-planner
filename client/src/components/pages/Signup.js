import React, { useState } from "react";
import { Input, FormBtn } from "../SignupForm";
import API from "../../utils/API";

export default function Signup() {
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event){
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.signUpUser({
      username: formObject.username,
      password: formObject.password
    });
  }
  return (
    <>
      <div className="container">
        <h1>Signup</h1>
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
        <a href="*">Already signed up? Log in</a>
      </div>
    </>
  )
}