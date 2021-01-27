import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import Style from "./CreateEvent.css"

function Detail() {
  const [event, setEvent] = useState({})
  let { id } = useParams();

  useEffect(() => {
    console.log(id)
    if(id){
      loadEvent(id)
    }
  }, [id])

  function loadEvent(eventId) {
    API.findById(eventId)
    .then(res => {
      setEvent(res.data)
      console.log(res.data)
    })
    .catch(err => console.log(err));
  };
  
  return (
    // <h1>{id}</h1>
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {event.title} by 
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Description</h1>
            <p>
              {event.descr}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
        {event.items ? (
            <List>
              {event.items.map(item => {
                return (
                  <ListItem key={item._id}>
                    <p>{item.text}</p>
                  </ListItem>
                )
              })}
            </List>
          ) : (
              <h3>No Todos Left to Complete</h3>
            )}
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Events</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;