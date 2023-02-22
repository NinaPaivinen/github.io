import React, { useState, useEffect } from "react";

import classNames from 'classnames';
import { Col } from "react-bootstrap";
import styles from "./contact.module.css"
import {
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import classnames from 'classnames';
import "./main.css"


function Contact() {
  
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    
  
    <div>
      
<div className={styles.FF}>

<div className={classNames(styles.innerHeader,styles.flex)}>
<h1 class="jt --debug">
  <span class="jt__row">
    <span class="jt__text">Ota yhteyttä</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Ota yhteyttä</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Ota yhteyttä</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Ota yhteyttä</span>
  </span>
</h1>



</div>


<div>
  
<svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className={styles.parallax}>
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
</div>
<div className={classNames(styles.content, styles.flex)}> 
<Col md={12} className={styles.homeAboutSocial}>

          
<p className={styles.contentBox}>
<span className="purple">Löydät minut</span>
<span  style={{color: "black"}}> alla olevien kanavien kautta </span> 

<ul className={styles.homeAboutSocialLinks}>

<li className={styles.socialIcons}>
  <a
    href="https://www.linkedin.com/in/nina-p%C3%A4ivinen-b72119244/"
    target="_blank"
    rel="noreferrer"
    className={classnames(styles.iconColour,styles.homeSocialIcons)}
  >
    <FaLinkedinIn />
  </a>
</li>
<li className={styles.socialIcons}>
  <a
    href="https://www.facebook.com/profile.php?id=100071736757784"
    target="_blank"
    rel="noreferrer"
    className={classnames(styles.iconColour,styles.homeSocialIcons)}
  >
    <AiFillFacebook />
  </a>
</li>
</ul>
</p>
<p className={styles.muokkaus}>Happy to hear you!</p>
</Col>
  



</div>
    </div>

    
  );
}

export default Contact;