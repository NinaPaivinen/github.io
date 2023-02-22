import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWordpress,
  SiMariadb,
  SiApachenetbeanside,
} from "react-icons/si";

import {
  DiGit,
} from "react-icons/di";

function Toolstack() {
  const styleObj = {
    fontSize: 18,
    color: "#e016bc",
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        
        <p style={styleObj}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        
        <p style={styleObj}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
        
        <p style={styleObj}>MariaDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        
        <p style={styleObj}>Wordpress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  SiApachenetbeanside />
        
        <p style={styleObj}>NetBeans</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={styleObj}>Git</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
