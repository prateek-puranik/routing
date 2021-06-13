import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Card from './cardui2'
import registerServiceWorker from "./registerServiceWorker";


import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

ReactDOM.render(
  
        <App />
      
      , 
      document.getElementById("root"));
registerServiceWorker();