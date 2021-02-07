import React from 'react';
import PDF from "../resumeFile/ParakramSingh.pdf";


class about extends React.Component{
    render(){
        return(
            <div className="mainAbout">
                <div className="aboutME">
                    <p className="intro">Let me introduce myself</p>
                    <p className="mainIntro">An Intermediate Programmer who started coding 4 years ago when he was in Class IX. I can't say if I have learnt everything, but I gained alot of exposure overtime, which only time and no practise could have provided. Coding is something I love alot from the very beginning when I started it. Nothing can be better than commanding a machine to do something for you. This very thing made me fall in love with it. ;)</p>

                    <a href={PDF} target="_blank" rel="noreferrer"><button className="resume" id="aboutResume">Resume</button></a>
                    
                </div>
                <div className="contactform">
                    <p className="formTitle">Love to hear from you...</p>
                    <form className="form">
                    <input type="text" id="fname" name="fname" placeholder="Enter Your Name"/>
                    <br></br>
                    <input type="text" id="femail" name="femail" placeholder="Enter Your Email"/>
                    <br></br>
                    <input type="text" id="fsubject" name="fsubject" placeholder="Enter Subject"/>
                    <br></br>
                    <textarea type="text" id="fmessage" name="fmessage" placeholder="Enter message here.." cols="30" rows="10"/>
                    <br></br>
                    <button className="submitFromContact">Submit</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default about;