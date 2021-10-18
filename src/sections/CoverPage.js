import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import "./styles/cover-page.css";


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
        console.log(window.scrollY);
        console.log(window.innerHeight);
    }

    render(){
    const greeting = `Hello, my name is William Ross`;
    return (<>
    <div className="cover-sheet" style={{opacity: this.state.opacity}}></div>
    <div className="cover-page" onScroll={this._onScroll} style={{opacity: this.state.opacity}}>
        <div className="greeting-wrapper">
            <Typewriter
                options={{
                    wrapperClassName: "Typewriter__wrapper greeting-text",
                    cursorClassName: "Typewriter__cursor greeting-cursor"
                }}
                onInit={(typewriter) => {typewriter
                    .start()
                    .pauseFor(2500)
                    .stop()
                    .changeDelay(100)
                    .typeString(greeting)
                    .start();
                }}
            />
        </div>
    </div></>)
    }
}


export default CoverPage