import React, {Component} from 'react'
import projectData from '../content/projects'
import { ReactComponent as GithubIcon } from '../images/icons/github-icon.svg';
import { ReactComponent as LinkIcon } from '../images/icons/link-icon.svg';
import './styles/projects.css';

const ProjectPanel = props => {
    const project = props.project
    const listItems = project.tech.map((tech, index) => {
        return <li key={index}>{tech}</li>
    })
    return(
        <div className="project-card" id={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <span>
                <a className="svg-icons" href={project.site} target="_blank" rel="noreferrer noopener">
                    <LinkIcon className="link-icon" />
                </a>
                <a className="svg-icons" href={project.codeRepo} target="_blank" rel="noreferrer noopener">
                    <GithubIcon className="github-icon" />
                </a>
            </span>
            <ul>{listItems}</ul>
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
            <section className={className} >
                <div className="section-container" id="projects-section">
                    {projectPanels}
                </div>
            </section>
        )
    }
}

export default Projects