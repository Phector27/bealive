import React, { Component } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import WhatsApp from "./img/WhatsApp.png";
import email from "./img/email.png";
import Video from "react-player";
import UserService from "./../../service/user.service";
import EditProfile from "./Edit-profile";
import ScrollToTop from "react-scroll-to-top";
import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.loggedUser,
      showEditUserModal: false,
    };
    this.userService = new UserService();
  }

  handleUserModal = (visible) => this.setState({ showEditUserModal: visible });

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
      <ScrollToTop smooth />
        <Container className="profile">
          <h1 style={{ marginTop: "200px" }}>
            Bienvenid@ a tu perfil
            {this.props.loggedUser.name > ""
              ? `, ${this.props.loggedUser.name}`
              : null}
          </h1>
          <hr />
          <br />
          <Button
            className="btn btn-dark"
            style={{ marginBottom: "50px" }}
            onClick={() => this.handleUserModal(true)}
          >
            Editar perfil ✍️
          </Button>
          <Row className="hero-profile justify-content-md-around">
            <Col md={2}>
              <h2 style={{ fontWeight: "300" }} className="username">
                Foto:
              </h2>
              <h5>{this.props.loggedUser.username}</h5>
              <img
                alt="User logo"
                src={this.props.loggedUser.profilePhoto}
                className="d-inline-block align-top"
                style={{ borderRadius: "300px", marginBottom: "10vh" }}
              />
            </Col>
            {this.props.loggedUser.phoneNumber && (
              <Col md={2}>
                <h4 style={{ fontWeight: "300" }} className="WhatsApp">
                  Teléfono:
                </h4>
                <h5>{this.props.loggedUser.phoneNumber}</h5>
                <a
                  href={`https://api.whatsapp.com/send?phone=${this.props.loggedUser.phoneNumber}&text=%20Hola!`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="WhatsApp logo"
                    src={WhatsApp}
                    className="d-inline-block align-top"
                  />
                </a>
              </Col>
            )}

            <Col md={2}>
              <h4 style={{ fontWeight: "300" }} className="pdfLogo">
                Email:
              </h4>
              <h5>{this.props.loggedUser.email}</h5>
              <a
                href={"mailto:" + this.props.loggedUser.email}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="Email logo"
                  src={email}
                  className="d-inline-block align-top"
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="video" style={{ marginTop: "75px" }}>
              <h2 style={{ fontWeight: "300" }}>Vídeo presentación:</h2>
              <p style={{ color: "grey" }}>
                <i>
                  Preséntate al resto de la comunidad y haz planes TOP al
                  instante :)
                </i>
              </p>
              <Video
                url={this.props.loggedUser.videoProfile}
                playing={true}
                volume={5}
                muted={true}
                controls
                width={350}
                height={250}
              />
            </Col>

            <Col lg={4} style={{ marginTop: "75px" }}>
              <h2 style={{ fontWeight: "300" }}>Descripción:</h2>
              <p
                style={{
                  fontSize: "1.1em",
                  textAlign: "center",
                  paddingBottom: "75px",
                  color: "grey",
                }}
              >
                {this.props.loggedUser.descriptionUser}{" "}
                <p
                  style={{
                    display: "inline",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  variant=""
                  onClick={() => this.handleUserModal(true)}
                >
                  ✍️
                </p>
              </p>
            </Col>
          </Row>
        </Container>

        <Modal
          className="modal-create"
          size="lg"
          show={this.state.showEditUserModal}
          onHide={() => this.handleUserModal(false)}
        >
          <Modal.Body>
            <EditProfile
              handleModal={() => this.handleUserModal(false)}
              storeUser={this.props.storeUser}
              loggedUser={this.state.user}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
