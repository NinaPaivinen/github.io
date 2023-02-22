import React from "react";
import Card from "react-bootstrap/Card";
import "./web.css"

function AboutCard() {
  return (
    <Card className="quoteCardView">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"}}>
        
            <br/>Hypätään lähemmäs nykyaikaan. 
          
          <p></p>
            Kun aloitin AMK:ssa opiskelun tradenomin tietojenkäsittelijäksi, ei ollut vielä mitään hajua tulevasta
            suuntautumisesta.
            
          <p></p>
           Ensimmäisen vuoden jälkeen en vieläkään tiennyt mitä suuntauslinjaa lähtisin opiskelemaan.
       
           <p></p>
             Toisena opiskelu   vuonna
            web-ohjelmointi kurssi avarti elämäää eteenpäin.
             Mutta ei mikään tullut helposti... niinkuin aina tapani mukaan inhosin uutta, koska en ollut sisältänyt vielä
             Fullstack käsitettä. 
            Kun käsitin fullstack idean ja pääsin siihen sisälle huomasin että tämä oli minulle se mieleinen.
            
          <p></p>
            
            React ja NodeJS
            yhteistyö toimissa websovelluksessa oli kaunista ja nerokasta. Kyllä tekniikan kehitys on ihanaa, kun mietitään että
             joskus on meillä ollut vain  Windows95 ja perus HTML sivut tässä maailmassa.
             Reactilla tykkään erityisesti puuhastella.
             
             
          <p></p>
             Digitaalisoituminen on 
             tätä päivää ja yritysten kannattaisi ottaa siitä kaikki hyöty irti liiketoiminnan parantamiseksi, moni firma
             onkin sen ymmärtänyt. Digitaalisaatio on tullut tänne jäädäkseen, eikä varmasti ole minnekkään häviämässä
             vaan päinvastoin lisääntyy koko ajan.

             
          
          
      </p>

    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
