import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import "./styles/cover-page.css";


const typingExecution = (typewriter) => {typewriter
    .start().pauseFor(2000).changeDelay(200)
    .typeString("Hello.").pauseFor(1000).changeDelay(150)
    .typeString(" My name is William Ross.").pauseFor(1000)
    .typeString(" I am a<br>Creator.").pauseFor(1000)
    .deleteChars(8).pauseFor(500).typeString("Builder.")
    .pauseFor(1000).deleteChars(8).pauseFor(1000)
    .changeDelay(200).typeString("<u>Software Engineer</u>.")
}

class CoverPage extends Component{
    constructor(props){
        super(props);

        this.state = {opacity: 1};
    }

    componentDidMount(){
        window.addEventListener('scroll', this._onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll = (e) => {
        let opacity = 1 - ((window.scrollY - (window.innerHeight/7)) / (window.innerHeight/2));
        if (opacity > 1) opacity = 1;
        if (opacity < 0) opacity = 0;
        
        this.setState({opacity: opacity});
    }

    render(){
    return (<>
    <div className="cover-sheet" style={{opacity: this.state.opacity}}></div>
    <div className="cover-page" onScroll={this._onScroll} style={{opacity: this.state.opacity}}>
        <div className="greeting-wrapper">
            <Typewriter
                options={{
                    wrapperClassName: "Typewriter__wrapper greeting-text",
                    cursorClassName: "Typewriter__cursor greeting-cursor",
                    deleteSpeed: 30
                }}
                onInit={typingExecution}
            />
        </div>
    </div></>)
    }
}


export default CoverPage