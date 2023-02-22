import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


import  "./projects.css"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
    
<h1  style={{ color: "white" }}>Ohjelmisto <span class="fire">p</span><span class="burn">r</span>
<span class="burn">o</span><span class="fire">j</span> 
<span class="fire">e</span> <span class="fire">k</span> 

<span class="burn">t</span><span class="fire">i</span> 
<span class="fire">t</span> 
</h1>








        <p style={{ color: "white" }}>
    Alla mainittakoon projekteja kuvauksineen, joista olen ohjelmointi kokemustani kartuttanut
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">      

            <ProjectCard
              imgPath={chatify}
              title="Full-Stack "
              description="Front-end toteutettuna Reactilla ja back-end NodeJs:ää käyttäen.
              CRUD toiminnnot onnistuneesti toteuttava sovellus, joka kommunikoi MariaDB:ssä olevan tietokannan kanssa.
         React on aivan ihana, sitä vihaa niin kauvan kunnes sen sisäistää. Sitä ennen se on aivan hirveä. "
     button="React"
            />
              <button class="button" type="button">React</button>   
           <button class="button" type="button">NodeJS</button> 
           
          <button class="button" type="button">MySQL</button> 
          
          
          <button class="button" type="button">CSS</button> 
          <button class="button" type="button">SASS</button> 
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="WordPress kotisivu"
              description="Kävin joskus ylimääräisen 5 op kurssin WordPressistä, mutta alusta loppuun itse tekemät sivustot ovat opettaneet jo 
              hyvät perustaidot wordpressin maailman ymmärtämiseen. Tämä pitää hallita, onhan se niin suosittu sisällönhallintaohjelma verkossa.
             Mm. bloggaamiseen ja uutissivuistoille erinomainen työkalu."  
     button="HTML"
            />
                 <button class="button" type="button">JavaScript</button>   
           <button class="button" type="button">CSS</button> 
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Peruskoodattu kotisivu"
              description="Perus kotisivun voi tehdä WordPressillä,
              mutta luovuus pääsee esiin, kun pääsee koodaamaan alusta loppuun käyttäen ohjelmointi kieliä ja kirjastoja mitä nyt vaan löytyy maan päältä ja mieli tekee käyttää...
             I love Boostrap ja SCSS, joka on CSS, mutta doupattu versio ja erittäin näyttävä sellainen.
             PHP:tä tullut käytettyä näiden yhteydessä.              "
           
                       
            />
            
            <button class="button" type="button">JavaScript</button>   
           <button class="button" type="button">CSS</button> 
           <button class="button" type="button">PHP</button> 
           
           <button class="button" type="button">SASS</button> 
          </Col>

          <Col md={4} className="project-card">      
             
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Java CRUD"
              description="Myönnetään, en tykkää Javasta, mutta olen CRUD tietokanta yhteyksillä olevan 
              JavaFX & SceneBuilder toteutteisen projektin tehnyt. Olen niin JavaScript ihminen, kun olla ja voi..."
       
            />  <button class="button" type="button">Java</button> 
          <button class="button" type="button">MySQL</button> 
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;