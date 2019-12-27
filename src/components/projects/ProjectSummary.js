import React from'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (<div>
    <div className="project-list section">
        <div className="card z-depth-o project-summary">
            <div className="card-content pink lighten-3 hoverable">
             <span className="card-title white-text">{project.title}</span>
                <p>{project.authorFirstName}{project.authorLastName}</p>
                <p className="white-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    </div>
</div>)
} 

export default ProjectSummary