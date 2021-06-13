import React,{Component} from 'react'
import Card from './card-ui.js';
import img1 from './img/imgcards1.png';
import img2 from './img/imgcards2.png';
import img3 from './img/imgcards3.jpg';
import img4 from './img/imgcards4.png';
import img5 from './img/imgcard5.jpg';
import img6 from './img/imgcard6.png';
import img7 from './img/imgcard7.jpg';
import img8 from './img/imgcard8.png';
import img9 from './img/imgcard9.jpg';
import img10 from './img/imgcard10.jpg';
import img11 from './img/imgcard11.jpg';
import img12 from './img/imgcard12.jpg';
import { Container } from "reactstrap";



class cardui2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <Container>
            <header className="headerTitle text-center">
             
            <h1>MICROSERVICES</h1>
           
          </header>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Card imgsrc={img1} title="PERSONAL INFORMATION" info="" link="activity_delhi"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="EMERGENCY INFORMATION"info="" />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="CONTACT INFORMATION" info=""/>
                </div>
                
                <div className="col-md-4">
                    <Card imgsrc={img4} title="BLOOD PRESSURE" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img5} title="RADIOLOGY" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img6} title="PATHOLOGY" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img7} title="PRESCRIPTION" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img8} title="ALLERGY" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img9} title="SPO2" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img10} title="VACCINE" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img11} title="SURGERY" info=""/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img12} title="FAMILY HISTORY" info=""/>
                </div>
            </div>
            </div>
              </Container>
        );
    }
}

export default cardui2;