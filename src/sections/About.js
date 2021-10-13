import React, {Component} from 'react'
import './styles/about.css'
import aboutData from '../content/about'
import TypeWriterEffect from 'react-typewriter-effect'


class About extends Component {
    render() {
        const className = this.props.className;
        const greeting = `Hello, my name is ${aboutData.name}`
        const greetingFontSize = window.innerWidth < 500 ? '1.4rem' : '3.0rem';
        console.log(window.innerWidth)
        return (
            <section className={className} id="about-section">
                <div id="about-greeting">
                    <TypeWriterEffect
                        textStyle={{
                            color: 'var(--BLACK)',
                            fontSize: greetingFontSize,
                        }}
                        startDelay={500}
                        cursorColor="var(--PURPLE)"
                        text={greeting}
                        typeSpeed={100}
                    />
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