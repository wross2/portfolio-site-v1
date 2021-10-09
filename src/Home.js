import React, { Component } from 'react'
import About from './sections/About'
import Conclusion from './sections/Conclusion'
import Projects from './sections/Projects'

class Home extends Component {
    render() {
        const sectionClassName = "main-section";
        return(
            <main id="home-page">
                <About className={sectionClassName} />
                <Projects className={sectionClassName} />
                <Conclusion className={sectionClassName} />
            </main>
        )
    }
}

export default Home;