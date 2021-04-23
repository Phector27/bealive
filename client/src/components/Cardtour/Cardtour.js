import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Cardtour() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Próximos torneos Be ALIVE: </h1>
      <hr />
      <br />
      <div style={{ textAlign: "center" }}>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12} lg={10}>
            <Card style={{ width: "auto", marginBottom: "25px" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/phector27/image/upload/v1618505821/1773_9114_golf_sgkytq.jpg"
              />
              <Card.Body>
                <Card.Title>Cooming soon ⏰</Card.Title>
                <Card.Text>
                  Aquí podrás ver nuestros torneos y conectar con nuestra red
                  en!
                </Card.Text>
                {/* <Card.Title>Inscripción</Card.Title> */}
                <Button variant="outline-success">Be ALIVE!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
