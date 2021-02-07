import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './style/style.css';

import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Certificates from "./components/certificates";


import GitHub from "./style/github.png";
import Linkedin from "./style/linkedin.png";  

class App extends React.Component{

    render(){
        return(
            <div className="mainbody">
                <div className="contentDiv">
                    <div className="socialLinks">
                        <p className="psocial">Social Links </p>
                        <hr></hr>
                        <ul className="links">
                            <a href="https://github.com/parakram10" target="_blank" rel="noreferrer"><li><img src={GitHub} alt="Github Link"></img></li></a>
                            <a href="https://www.linkedin.com/in/parakram-singh-425086170/" target="_blank" rel="noreferrer"><li><img src={Linkedin} alt="Linkedin Link"></img></li></a>
                        </ul>
                    </div>
                    <div className="Allcontent">
                        <div className="navBar">
                        <ul className="list">
                            <Link to="/" id="home" className="li">Home</Link>
                            <Link to="/project" id="projects" className="li">Projects</Link>
                            <Link to="/certificate" id="certificates" className="li">Certificates</Link>
                            <Link to="/about" id="about" className="li">About</Link>
                        </ul>
                        <div className="addComponents"> 

                            {/* <Home />
                            <About />
                            <Projects />
                            <Certificates /> */}

                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/project" component={Projects}/>
                                <Route path="/certificate" component={Certificates}/>
                            </Switch>

                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default App;