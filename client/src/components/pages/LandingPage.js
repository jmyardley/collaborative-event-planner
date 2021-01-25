import React, { useEffect } from "react";

export function LandingPage({ children }) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    loadEvents()
  }, [])

  function loadEvents() {
    API.getEvents()
      .then(res =>
        setEvents(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>My Upcoming Events</h1>
          </Jumbotron>
          {events.length ? (
            <List>
              {events.map(event => (
                <ListItem key={event._id}>
                  <Link to={"/events/" + event._id}>
                    <strong>
                      {event.title} created by: {event.author}
                    </strong>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Events Scheduled</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}
