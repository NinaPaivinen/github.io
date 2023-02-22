import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"

function Kirjoitus() {
  return (
    <Typewriter
      options={{
        strings: [
          "1st. React on hyvä työkalu tehdä isompiakin ohjelmia komponenttien avulla",
          "2st. React on nykyaikaa ehdottomasti",
          "3st. Kauniita ja käyttäjä ystävällisiä UI ratkaisuja",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Kirjoitus;
