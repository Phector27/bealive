import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Cardtour() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Próximos torneos Be ALIVE: </h1>
      <hr />
      <br />
      <div style={{textAlign: 'center'}}>
        <Row className="justify-content-lg-between">
          <Col xs={12} md={6} lg={5}>
            <Card style={{ width: "auto", marginBottom: "25px" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/phector27/image/upload/v1618505821/1773_9114_golf_sgkytq.jpg"
              />
              <Card.Body>
                <Card.Title>Real club La Moraleja</Card.Title>
                <Card.Text>
                  Apúntate a nuestro primer torneo Be ALIVE. Podrás ganar desde premios en metálico hasta merchandising Be ALIVE de nuestra tienda solo por participar!
                </Card.Text>
                <Card.Title>Inscripción 75€</Card.Title>
                <Button variant="outline-success">Be ALIVE!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <Card style={{ width: "auto" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/phector27/image/upload/v1618505821/1773_9114_golf_sgkytq.jpg"
              />
              <Card.Body>
                <Card.Title>Olivar de Hinojosa</Card.Title>
                <Card.Text>
                Apúntate a nuestro primer torneo Be ALIVE. Podrás ganar desde premios en metálico hasta merchandising Be ALIVE de nuestra tienda solo por participar!
                </Card.Text>
                <Card.Title>Inscripción 50€</Card.Title>
                <Button variant="outline-success">Be Alive!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
