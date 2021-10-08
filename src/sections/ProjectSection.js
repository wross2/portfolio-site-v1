import React, {Component} from 'react'
import projectData from '../content/projects'

const ProjectPanel = props => {
    const project = props.project
    return(
        <div className="project-card" id={project.id}>
            {project.name}
        </div>
    )
}

class ProjectSection extends Component {
    render() {
        return (
            <div className="section" id="section-projects">
                {projectData.map(project => {
                    return <ProjectPanel key={project.id} project={project}/>
                })}
            </div>
        )
    }
}

export default ProjectSection