import React, {Component} from 'react'
import projectData from '../content/projects'
import { ReactComponent as GithubIcon } from '../images/icons/github-icon.svg';
import { ReactComponent as LinkIcon } from '../images/icons/link-icon.svg';
import './styles/projects.css';


const ProjectLinkIcons = props => {
    const project = props.project;
    let codeLink, siteLink;
    if (project.site){
        siteLink = (
            <a className="svg-icons" href={project.site} target="_blank" rel="noreferrer noopener">
                <LinkIcon className="link-icon" />
            </a>
        )
    }
    if (project.codeRepo){
        codeLink = (
            <a className="svg-icons" href={project.codeRepo} target="_blank" rel="noreferrer noopener">
                <GithubIcon className="github-icon" />
            </a>
        )
    }
    return (
        <>
            {siteLink}
            {codeLink}
        </>
    )
}

const ProjectPanel = props => {
    const project = props.project
    const listItems = project.tech.map((tech, index) => {
        return <li key={index}>{tech}</li>
    })
    return(
        <div className="project-card" id={project.id}>
            <h2>{project.name}</h2>
            <div className="proj-content-wrapper">
                <p className="project-description">{project.description}</p>
                <span className="project-link-icons">
                    <ProjectLinkIcons project={project} />
                </span>
                <ul className="project-tech-list">{listItems}</ul>
            </div>
            <div className="img-container">
                <a href={project.site} target="_blank" rel="noreferrer noopener">
                    <div className="img-wrapper">
                        <img className={"project-images"} src={project.image} alt="Project preview"/>
                    </div>
                </a>
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
            <section className={className} >
                <div className="section-container" id="projects-section">
                    <h1 className="proj-sect-header">Featured Projects</h1>
                    {projectPanels}
                </div>
            </section>
        )
    }
}

export default Projects