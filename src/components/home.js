import React from 'react';
import Typed from "react-typed";
import "../style/style.css";
import myImage from "../style/pp.jpg" ;
import PDF from "../resumeFile/ParakramSingh.pdf";

class home extends React.Component{
    render(){
        return(
            <div className="homeMainDiv">
                <img src={myImage} alt="myImage" className="myimage"></img>
                <p className="hello">Hello,</p>
                <p className="myname">My name is <span className="name">Parakram Singh</span></p>
                <p><Typed 
                strings={["I'm a Web Developer.","I'm an Android Developer.","I'm an Intermediate Coder."]}
                typeSpeed={40}
                backSpeed={40}
                attr="placeholder"
                loop>
                    <input type = "text" className="knows"/>
                </Typed>
                </p>
                <a href={PDF} target="_blank" rel="noreferrer"><button className="resume">Resume</button></a>
                <div id="cpp" className="tech">C++</div>
                <div id="c" className="tech">C</div>
                <div id="android" className="tech">Android</div>
                <div id="sql" className="tech">SQL</div>
                <div id="dsa" className="tech">DSA</div>
                <div id="java" className="tech">JAVA(Basic)</div>
                <div id="reactjs" className="tech">ReactJS</div>
            </div>
        );
    }
}

export default home;