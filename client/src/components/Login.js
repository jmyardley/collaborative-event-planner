import React, { useState } from "react";
import { Input, FormBtn } from "./SignupForm";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form>
          <Input
            name="username"
            placeholder="Username"
          />
          <Input
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