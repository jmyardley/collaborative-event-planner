import React, { useState } from "react";
import { Input, FormBtn } from "../SignupForm";

export default function Login() {
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event){
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="container">
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
        <a href="*">Sign Up</a>
      </div>
    </>
  )
}