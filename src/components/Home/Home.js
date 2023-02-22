import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";

import Particle from "../Particle";
import Kirjoitus from "./Kirjoitus";
import Cover from "./Cover";

import AnimatedText from 'react-animated-text-content';
import AOS from "aos";

import styles from "./card.module.scss";
import "./Home.css";

import "./home.scss";
import "aos/dist/aos.css";


import myImg from "../Assets/react.svg";
import kansi from "../Assets/coder1.webp";
import kansi2 from "../Assets/coder2.webp";
import kansi3 from "../Assets/coder3.webp";



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("Selaat puhelimella sivustoa :) Terveisin Nina");
}else{
  // false for not mobile device
  console.log("Et käytä mobiilia vaan tietokonetta :) Terveisin Nina");
}


function Home() {
  const mystyle = {
    color: "pink",
    
  }; 

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
//n

  return (

      <div>
    <Cover />
      <Container fluid className="home-section" >
   
        <Particle />


      
       <Container className="home-content">



          <Row>


            
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading white">



                <AnimatedText 
  animationType="lights">
         My
</AnimatedText>
<AnimatedText 
  animationType="fade-down">
              Portfolio HomePage
</AnimatedText>
              
              </h1>

              
              <div  style={{ textAlign: "center" }}data-aos="fade-up" >
Tämä sivusto näyttää ihan tavan kotisivulta, 
     mutta itse asiassa tämä "sivusto" ei ole edes sivusto vaan...
</div>
<section class="header">
  <div class="title-wrapper">
    <h1 class="sweet-title">
      <span class="Sweet">React</span>
      <span class="Stuff">App</span>
    </h1>
    <span class="top-title">Powered by</span>
    <span class="bottom-title">JavaScript</span>
    </div>
</section>



         <div  style={{ textAlign: "center" }}data-aos="fade-up" >     React on front-end JavaScript-kirjasto, jonka avulla rakennetaan UI (user-interface) 
              eli käyttäjälle näkyvä käyttöliittymä.<br></br>
           mm. Facebook on rakennettu vastaavalla tekniikalla. <br>
           </br>
          Tämä 'äppi' on myös mobiili responsiiviseksi rakennettu.

</div>


              <div style={{ padding: 50, textAlign: "left" }}>
            
              </div>
            </Col>

            <Col md={4} >
            <Tilt>
              <img data-aos="flip-right" src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
             <Kirjoitus />
          </Col> 
          </Row>
        </Container>
      
     

     
        <Container> 
   


<h1 data-aos="fade-down"  style={{ fontSize: "2.6em" , color:"white"}}>
              
          

             Sivuston <span style={mystyle}>rakenne</span>
              </h1>



<br></br>
 
      </Container> 

      <Container>
        <div>
      <ul class={styles.cardWrapper}>


  <li class={styles.card}>
    <img  class={styles.img2} src={kansi} alt=''>
   </img> <h3> CSS/SASS</h3>
   <ol className="c" >
  <li>Pää CSS tiedostoja 1kpl .</li>
  <li>CSS moduuleja 6kpl </li>
  <li> SCSS moduuleja 2kpl</li>
</ol>
  </li>




  <li class={styles.card}>
  
  <img class={styles.img2} src={kansi2} alt=''>
    </img>  <h3>Dependies</h3>
    
    <ol className="c" >
  <li>React Dependies 23kpl </li>
</ol>
  </li>



  <li class={styles.card}>
    
  <img class={styles.img2} src={kansi3} alt=''>
    </img> 
    
    <h3> Komponentit</h3>
     <ol className="c" >
  <li> Komponentteja 12kpl.   </li>
  <li> Komponenttien jaeottelu kansioita 5kpl   </li>
  
  <li> ja niillä kansioilla alikansioita 4kpl</li>

</ol>
      
  </li>
     
</ul>

</div>
  </Container>
     
      </Container>

</div>

    
  );
}

export default Home;