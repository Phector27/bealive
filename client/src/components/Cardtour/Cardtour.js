import React, { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Cardtour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h2
        style={{
          fontWeight: "500",
          textAlign: "center",
          color: "black",
          marginBottom: "40px",
          fontFamily: 'Helvetica'
        }}
      >
        ¿Quieres conocer todas las ventajas de Be Alive?{" "}
      </h2>
      <h2
        style={{
          fontWeight: "500",
          textAlign: "center",
          color: "darkgreen",
          marginBottom: "40px",
          fontFamily: 'Helvetica'
        }}
      >
        {" "}
        ▼ Descarga nuestra App ▼
      </h2>

      <Row className="justify-content-md-center">
        <Col xs={12} md={12} lg={12}>
          <div style={{ textAlign: "center" }}>
            <a href="https://previewer.adalo.com/3145dcfa-6cfe-4b29-ab0a-02a49eb32296" target="_blank" rel="noreferrer">
              <img
                
                src="https://res.cloudinary.com/phector27/image/upload/v1620752469/googleplay_jcb55b.png"
                alt="Download logo"
                style={{ width: "30%" }}
              />
            </a>
            <a href="https://previewer.adalo.com/3145dcfa-6cfe-4b29-ab0a-02a49eb32296" target="_blank" rel="noreferrer">
              <img
                
                src="https://res.cloudinary.com/phector27/image/upload/v1620752469/appstore_rnwvmc.png"
                alt="Download logo"
                style={{ width: "30%" }}
              />
            </a>
          </div>
        </Col>
      </Row>
      <h1
        style={{ fontWeight: "400", textAlign: "center", marginTop: "100px" }}
      >
        Próximos torneos{" "}
      </h1>
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
                  Aquí podrás ver nuestros torneos y conectar con la comunidad
                  :)
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
