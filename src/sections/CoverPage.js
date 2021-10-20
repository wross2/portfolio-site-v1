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

        this.state = {opacity: 1, arrowOpacity: 1, textOpacity: 1};
    }

    componentDidMount(){
        window.addEventListener('scroll', this._onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    _onScroll = (e) => {
        const opacity = 1 - ((window.scrollY - (window.innerHeight/7)) / (window.innerHeight/3));
        if (opacity >= 1) {
            this.setState({opacity: 1, arrowOpacity: 1, textOpacity: 1});
            return
        }
        if (opacity < 0) {
            this.setState({opacity: 0, arrowOpacity: 0, textOpacity: 0});
            return
        }
        
        this.setState({opacity: opacity, 
                       arrowOpacity: 0, 
                       textOpacity: opacity/4});
    }

    render(){
    return (<>
    <div className="cover-sheet" style={{opacity: this.state.opacity}}></div>
    <div className="cover-page" onScroll={this._onScroll} style={{opacity: this.state.textOpacity}}>
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