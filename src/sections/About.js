import React, {Component} from 'react'
import './styles/about.css'
import aboutData from '../content/about'
import Typewriter from 'typewriter-effect';

const Greeting = () => {
    const greeting = `Hello, my name is ${aboutData.name}`
        //const greetingFontSize = window.innerWidth < 500 ? '1.4rem' : '3.0rem';
        //console.log(window.innerWidth)
    return (<Typewriter
        options={{
            cursorClassName: "Typewriter__cursor typewriter-cursor"
        }}
        onInit={(typewriter) => {typewriter
            .start()
            .pauseFor(2500)
            .stop()
            //.changeDelay(100)
            .typeString(greeting)
            .start();
        }}
    />)
}


class About extends Component {
    render() {
        const className = this.props.className;

        return (
            <section className={className} id="about-section">
                <div id="about-greeting">
                    {Greeting()}
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