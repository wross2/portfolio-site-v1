import React, {Component} from 'react'
import projectData from '../content/projects'

const ProjectPanel = props => {
    const project = props.project
    return(
        <div className="project-card" id={project.id}>
            <p>{project.name}</p>
            <p>Description: {project.description}</p>
            <span>
                <a href={project.site} target="_blank" rel="noreferrer">Site </a>
                <a href={project.codeRepo} target="_blank" rel="noreferrer">Code</a>
            </span>
            <ul>{
                project.tech.map((tech, index) => {
                    return <li key={index}>{tech}</li>
                })
            }</ul>
        </div>
    )
}

class Projects extends Component {
    render() {
        const className = this.props.className;
        return (
            <section className={className} id="projects-section">
                {projectData.map(project => {
                    return <ProjectPanel key={project.id} project={project}/>
                })}
            </section>
        )
    }
}

export default Projects