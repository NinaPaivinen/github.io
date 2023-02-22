
import { Container} from "react-bootstrap";
import styles from "./Coder.module.css"
import { ImPointRight } from "react-icons/im";
import Particle from "../../Particle";

import "./main.css"

function Coder() {


  return (
    <section>
   
       <Container fluid className={styles.KoodariSection}>
  
  <Container>


      <Particle/>

      <div className={styles.oma}>

  <p style={{ color: "pink" }}>Miksi ihmeessä kukaan haluaa olla?</p>

<span  className={styles.otsikko}>KOODARI</span>
       
          <p style={{ textAlign: "justify" }}>
         
          Persoonaltani olen ihminen, joka uppoontuu tekemiseen ja <span className="purple"> mielenkiinnon kohteen </span>
syvästi.
            <br /> Tein ensimmäisen verkkosivuston 2008 tietämillä ollessani tuolloin teini-ikäinen.
            <br/>Teemana oli Hopeanuoli fanisivu ja sivusto oli tehty HTML ja CSS:ää käyttäen.Harmi ei ole kuvaa tallessa, mutta
            sivusto käytti frameja ja hieroin (jo tuolloin) pitkään sivuston visuaalista ulkonäköä.
            <br />Ohjelmana käytin Microsoft FrontPagea. Oli tuohon aikaan myös kiinnostunut testailemaan Linux
            ympäristöjä. Ubuntu oli ja on edelleenki minusta paras  Linux distro, mutta KDE voittaa ulkonäöllään.
            <br/>   
            <br/> 
            <div class="quote-wrapper">
  <blockquote class="text" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
    <p>Koodarin vaikeimmat vaiheet oli ensimmäinen vuosi. Testataan käynnistyykö koodarin ajatusmaailma.
            
            Opi se idea mikä on olio-ohjelmmointi, fullstack, tietokanta. 
            Ne kun ylitetty niin voidaan päästä syventymään
            Intohimo näyttää matkan perille</p>
    <footer>– Nina</footer>
  </blockquote>
</div>

            
            <br />
        Koodaamisessa on parasta...
          </p>
          <ul>
            <li className={styles.Activity}>
              <ImPointRight /> Siinä on haastetta.
               Lopulta taisteltua pitkään jonkun ohjelmointi 
            projektin kanssa ja
              saat sen ratkaistua, on fiilis mahtava. Muutenkin ei koodaaminen ole helpoimmasta päästä olevia töitä.
            </li>
            <li className={styles.Activity}>
              <ImPointRight /> Jatkuvaa oppimista. Kokoajan tulee uusia tekniikoita ja ohjelmointikielet kehittyvät.
              Eipähän jouda jäädä paikalleen junnaamaan. Ja muutenkin on aina löytyy jotakin koodattavaa
              mitä ei ole vielä tehnyt aiemmin.
            
            </li>
            <li className={styles.Activity}>
              <ImPointRight /> Näät mitä saat aikaan. Mukava tehdä luovaa työtä, mistä tulee sitten ihan 
              käyttäjälle joku päivä ruudulle näkyvääkin.
            </li>
          </ul>
          </div>



    </Container>
</Container>
</section>
  );
}

export default Coder;
