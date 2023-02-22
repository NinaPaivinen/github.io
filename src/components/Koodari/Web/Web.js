import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import kansiKuva from "../../Assets/kansi.svg";

import Techstack from "./Techstack";
import Aboutcard from "./WebInfo";
import Toolstack from "./Toolstack";



function Web() {
  
  return (
    <Container fluid className="about-section">

      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <h1 style={{ fontSize: "4.1vW", paddingBottom: "20px" }}>
           Miksi juuri <strong className="purple">webohjelmointi?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
                src={kansiKuva}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </Col>
        </Row>


<h1 className="glow">Ohjelmointi välineet</h1>

        <h1 className="project-heading">
         Ohjelmointi <strong className="purple">kielet </strong>
         
        </h1>...ja  kirjastot jne.

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Työkalut</strong> jota käytän
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default Web;
