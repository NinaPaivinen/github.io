import React from "react";
import { Col, Row } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiCss3Full,
  DiMysql
} from "react-icons/di";

function Techstack() {
  const styleObj = {
    fontSize: 18,
    color: "#e016bc",
 
}  


  return (


    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>





      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={styleObj}>   JavaScript</p>
     
        <p> Keskitaso hallinta</p>
        <ProgressBar animated variant="danger" now={60} ></ProgressBar>
   
   
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={styleObj}>   NodeJS</p>
        
        <p> Keskitaso hallinta</p>
        <ProgressBar animated variant="danger" now={40} ></ProgressBar>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={styleObj}>  React</p>
        
       <p> Hyvä hallinta</p>
        <ProgressBar animated  variant="danger" now={95} ></ProgressBar>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={styleObj}> MySQL</p>

        <p> Keskitaso hallinta</p>
        <ProgressBar animated variant="danger"now={60} ></ProgressBar>
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        < DiCss3Full />
        
        <p style={styleObj}>CSS3</p>
        
       <p> Hyvä hallinta</p>
        <ProgressBar animated variant="danger" now={90} ></ProgressBar>
     
      </Col>
    </Row>
  );

}
export default Techstack;
