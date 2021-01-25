import React, { useState } from "react";
import { Input, TextArea, FormBtn } from "../EventForm";

export default function CreateEvent() {
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
        <h1>New Event</h1>
        <form>
          <Input
            onChange={handleInputChange}
            name="eventname"
            placeholder="Event Name"
          />
          <Input
            onChange={handleInputChange}
            name="eventdate"
            placeholder="Event Date (MM-DD-YYYY)"
          />
          < TextArea 
            onChange={handleInputChange}
            name="description"
            placeholder="Event Description"
          />
          <FormBtn onClick={handleSubmit}>
            Create
          </FormBtn>
        </form>
      </div>
    </>
  )
}