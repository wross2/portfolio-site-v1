import React, { Component } from 'react'
import Header from './sections/Header'
import Conclusion from './sections/Conclusion'
import ProjectSection from './sections/ProjectSection'

class Home extends Component {
    render() {
        return(
            <div id="home-page">
                <Header />
                <ProjectSection />
                <Conclusion />
            </div>
        )
    }
}

export default Home;