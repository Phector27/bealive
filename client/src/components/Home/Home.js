import React from "react";
import video from "./Be Alive - I Want.mp4";
import Features from "./../Features/Features";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <ScrollToTop smooth />
      <div
        style={{
          backgroundColor: "#ebebeb",
          width: "100vw",
          paddingBottom: "5rem",
        }}
      >
        <video className="videoTag" autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div style={{ textAlign: "center" }}></div>
        <Features />
        <div
          style={{
            textAlign: "center",
            marginTop: "-10rem",
            paddingBottom: "3rem",
          }}
        >
          <Link to="/signup">
            <Button
              variant="outline-success"
              size="lg"
              style={{ fontSize: "2em" }}
            >
              Regístrate
            </Button>
          </Link>

          <p style={{ color: "grey" }}>
            <i>Descuentos y premios exclusivos para usuarios registrados </i>🤭
          </p>
        </div>
      </div>
    </>
  );
}
