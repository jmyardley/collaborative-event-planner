import React, { useState } from "react";
import { Input, TextArea, FormBtn, ListItem } from "../EventForm";
import API from "../../utils/API";
import { Redirect, useHistory } from "react-router-dom";
import { set } from "mongoose";
import Style from "./CreateEvent.css"
// import Card from "../Card/Index"


export default function CreateEvent() {
  const [formObject, setFormObject] = useState({})
  const [eventSubmitted, setEventSubmitted] = useState(false);


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("test2");
    API.createEvent({
      title: formObject.eventname,
      date: formObject.eventdate,
      descr: formObject.description,
      items: [
        { text: formObject.item1 },
        { text: formObject.item2 },
        { text: formObject.item3 }
      ]
    }).then(
      console.log("submit"),
      setEventSubmitted(true)
    ).catch(err => console.log(err));
  }
  return (
    <>
      {eventSubmitted && <Redirect to="/events" />}
      {/* <Card> */}
      <div className="Style-this">

      <div className="container">
        <h1>New Event</h1>
        <form>
          <h5>Title:</h5>
          <Input
            onChange={handleInputChange}
            name="eventname"
            placeholder="Event Name"
          />
          <h5>Date:</h5>
          <Input
            onChange={handleInputChange}
            name="eventdate"
            placeholder="Event Date (MM-DD-YYYY)"
          />
          <h5>Description:</h5>
          < TextArea
            onChange={handleInputChange}
            name="description"
            placeholder="Event Description"
          />
          <h5>Checklist:</h5>
          <ul>
            <ListItem
              onChange={handleInputChange}
              name="item1"
              placeholder="item 1"
            />
            <ListItem
              onChange={handleInputChange}
              name="item2"
              placeholder="item 2"
            />
            <ListItem
              onChange={handleInputChange}
              name="item3"
              placeholder="item 3"
            />
          </ul>
          <FormBtn onClick={handleSubmit}>
            Create
          </FormBtn>
        </form>
      </div> 
    </div>
      {/* </Card> */}
    </>
  )
}