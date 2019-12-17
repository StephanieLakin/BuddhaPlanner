import React from'react'

const ProjectSummary = ({project}) => {
    return (<div>
    <div className="project-list section">
        <div className="card z-depth-o project-summary">
            <div className="card-content pink lighten-3 hoverable">
             <span className="card-title white-text">{project.title}</span>
                <p>Posted by the SJL</p>
                <p className="white-text"> 3rd September, 2am</p>
            </div>
        </div>
    </div>
</div>)
} 

export default ProjectSummary