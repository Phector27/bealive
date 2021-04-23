import React from "react";
import { Container } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import Features from "./../Features/Features";
import Cardtour from "../Cardtour/Cardtour";


export default function HomeLogged() {
  
  return (
    <section style={{ backgroundColor: "#ebebeb" }}>
      <ScrollToTop smooth />
      <div style={{ paddingTop: "200px" }}>
        <Container>
          <Cardtour />
        </Container>
      </div>
      <Features />
    </section>
  );
}
