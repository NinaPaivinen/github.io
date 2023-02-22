import Particle from "../Particle";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/avatar.svg";
import myImg2 from "../Assets/girl.webp";

import ginga from "../Assets/ginga.jpg";

import inssi from "../Assets/inssi.jpg";

import cat from "../Assets/cat.svg";
import cat2 from "../Assets/cat2.svg";
import cat3 from "../Assets/cat3.svg";

import myImg3 from "../Assets/coder.webp";
import Tilt from "react-parallax-tilt";
import classnames from 'classnames';
import { ImPointRight } from "react-icons/im";
import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
} from '@merc/react-timeline';
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

import styles from "./mina.module.css";

function Mina() {
  const mystyle = {
    color: "pink",
    
  }; 
   useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  
  return (
 
    <Container fluid className={styles.homeAboutSection}>
  
      <Container>
         <Particle/>
        <Row>
          <Col md={8} className={styles.homeAboutDescription}>


            
            <h1 data-aos="fade-down"  style={{ fontSize: "2.6em" }}>
              
          

            Anna <span style={mystyle}>minä </span> esittelen itseni
            </h1>
            <p data-aos="fade-up">
Heipä hei vaan. Olen tälläinen <span style={mystyle}>introvertti</span> persoona.
              <br />
              <br /> Nimeni binääri muodossa :)
              <i>  <br></br>
                <b className="purple"> 01001110 </b>
                <br></br>
                
                <b className="purple"> 01101001 </b>  <br></br>
                
                <b className="purple">01101110 </b>  <br></br>
                
                <b className="purple">	01100001 </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className={styles.myAvtar}>
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Timeline>
      <Events>
        <TextEvent date="/1993" text=" Im **born**" />

        <ImageEvent
          date="2000 tienoilla"
          text="Meille tuli ensimmäinen tietokone kotiin, käyttöjärjestelmältään WIN95.
           Muistan hämärästi kuinka Paintilla piirsin jotakin."
           
        >
          <div>
          </div>
        </ImageEvent>

       

<ImageEvent
          date="2008"
          text="Verkkosivut ensimmäiset tein (HTML & vähän CSS). 
          Sivusto oli teemaltaan hopeanuoli fanisivut ja yahoo palvelimella muistaakseni.
          Tuolloin nimellä ATK oleva koulu-aine oli peruskoulun
          päättötodistuksessa ainut 10. 
          "
           
          src={ginga}
          alt="jellyfish swimming"
        >
          <div>
          </div>
        </ImageEvent>





        <TextEvent date="/2014" text="Amikseen lähdin kuitenkin eri polulle ja valmistuin talonrakentjaksi ammattikoulusta" />
        <TextEvent date="/2008-/2019" text="Rakennusalan töitä ja äitiyslomalla oloa" />
      


       

<ImageEvent
          date="2019"
          text="Koin että en halua lopun elämää rakennusalan duunari töitä tehdä
          ja lähdin opiskelemaan rakennusalan insinööriksi. Keskiarvo oli ensimmäisen vuoden jälkeen 3.
         Erityisen hyvä oli AUTOCADin ja AutoDesk Revitin käytössä, jotka ovat siis haastavia tietokoneohjelmia.
          "
           
          src={inssi}
          alt="jellyfish swimming"
        >
          <div>
          </div>
        </ImageEvent>
        
    
    
        <ImageEvent
          date="2020"
          text="
          Kutsumus tietokone alalle oli vahvistunut niin paljon että siirryin 
          tradenomin tietojenkäsittelijä puolelle ammattikorkeasssa.
          "
           
          src={myImg3}
          alt="jellyfish swimming"
        >
          <div>
          </div>
        </ImageEvent>
        </Events>
    </Timeline>

    
        <Row>
          <Col md={8} className={styles.homeAboutDescription}>

         <h1 data-aos="fade-up">Harrastukset</h1>
         <p data-aos="fade-up">Koodaaminen on jännää, mutta on sitä muutakin jännää... </p>  
      
     
          <ul>
            <li data-aos="fade-dowm" className={styles.aboutActivity}>
              <ImPointRight /> Kaikenlainen taide, askartelu touhuaminen
            </li>
            <li data-aos="fade-down" className={styles.aboutActivity}>
              <ImPointRight /> Tietokirjallisuus mielenkiintoisista aiheista
            </li>
            <li data-aos="fade-down" className={styles.aboutActivity}>
              <ImPointRight /> Pin Up retroilu, sisustus
            </li>
            
          </ul>
<Row>
  <Col>
  <Tilt>
              <img src={cat} className="img-fluid" alt="avatar" />
            </Tilt>
  </Col>
  <Col>
  <Tilt>
              <img src={cat2} className="img-fluid" alt="avatar" />
            </Tilt>
  </Col>
  <Col>
  <Tilt>
              <img src={cat3} className="img-fluid" alt="avatar" />
            </Tilt>
  </Col>
</Row>



          </Col>
          <Col md={4} className={styles.myAvtar}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>




      </Container>
 
      <div id="tabs"></div>


    </Container>
  );
}
export default Mina;
