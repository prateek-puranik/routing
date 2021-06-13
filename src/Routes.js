import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'

import Carousel from './Carousel.js'
import Card from './cardui2'
import { Button } from "reactstrap";



import PersonalInfo from './Form6.js'
import { BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Route from 'react-router-dom/Route';
import Activity_delhi from './Activity_delhi.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Routes() {
  return (
    <Router>
    <div>
   
     
        <Switch>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
     
        </Switch>
     
      

    
    
    
    </div>
    </Router>
     
   
    
    
    
    
  );
}

export default Routes;
