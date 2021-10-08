import React, { Component } from 'react'
import About from './sections/About'
import Conclusion from './sections/Conclusion'
import ProjectSection from './sections/ProjectSection'

class Home extends Component {
    render() {
        return(
            <div id="home-page">
                <About />
                <ProjectSection />
                <Conclusion />
            </div>
        )
    }
}

export default Home;