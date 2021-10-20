import React, {Component} from 'react'
import './styles/about.css'
import aboutData from '../content/about'
import myPFP from '../images/me.jpeg'



class About extends Component {
    render() {
        const className = this.props.className;

        return (
            <section className={className} id="about-section">

                <div className="pfp-container">
                    <img src={myPFP} alt="William Ross" className="about-pfp"/>
                </div>

                <div id="about-professional">
                    {aboutData.professional}
                </div>
                <div id="about-tech">
                    My web development tech stack includes:
                    <ul id="tech-list">{
                        aboutData.tech.map((tech, index) => {
                            return <li key={index}>{tech}</li>
                        })
                    }</ul>
                </div>
            </section>
        )
    }
}

export default About