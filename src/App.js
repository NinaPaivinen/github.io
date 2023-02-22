import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mina from "./components/mina/mina.js";
import Koodari from "./components/Koodari/koodari.js";
import Contact from "./components/Contact/Contact";
import Credits from "./components/Credits/credits.js";
import Web from "./components/Koodari/Web/Web.js";
import Koodariksi from "./components/Koodari/Coder/Coder.js";
import Projects from "./components/Koodari/Projects/Projects";
import Home from "./components/Home/Home";


import MetaTags from 'react-meta-tags';

import {

  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <MetaTags>
      <meta http-equiv='cache-control' content='no-cache'> </meta>
<meta http-equiv='expires' content='0'>  </meta>
<meta http-equiv='pragma' content='no-cache'> </meta>
          </MetaTags>

      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mina" element={<Mina />} />
          <Route path="/koodari" element={<Koodari />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web" element={<Web />} />
          <Route path="/koodariksi" element={<Koodariksi />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credits" element={<Credits />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
  
        <Footer/>
      </div>

    </Router> 
    
    
      
  );
}

export default App;
