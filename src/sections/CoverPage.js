import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import "./styles/cover-page.css";


const typingExecution = (typewriter) => {typewriter
    .start().pauseFor(2000).changeDelay(50)
    .typeString("Hello.").pauseFor(1500)
    .typeString(" My name is William Ross.").pauseFor(1000)
    .typeString(" I am a<br>Creator.").pauseFor(1000)
    .deleteChars(8).pauseFor(750).typeString("Builder.")
    .pauseFor(1000).deleteChars(8).pauseFor(1000)
    .changeDelay(80).typeString("<u>Software Engineer</u>.")
}

class CoverPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            opacity: 1, 
            arrowOpacity: 1, 
            greetingOpacity: 1,
            zIndex: 1001
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this._onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    // When user is scrolling down, greeting text fades out, 
    // while main content fades in.
    _onScroll = (e) => {
        const greetingOpacity = (
            1 - ((window.scrollY) / (window.innerHeight/4))
        )
        let opacity = 1 - ((window.scrollY - (window.innerHeight/3.35)) 
                            / (window.innerHeight/3.5));

        if (opacity >= 1) {
            opacity = 1
        }
        if (opacity <= 0.05) {
            this.setState({
                opacity: 0, 
                arrowOpacity: 0, 
                greetingOpacity: 0, 
                zIndex: -1});
            return
        }
        
        this.setState({opacity: opacity, 
                       arrowOpacity: greetingOpacity, 
                       greetingOpacity: greetingOpacity,
                       zIndex: 1001});
    }

    render(){
    return (<>
    <div className="cover-sheet" style={{opacity: this.state.opacity, zIndex: this.state.zIndex}}></div>
    <div className="cover-page" onScroll={this._onScroll} style={{opacity: this.state.greetingOpacity}}>
        <div className="greeting-wrapper">
            <Typewriter
                options={{
                    wrapperClassName: "Typewriter__wrapper greeting-text",
                    cursorClassName: "Typewriter__cursor greeting-cursor",
                    deleteSpeed: 20
                }}
                onInit={typingExecution}
            />
        </div>
        <div className="scroll-instruction">
            <div> </div>
            <div className="scroll-arrow" style={{opacity: this.state.arrowOpacity}}>↓</div>
        </div>
    </div></>)
    }
}


export default CoverPage