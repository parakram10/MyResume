import React from "react";
// import Linkedin from "../style/linkedin.png"; 

class project extends React.Component{
    
    render(){
        return(
            <div className="mainProjectDiv">
                <div className="projectName">{this.props.projectName}</div>
                <div className="mainDivProject">
                    <div className="projectImg"><img src={this.props.projectImg} alt="Project"></img></div>

                    <div className="projectDetail"><p>{this.props.projectDesc}</p></div>
                </div>
                <div className="techUsedInProject">
                    <p className="techUsed">Technology Used:</p>

                    <div className="techName">{this.props.projectTech}</div>
                </div>
            </div>
        );
    }
}

export default project;