import React from 'react'
import { Container } from "reactstrap";

import {useHistory} from 'react-router-dom';

import './card-style.css';
const Card=props=>{
    let history=useHistory();
    const redirect = () => {
      history.push('/form')
    }

    return(
        <Container>
        
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc}alt="Image1" className='card-img-top'/>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                    {props.info}
                    </p>
                    <a onClick={redirect} className="btn btn-outline-success">GO</a>
                </div>
            </div>
        </div>
        </Container>



    );
}
export default Card;