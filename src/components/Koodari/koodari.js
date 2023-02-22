
import Particle from "../Particle";
import { Link } from 'react-router-dom';

import Tilt from "react-parallax-tilt";
import Kuva from "../Assets/code.jpg";

import { Container} from "react-bootstrap";
import styles from "./koodari.module.css";

import "./koodari.scss";

import "./main.css";


function Koodari()  {
  const mystyle = {
    color: "white",
  };

  return (
    <Container class={styles.koodariSection}>  
      

<Tilt>
              <img src={Kuva} class={styles.kuvaK} height="350" alt="avatar"  />
            </Tilt>

<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Koodari</h3>
    </div>
  </div>
</div>
<p style={mystyle}>Olen aloittava ohjelmoija ja joku päivä toivottavasti huippu sellainen.. no saa nähdä🤷‍♂️
</p>
      <Particle></Particle>
<div class="container h-100">
  <div class="row align-middle">
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-1">
        <div class="txt">
          <h1>Koodari</h1>
          <p>Miksi ihmeessä kukaan haluaa olla koodari?</p>
        </div>
        <Link to="/koodariksi">Lue lisää</Link>
       
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-2">
        <div class="txt">
          <h1>Webohjelmointi</h1>
          <p>Suuntauslinjan valinnan vaikeus</p>
        </div>
        <Link to="/web">Lue lisää</Link>
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-3">
        <div class="txt">
          <h1>Projectit</h1>
          <p>Valmiita projectien esittelyjä</p>
        </div>
        <Link to="/projects">Lue lisää</Link>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>
  </Container>
  )
}


export default Koodari;
