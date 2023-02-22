import React from "react";
import styles from "./Cover.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import AnimatedText from 'react-animated-text-content';

function Cover() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
  return (
<div>
<div class={styles.imageContainer}>
  

<div className={styles.koodattuT}>KOODATTU</div>
</div>
<h1  className={styles.oma}>
<AnimatedText 
  animationType="lights">
              Welcome here
</AnimatedText>
</h1>


</div>
  );
}

export default Cover;

