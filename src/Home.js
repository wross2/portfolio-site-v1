import React, { Component } from 'react'
import About from './sections/About'
import Conclusion from './sections/Conclusion'
import CoverPage from './sections/CoverPage';
import Projects from './sections/Projects'
import './home.css';

class Home extends Component {
    render() {
        const sectionClassName = "all-sections";
        return(<>
            <CoverPage />
            <main id="home-page">
                <About className={sectionClassName} />
                <Projects className={sectionClassName} />
                <Conclusion className={sectionClassName} />
            </main>
        </>)
    }
}

export default Home;