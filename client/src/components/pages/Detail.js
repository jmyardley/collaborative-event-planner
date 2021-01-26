import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

function Detail() {
  const [event, setEvent] = useState({})
  let { id } = useParams();

  useEffect(() => {
    loadEvent()
  }, [])

  function loadEvent() {
    API.getEvent(id)
    .then(res => setEvent(res.data))
    .catch(err => console.log(err));
  };
  
  return (
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
        <Col size="md-2">
          <Link to="/">← Back to Events</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;