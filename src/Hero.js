import React from "react";
import { Button } from "reactstrap";
import "./App.css";
import { Redirect } from "react-router-dom";

import {useHistory} from 'react-router-dom';


function Hero () {
  let history=useHistory();
  const redirect = () => {
    history.push('/card')
  }
  return(
  <div>
    
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>DIGITAL MEDICAL RECORD</h1>
          <h3>USER INTERFACE | APPLICATION PROGRAM INTERFACE | DATABASE</h3>
          <Button outline color="warning" onClick={redirect}> 
            Explore More
          </Button>
        </div>
      </section>
    </main>
  </div>
  );
}

export default Hero;