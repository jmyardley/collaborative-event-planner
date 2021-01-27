import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import Style from "./CreateEvent.css"




function LandingPage() {
  const [events, setEvents] = useState([]);
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    loadEvents()
  }, [])

  function loadEvents() {
    API.getEvents()
      .then(res =>
        setEvents(res.data),
  
      )
      .catch(err => console.log(err));
  };

  return (
    <div className="Style-this">

    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>My Upcoming Events</h1>
          </Jumbotron>
          {events.length ? (
            <List>
              {events.map(event => {
                return (
                  <ListItem key={event._id}>
                    <Link to={"/events/" + event._id}>
                      <strong>
                        {event.title} created by: {event.owner.username}
                    </strong>
                    </Link>
                  </ListItem>
                )
              })}
            </List>
          ) : (
              <h3>No Events Scheduled</h3>
            )}
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default LandingPage;