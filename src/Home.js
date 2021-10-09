import React, { Component } from 'react'
import About from './sections/About'
import Conclusion from './sections/Conclusion'
import Projects from './sections/Projects'

class Home extends Component {
    render() {
        return(
            <div id="home-page">
                <About />
                <Projects />
                <Conclusion />
            </div>
        )
    }
}

export default Home;