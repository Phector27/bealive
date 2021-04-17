import React, { Component } from "react";
import AuthService from "../../service/auth.service";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      error: "",
    };
    this.authService = new AuthService();
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService
      .login(this.state)
      .then((theLoggedInUser) => {
        this.props.storeUser(theLoggedInUser.data);
        this.props.history.push("/profile");
      })
      .catch((err) => this.setState({ error: "Usuario o contraseña incorrecta." }));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <ScrollToTop smooth />
        <Container
          className="form"
          style={{ paddingTop: "20vh", paddingBottom: "20vh" }}
        >
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <h1 style={{textAlign: 'center'}}>Beeee ALIVE!</h1>
              <hr />
              <Form style={{ marginTop: "30px" }} onSubmit={this.handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label style={{ marginLeft: "5px" }}>Usuario</Form.Label>
                  <Form.Control
                    style={{ borderRadius: "20px" }}
                    type="text"
                    minLength="3"
                    placeholder="Ejemplo: BeAliver99"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label style={{ marginLeft: "5px" }}>
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "20px" }}
                    type="password"
                    minLength="5"
                    placeholder="****"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Button
                  style={{ borderRadius: "20px" }}
                  variant="dark btn-block"
                  type="submit"
                >
                  Acceder
                </Button>
                <h5 style={{ color: "red", textAlign: "center" }}>
                  {this.state.error}
                </h5>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
