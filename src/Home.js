import React, { Component } from 'react'
import About from './sections/About'
import Conclusion from './sections/Conclusion'
import CoverPage from './sections/CoverPage';
import Projects from './sections/Projects'

class Home extends Component {
    render() {
        const sectionClassName = "all-sections";
        return(
            <main id="home-page">
                <CoverPage />
                <About className={sectionClassName} />
                <Projects className={sectionClassName} />
                <Conclusion className={sectionClassName} />
            </main>
        )
    }
}

export default Home;