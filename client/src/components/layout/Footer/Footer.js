import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
      style={{ width: "100vw" }}
    >
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text" style={{ marginLeft: "1rem" }}>
                Síguenos en nuestras RRSS y obtén descuentos exclusivos!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a
                className="fb-ic ml-0 brands"
                href="https://www.instagram.com/bealiveconnect/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a
                className="tw-ic brands"
                href="https://www.twitter.com/BeAlive10715100/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a
                className="gplus-ic brands"
                href="mailto:Bealiveconnect@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a
                className="li-ic brands"
                href="mailto:Bealiveconnect@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a
                className="ins-ic brands"
                href="https://www.instagram.com/bealiveconnect/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Be ALIVE</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>Explora tus sentidos, rompe tus límites.</p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>ABOUT</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!">Visita nuestra tienda</a>
            </p>
            <p>
              <a href="#!">Torneos organizados</a>
            </p>
            <p>
              <a href="#!">Quiénes Somos</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>LINKS</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!">Tu cuenta</a>
            </p>
            <p>
              <a href="#!">Hazte soci@</a>
            </p>
            <p>
              <a href="#!">Regístrate</a>
            </p>
            <p>
              <a href="#!">Ayuda</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-envelope mr-3" /> bealiveconnect@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +34 640 25 43 48
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-4">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.BeALIVE.com"> BeALIVE.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
