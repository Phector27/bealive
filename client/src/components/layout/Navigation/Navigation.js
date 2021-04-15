import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../../img/Logo Oficial (copia).png";
import { Link } from "react-router-dom";
import AuthService from "./../../../service/auth.service";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      color: "transparent",
    };
    this.authService = new AuthService();
  }

  logOut = () => {
    this.authService
      .logout()
      .then((res) => {
        this.props.storeUser(undefined);
      })
      .catch((err) =>
        alert(
          "No se ha podido cerrar sesión correctamente. Inténtalo de nuevo por favor."
        )
      );
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    if (window.scrollY < 100) {
      this.setState({ color: "transparent" });
    } else if (window.scrollY > 100) {
      this.setState({ color: "white" });
    }
  };

  render() {
    return (
      <>
        <Navbar
          bg={this.state.color}
          expand="md"
          className="navbar menu"
          fixed="top"
        >
          <Navbar.Brand>
            {" "}
            <Link to="/">
              <img
                alt="BeAlive logotype"
                src={logo}
                className="d-inline-block align-top img-corporate"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {this.props.loggedUser ? (
              <div className="divider">
                <div>
                  <Link
                    to="/profile"
                    className="obtain-btn-nav"
                    id="obtain-btn-nav"
                    style={{ textDecoration: "none", letterSpacing: 0.5 }}
                  >
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ fontSize: "1em"}}
                    >
                      Mi perfil
                    </button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/"
                    className="obtain-btn-nav"
                    id="obtain-btn-nav"
                    style={{ textDecoration: "none", letterSpacing: 0.5 }}
                    onClick={this.logOut}
                  >
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{ fontSize: "1em", marginRight: "7rem" }}
                    >
                      Cerrar sesión
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="divider">
                  <div>
                    <Navbar.Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: "medium",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="/login"
                        style={{
                          textDecoration: "none",
                          letterSpacing: 0.5,
                          fontSize: "1.2em",
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-dark"
                          style={{ fontSize: "1em" }}
                        >
                          Inicio sesión
                        </button>
                      </Link>
                    </Navbar.Text>
                  </div>
                  <div>
                    <Navbar.Text
                      style={{
                        marginLeft: 10,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        marginRight: "5vw",
                        fontSize: "1.2em",
                      }}
                    >
                      <Link
                        to="/signup"
                        className="obtain-btn-nav"
                        id="obtain-btn-nav"
                        style={{ textDecoration: "none", letterSpacing: 0.5 }}
                      >
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ fontSize: "1em" }}
                        >
                          Registro
                        </button>
                      </Link>
                    </Navbar.Text>
                  </div>
                </div>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
