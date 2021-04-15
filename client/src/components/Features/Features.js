import { Container, Row, Col } from "react-bootstrap";

export default function Features() {
  return (
    <div style={{ paddingTop: "10rem", paddingBottom: '10rem' }}>
      <Container>
        <Row>
          <Col className="section-home" xs={12} md={6} lg={4}>
            <article className="article1">
              <img
                class="last-images"
                src="https://res.cloudinary.com/phector27/image/upload/v1618488986/5a3a113544db40.0425431115137549332828374_jcvuom.png"
                alt="Zero configuration logo"
                style={{ width: "63%" }}
              />
              <h3 style={{ fontWeight: "bold", marginTop: '1rem' }}>A un solo clic </h3>
              <p style={{ marginBottom: "50px" }}>
                {" "}
                Apúntate a cualquier plan. Con amigos o con socios de BeALive!
                Sal de tu zona de confort.{" "}
              </p>
            </article>
          </Col>
          <Col className="section-home" xs={12} md={6} lg={4}>
            <article className="article2">
              <img
                class="last-images"
                src="https://res.cloudinary.com/phector27/image/upload/v1618487179/kisspng-cartoon-child-drawing-cartoon-children-recommend-friends-5a861e4d4c4e17.2330140615187390213126_sl8gmx.png"
                alt="Team Management logo"
                style={{ width: "80%" }}
              />
              <h3 style={{ fontWeight: "bold", marginTop: '1rem' }}> Amplía tu círculo </h3>
              <p style={{ marginBottom: "50px" }}>
                {" "}
                Apúntate a cualquier plan. Con amigos o con socios de BeALive!
                Sal de tu zona de confort.{" "}
              </p>
            </article>
          </Col>
          <Col className="section-home" xs={12} md={6} lg={4}>
            {" "}
            <article className="article3">
              <img
                class="last-images"
                src="https://res.cloudinary.com/phector27/image/upload/v1618487494/Pngtree_cartoon_sports_equipment_2081067_ktrgye.png"
                alt="Familiar Features logo"
                style={{ width: "80%", marginTop: '1rem' }}
              />
              <h3 style={{ fontWeight: "bold", marginTop: '1rem' }}> Rompe tus límites </h3>
              <p style={{ marginBottom: "50px" }}>
                {" "}
                Apúntate a cualquier plan. Con amigos o con socios de BeALive!
                Sal de tu zona de confort.{" "}
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
