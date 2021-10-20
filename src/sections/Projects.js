import React, {Component} from 'react'
import projectData from '../content/projects'

const ProjectPanel = props => {
    const project = props.project
    const listItems = project.tech.map((tech, index) => {
        return <li key={index}>{tech}</li>
    })
    return(
        <div className="project-card">
            <div className="section-container" id={project.id}>
                <p>{project.name}</p>
                <p>Description: {project.description}</p>
                <span>
                    <a href={project.site} target="_blank" rel="noreferrer noopener">Site</a>
                    <a href={project.codeRepo} target="_blank" rel="noreferrer noopener">Code</a>
                </span>
                <ul>{listItems}</ul>
            </div>
        </div>
    )
}

class Projects extends Component {
    render() {
        const className = this.props.className;
        const projectPanels = projectData.map(project => {
            return <ProjectPanel key={project.id} project={project} />
        })
        return (
            <section className={className} id="projects-section">
                {projectPanels}
            </section>
        )
    }
}

export default Projects