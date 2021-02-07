import React from 'react';
import Project from './project';

class certificates extends React.Component{
    render(){
        return(
            <div className="projectMainDiv">
                <p className="projectHead">Certificates</p>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        );
    }
}

export default certificates;
